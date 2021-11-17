const playBtn = document.querySelector(".play-pause");
const prevBtn = document.querySelector(".bx-skip-previous");
const nextBtn = document.querySelector(".bx-skip-next");
const audio = document.getElementById('audio');
const progress = document.querySelector(".song_current_status");
const progressContainer = document.querySelector(".song_status");
const progress_dot = document.querySelector(".song_current_dot");
const title = document.querySelector(".song_title");
const singer = document.querySelector(".song_singer");
const cover = document.getElementById('song_pic');
const song_cover = document.querySelector('.song_cover');
const random = document.querySelector('.bx-shuffle');
const currTime = document.querySelector('.song_ongoing_time');
const durTime = document.querySelector('.song_length');


// Song titles
const songs = [
  [1,'Agar Tum Saath Ho' , 'Arijit Singh, Alka Yagnik'],
  [2,'Baarish Lete Aana' , 'Darshan Raval'],
  [3,'Channa Mereya' , 'Arijit Singh'],
  [4,'Darkhaast' , 'Arijit Singh, Sunidhi Chauhan'],
  [5,'Duniyaa' , 'Akhil, Dhvani Bhanushali'],
  [6,'Hasi' , 'Ami Mishra'],
  [7,'Hosanna' , 'Leon D\'Souza, A. R. Rahman, Suzanne D\'Mello'],
  [8,'Humsafar' , 'Akhil Sachdeva, Mansheel Gujral'],
  [9,'Night Changes' , 'One Direction'],
  [10,'Perfect' , 'Ed Sheeran'],
  [11,'Phir Kabhi' , 'Arijit Singh'],
  [12,'Samjhawan' , 'Arijit Singh'],
  [13,'Say You Won\'t Let Go' , 'James Aurthur'],
  [14,'Shape Of You' , 'Ed Sheeran'],
  [15,'Shayad' , 'Arijit Singh'],
  [16,'Tera Ban Jaunga' , 'Akhil Sachdeva, Tulsi Kumar'],
  [17,'This Town' , 'Niall Horan'],
  [18,'Treat You Better' , 'Shawn Mendes'],
  [19,'Tu Chahiye' , 'Atif Aslam'],
  [20,'We Dont Talk Anymore' , 'Charlie Puth, Selena Gomez'],
  [21,'What Makes You Beautiful' , 'One Direction'],
  [22,'Shiddat Title Track','Manan Bhardwaj'], 
  [23,'Hymn For The Weekend','Coldplay'], 
  [24,'Get Low','Dillon Francis,DJ Snake'],
  [25,'Stay','The Kid LAROI,Justin Bieber'],
  [26,'Closer','Chainsmokers'],
  [27,'Kabhi Tumhhe','Darshan Raval,Javed-Mohsin'],
  [28,'What Makes You Beautiful','One Direction'],
  [29,'Love Me Again','John Newman'],
];

// Keep track of song
let songIndex = 26;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
  title.innerText = song[1];
  singer.innerText = song[2];
  audio.src = `audio/${song[0]}.mp3`;
  cover.src = `images/${song[0]}.jpg`;
}

// Play song
function playSong() {
  playBtn.classList.remove("bx-play");
  playBtn.classList.add("bx-pause");
  title.classList.add("active");
  song_cover.classList.add("active");

  audio.play();
}

// Pause song
function pauseSong() {
  playBtn.classList.remove("bx-pause");
  playBtn.classList.add("bx-play");
  title.classList.remove("active");
  song_cover.classList.remove("active");

  audio.pause();
}

// Previous song
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Next song
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress_dot.style.left = `${progressPercent}%`;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

//get duration & currentTime for Time of song
function DurTime (e) {
	const {duration,currentTime} = e.srcElement;
	var sec;
	var sec_d;

	// define minutes currentTime
	let min = (currentTime==null)? 0:
	 Math.floor(currentTime/60);
	 min = min <10 ? '0'+min:min;

	// define seconds currentTime
	function get_sec (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec = Math.floor(x) - (60*i);
					sec = sec <10 ? '0'+sec:sec;
				}
			}
		}else{
		 	sec = Math.floor(x);
		 	sec = sec <10 ? '0'+sec:sec;
		 }
	} 

	get_sec (currentTime,sec);

	// change currentTime DOM
	currTime.innerHTML = min +':'+ sec;

	// define minutes duration
	let min_d = (isNaN(duration) === true)? '0':
		Math.floor(duration/60);
	 min_d = min_d <10 ? '0'+min_d:min_d;


	 function get_sec_d (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec_d = Math.floor(x) - (60*i);
					sec_d = sec_d <10 ? '0'+sec_d:sec_d;
				}
			}
		}else{
		 	sec_d = (isNaN(duration) === true)? '0':
		 	Math.floor(x);
		 	sec_d = sec_d <10 ? '0'+sec_d:sec_d;
		 }
	} 

	// define seconds duration
	
	get_sec_d (duration);

	// change duration DOM
	durTime.innerHTML = min_d +':'+ sec_d;
		
};

// Event listeners
playBtn.addEventListener('click', () => {
   const isPlaying = playBtn.classList.contains('bx-play');

  if (isPlaying) {
    playSong();
  } else {
    pauseSong();
  }
});

// Random functiom
function randomSong() { 
  songIndex = Math.floor(Math.random() * (songs.length));
  loadSong(songs[songIndex]);
  playSong();
} 

// Random song
random.addEventListener('click',randomSong);


// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);

// Time of song
audio.addEventListener('timeupdate',DurTime);

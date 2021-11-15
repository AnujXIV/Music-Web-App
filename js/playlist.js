const playlist = document.querySelector('.songs');



// Song list
const songs_playlist = [
    [1, 'Agar Tum Saath Ho' , 'Arijit Singh, Alka Yagnik'],
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

//Loading songs in playlist
function loadplaylist(songs) {
    for(i=0;i<songs.length;i++){
        const track = document.createElement('div');
        const trackplay = document.createElement('div');
        const play = document.createElement('div');
        const trackname = document.createElement('div');
        const fav = document.createElement('div');
        track.className='track';
        trackplay.className='trackplay';
        trackplay.setAttribute('onclick','loadfromlist('+(songs[i][0]-1)+')');
        play.className='play';
        trackname.className='trackname';
        fav.className='fav';

        const song_cover = document.createElement('img');
        song_cover.className='bubbly';
        song_cover.src=`images/${songs[i][0]}.jpg`;
        song_cover.alt='cover pic';

        const song_name = document.createElement('h3');
        const song_singer = document.createElement('h4');
        song_name.innerText=songs[i][1];
        song_singer.innerText=songs[i][2];

        const fav_div = document.createElement('div');
        fav_div.className='favourite';
        const fav_i = document.createElement('i');
        fav_i.className='bx bx-heart';

        playlist.appendChild(track);
        track.appendChild(trackplay);
        track.appendChild(fav);
        trackplay.appendChild(play);
        trackplay.appendChild(trackname);
        play.appendChild(song_cover);
        trackname.appendChild(song_name);
        trackname.appendChild(song_singer);
        fav_div.appendChild(fav_i);
        fav.appendChild(fav_div);
    }
}

loadplaylist(songs_playlist);

function loadfromlist(sid){
    songIndex = sid;
    loadSong(songs[songIndex]);
    playSong();
}

// const fav = document.querySelector(".favourite");
//Favourite Selection
function favourite(event){
    const isfav = event.target.classList.contains('bx-heart');
    // const chck = event.target;
    console.log();
    if(isfav){
        event.target.classList.remove('bx-heart');
        event.target.classList.add('bxs-heart');
    } else{
        event.target.classList.remove('bxs-heart');
        event.target.classList.add('bx-heart');
    }
    
}

// fav.addEventListener('click',favourite,false);
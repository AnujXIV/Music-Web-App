let btn = document.querySelector(".bx-menu");
let menubtn = document.querySelector(".sidebar_menu");
let sidebar = document.querySelector(".side_bar");
let sidebar_list = document.querySelector(".sidebar_playlist");
let playlistbtn = document.querySelector(".playlist");
let list_btn = document.querySelector(".bxs-playlist");
let close_btn = document.querySelector(".bx-x");


btn.onclick = function(){
    sidebar.classList.toggle("active");
    menubtn.classList.toggle("active");

    if (!(sidebar_list.classList.contains('active'))) {
        sidebar_list.classList.toggle("active");
        playlistbtn.classList.toggle("active");
    }
}

list_btn.onclick = function(){
    sidebar_list.classList.toggle("active");
    playlistbtn.classList.toggle("active");

    if (!(sidebar.classList.contains('active'))) {
        sidebar.classList.toggle("active");
        menubtn.classList.toggle("active");
    }
}

close_btn.onclick = function(){
    sidebar_list.classList.toggle("active");
    playlistbtn.classList.toggle("active");

    if (!(sidebar.classList.contains('active'))) {
        sidebar.classList.toggle("active");
        menubtn.classList.toggle("active");
    }
}


let song_cover = document.querySelector(".song_cover");
let song_title = document.querySelector(".song_title");

// song_cover.onclick = function(){
//     song_title.classList.toggle("active");
//     song_cover.classList.toggle("active");
// }

let play = document.querySelector(".play-pause");
let progress_status = document.querySelector(".song_current_status");
let progress_dot = document.querySelector(".song_current_dot");


play.onclick = function(){
    play.classList.toggle("bx-play");
    play.classList.toggle("bx-pause");
    song_title.classList.toggle("active");
    song_cover.classList.toggle("active");
    togglePlay();
    // progressbar();
    // progress_status.classList.toggle("progress_animation");
    // progress_dot.classList.toggle("progress_animation_dot");
}

// function progressbar(){
    
//     var width = 1;
//     var progress_identity = setInterval(timer,10);

//     function timer(){
//         if(width >= 100 ){
//             clearInterval(progress_identity);
//         }else{
//             width++;
//             progress_status.style.width = width + '%';
//         }
//     }
// }


// song length

function length(){
  console.log("length running");
  var audio = document.getElementById("audio");
var time_length = document.querySelector(".song_length");
var m ,s;
  // m = parseInt(audio.duration/60);
  m = Math.floor(audio.duration / 60);
  // s = parseInt(((audio.duration/60).toFixed(2) - m )*100);
  s = (audio.duration - m * 60).toFixed(0);

time_length.innerHTML = m + ":" + s ; 
}
window.onload = function(){
  length();
}

var timer;
var percent = 0;
audio.addEventListener("playing", function(_event) {
  var duration = _event.target.duration;
  advance(duration, audio);
});
audio.addEventListener("pause", function(_event) {
  clearTimeout(timer);
});
var advance = function(duration, element) {
  var progress = document.querySelector(".song_current_status");
  var progress_dot = document.querySelector(".song_current_dot");
  var time_status = document.querySelector(".song_ongoing_time");
  var min,sec;

  min = Math.floor(element.currentTime/60);
  sec = (Math.floor(element.currentTime - min*60)).toLocaleString('en-US',{minimumIntegerDigits:2,useGrouping:false});
  increment = 10/duration;
  
  // time_status.innerHTML = (element.currentTime/100).toFixed(2);
  time_status.innerHTML = min + ":" + sec;
  percent = Math.min(increment * element.currentTime * 10, 100);
//   console.log(percent);
  progress.style.width = percent +'%' ;
  progress_dot.style.left = percent + '%';
  startTimer(duration, element);
}
var startTimer = function(duration, element){ 
  if(percent < 100) {
    timer = setTimeout(function (){advance(duration, element)}, 100);
  }
}

function togglePlay (e) {
  e = e || window.event;
  // var btn = e.target;
  if (!audio.paused) {
    // btn.classList.remove('active');
    audio.pause();
    isPlaying = false;
  } else {
    // btn.classList.add('active');
    audio.play();
    isPlaying = true;
  }
}

var next = document.querySelector(".bx-skip-next");
var prev = document.querySelector(".bx-skip-previous");
var s_title = document.querySelector(".song_title");
var s_singer = document.querySelector(".song_singer");
var s_audio = document.getElementById("audio");
var s_cover = document.getElementById("song_pic");

next.onclick = function(){

  s_cover.src = ("../images/hymn.jpg");
  s_title.innerHTML = "Hymn for the Weekend";
  s_singer.innerHTML = "Coldplay";
  s_audio.src = ("../audio/Hymnfortheweekend.mp3");
  window.onload = length();

} 
prev.onclick = function(){

  s_cover.src = ("../images/Shiddat.jpg");
  s_title.innerHTML = "Shiddat Title Track";
  s_singer.innerHTML = "Manan Bhardwaj";
  s_audio.src = ("../audio/Title Track Shiddat 320 Kbps.mp3");
  window.onload.length();

} 
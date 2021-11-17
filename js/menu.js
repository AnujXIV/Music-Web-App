let btn = document.querySelector(".bx-menu");
let menubtn = document.querySelector(".sidebar_menu");
let sidebar = document.querySelector(".side_bar");
let sidebar_list = document.querySelector(".sidebar_playlist");
let playlistbtn = document.querySelector(".playlist");
let list_btn = document.querySelector(".bxs-playlist");
let close_btn = document.querySelector(".bx-x");


btn.onclick = function(){
    sidebar.classList.toggle("active");
    sidebar.classList.add("glasseffect");
    menubtn.classList.toggle("active");


    if (!(sidebar_list.classList.contains('active'))) {
        sidebar_list.classList.toggle("active");
        playlistbtn.classList.toggle("active");
    }
}

list_btn.onclick = function(){
    sidebar_list.classList.toggle("active");
    sidebar_list.classList.add("glasseffect");
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

const shareBtn = document.querySelector('.sharebtn');
const shareOptions = document.querySelector('.share-options');

shareBtn.addEventListener('click', () => {
    shareOptions.classList.toggle('active');
})
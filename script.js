const get = async () => {
    const f = await fetch("http://5dd1894f15bbc2001448d28e.mockapi.io/playlist")
    const data = await f.json();


    var music_library = document.getElementById("root");

    function music_play() {
        music.src = music;
        music.play();
    }
    var t = 0;
    // First-div for preview left
    var left_div = document.createElement("div");
    left_div.style.width = "65%";
    var image_div = document.createElement("div");
    var image = document.createElement("img");
    image_div.className = "images";
    var music = new Audio(data[0].file)
    const changePreview = (change) => {
        t = change;
        music = new Audio(data[change].file)
        image.src = data[Number(change)].albumCover;
        track_name.innerHTML = data[Number(change)].track
        artist_name.innerHTML = data[Number(change)].artist
    }

    image.style.width = '100%'
    image.style.borderRadius = "10px"
    var progress_bar = document.createElement("hr");
    progress_bar.style.width = "90%";
    progress_bar.style.height = "4px"
    progress_bar.style.marginLeft = "5%"
    progress_bar.style.marginTop = "5%"
    progress_bar.style.marginBottom = "5%"
    var controls = document.createElement("div");
    controls.style.justifyContent = "center"
    controls.style.display = "flex"
    controls.style.columnGap = "2%"
    var bckwrd_btn = document.createElement("p");
    bckwrd_btn.innerHTML = `<i class="fas fa-backward"></i>`
    bckwrd_btn.addEventListener("click", () => changePreview(t - 1))
    var play_btn = document.createElement("p");
    play_btn.innerHTML = `<i class="fas fa-play"></i>`
    play_btn.addEventListener("click", (e) => e.target.parentNode.innerHTML = e.target.parentNode.innerHTML === `<i class="fas fa-pause"></i>` ? `<i class="fas fa-play"></i>` : `<i class="fas fa-pause"></i>`);
    
    play_btn.addEventListener("click", ()=>funck())
  
    function funck(){
if(music.pause){
    music.play()
}
else{
    music.pause
}

    }

    var frwrd_btn = document.createElement("p");
    frwrd_btn.innerHTML = `<i class="fas fa-forward"></i>`;
    frwrd_btn.addEventListener("click", () => changePreview(t + 1))
    var track_name = document.createElement("h3");

    var artist_name = document.createElement("p");
    image_div.appendChild(image);
    left_div.appendChild(image_div);
    left_div.appendChild(progress_bar)
    controls.appendChild(bckwrd_btn)
    controls.appendChild(play_btn)
    controls.appendChild(frwrd_btn)
    left_div.appendChild(controls);
    left_div.appendChild(track_name);
    left_div.appendChild(artist_name);
    music_library.appendChild(left_div);

    changePreview(t);


    // Second-div for music lists right
    function func(e) {
        // console.log(e.target.parentNode.getAttribute('class'));
        var p = e.target
        while (p.className !== "music_image") {
            p = p.parentNode
        }
        //    var change  = p.querySelector('img').src;

        changePreview(p.id);
    }
    var right_div = document.createElement("div")
    // right_div.addEventListener("click", (e) => func(e), false)
    // right_div.style.border = "2px solid red";
    right_div.style.width = "35%"
    right_div.style.overflow = "scroll"
    // function func(e){
    //     var change = e.target.getAttribute('src');
    //     changePreview(change);

    for (var i in data) {
        var contain = document.createElement("div");
        contain.className = "music_image";
        contain.id = i
        contain.addEventListener("click", (e) => func(e), true)
        var image_music = document.createElement("img");
        image_music.src = data[i].albumCover;
        // image_music.onclick = (e) => func(e);
        image_music.style.width = "30%";
        image_music.style.borderRadius = "6%"
        var ma_div = document.createElement("div")
        var music_name = document.createElement("h3");
        music_name.innerHTML = data[i].track;
        var singer_div = document.createElement("div");
        var singer_name = document.createElement("p");
        singer_name.innerHTML = data[i].artist;
        contain.appendChild(image_music);
        ma_div.appendChild(music_name);
        ma_div.appendChild(singer_name)
        contain.appendChild(ma_div);
        right_div.appendChild(contain);

    }
    music_library.appendChild(right_div);
    console.log(data)


}
get();
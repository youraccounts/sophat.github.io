let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');



let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [
  {
    name: "ស្រលាញ់តែម្នាក់",
    path: "https://favsong.netlify.app/asset/audios/savoeun/ស្រលាញ់តែម្នាក់.mp3",
    img: "/asset/images/savoeun.png",
    singer: "ជា សាវឿន"
  },
  {
    name: "ស្ទឹងសង្កែជាសាក្សី",
    path: "https://favsong.netlify.app/asset/audios/savoeun/ស្ទឹងសង្កែជាសាក្សី.mp3",
    img: "/asset/images/savoeun.png",
    singer: "ជា សាវឿន"
  },
  {
    name: "ស្តាយពាក្យសម្បថ",
    path: "https://favsong.netlify.app/asset/audios/savoeun/ស្តាយពាក្យសម្បថ.mp3",
    img: "/asset/images/savoeun.png",
    singer: "ជា សាវឿន"
  },
  {
    name: "សុំភ្លក់បានទេ",
    path: "https://favsong.netlify.app/asset/audios/savoeun/សុំភ្លក់បានទេ.mp3",
    img: "/asset/images/savoeun.png",
    singer: "ជា សាវឿន"
  },
  {
    name: "វាលស្រែ១០០",
    path: "https://favsong.netlify.app/asset/audios/savoeun/វាលស្រែ១០០.mp3",
    img: "/asset/images/savoeun.png",
    singer: "ជា សាវឿន"
  },
  {
    name: "យាមទៀតហើយឬបង",
    path: "https://favsong.netlify.app/asset/audios/savoeun/យាមទៀតហើយឬបង.mp3",
    img: "/asset/images/savoeun.png",
    singer: "ជា សាវឿន"
  },
  {
    name: "ម៉ាយឬមុំ",
    path: "https://favsong.netlify.app/asset/audios/savoeun/ម៉ាយឬមុំ.mp3",
    img: "/asset/images/savoeun.png",
    singer: "ជា សាវឿន"
  },
  {
    name: "ព្រលឹងចុងសក់",
    path: "https://favsong.netlify.app/asset/audios/savoeun/ព្រលឹងចុងសក់.mp3",
    img: "/asset/images/savoeun.png",
    singer: "ជា សាវឿន"
  },
  {
    name: "ពេញចិត្តជានិច្ច",
    path: "https://favsong.netlify.app/asset/audios/savoeun/ពេញចិត្តជានិច្ច.mp3",
    img: "/asset/images/savoeun.png",
    singer: "ជា សាវឿន"
  },
  {
    name: "ផ្កាស្បៃរឿង",
    path: "https://favsong.netlify.app/asset/audios/savoeun/ផ្កាស្បៃរឿង.mp3",
    img: "/asset/images/savoeun.png",
    singer: "ជា សាវឿន"
  },
  {
    name: "ប៉ៃលិនខ្ញុំអើយ",
    path: "https://favsong.netlify.app/asset/audios/savoeun/ប៉ៃលិនខ្ញុំអើយ.mp3",
    img: "/asset/images/savoeun.png",
    singer: "ជា សាវឿន"
  },
  {
    name: "ត្រូវសើចឬយំ (កវីចាញ់ស្នេហ៍)",
    path: "https://favsong.netlify.app/asset/audios/savoeun/ត្រូវសើចឬយំ (កវីចាញ់ស្នេហ៍).mp3",
    img: "/asset/images/savoeun.png",
    singer: "ជា សាវឿន"
  },
  {
    name: "ឈាមអនាថា",
    path: "https://favsong.netlify.app/asset/audios/savoeun/ឈាមអនាថា.mp3",
    img: "/asset/images/savoeun.png",
    singer: "ជា សាវឿន"
  },
  {
    name: "ចែចង់",
    path: "https://favsong.netlify.app/asset/audios/savoeun/ចែចង់.mp3",
    img: "/asset/images/savoeun.png",
    singer: "ជា សាវឿន"
  },
  {
    name: "ចាស់ហើយលោកប្តី",
    path: "https://favsong.netlify.app/asset/audios/savoeun/ចាស់ហើយលោកប្តី.mp3",
    img: "/asset/images/savoeun.png",
    singer: "ជា សាវឿន"
  },
  {
    name: "ក្រមុំព្រួលៗ (អុំទូកឆ្លងព្រែក)",
    path: "https://favsong.netlify.app/asset/audios/savoeun/ក្រមុំព្រួលៗ (អុំទូកឆ្លងព្រែក).mp3",
    img: "/asset/images/savoeun.png",
    singer: "ជា សាវឿន"
  },
  {
    name: "ក្រមុំបរប៉ៃលិន",
    path: "https://favsong.netlify.app/asset/audios/savoeun/ក្រមុំបរប៉ៃលិន.mp3",
    img: "/asset/images/savoeun.png",
    singer: "ជា សាវឿន"
  },
  {
    name: "កម្លោះក្រមុំរើសគូ (ប្រទះតែស្រីធាត់ៗ)",
    path: "https://favsong.netlify.app/asset/audios/savoeun/កម្លោះក្រមុំរើសគូ (ប្រទះតែស្រីធាត់ៗ).mp3",
    img: "/asset/images/savoeun.png",
    singer: "ជា សាវឿន"
  },
  {
    name: "កន្ទ្រែតមាសបង",
    path: "https://favsong.netlify.app/asset/audios/savoeun/កន្ទ្រែតមាសបង.mp3",
    img: "/asset/images/savoeun.png",
    singer: "ជា សាវឿន"
  },

];


// All functions


// function load the track
function load_track(index_no) {
  clearInterval(timer);
  reset_slider();

  track.src = All_song[index_no].path;
  title.innerHTML = All_song[index_no].name;
  track_image.src = All_song[index_no].img;
  artist.innerHTML = All_song[index_no].singer;
  track.load();

  timer = setInterval(range_slider, 1000);
  total.innerHTML = All_song.length;
  present.innerHTML = index_no + 1;
}

load_track(index_no);


//mute sound function
function mute_sound() {
  track.volume = 0;
  volume.value = 0;
  volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
function justplay() {
  if (Playing_song == false) {
    playsong();

  } else {
    pausesong();
  }
}


// reset song slider
function reset_slider() {
  slider.value = 0;
}

// play song
function playsong() {
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause fa-2x black-text" aria-hidden="true"></i>';
}

//pause song
function pausesong() {
  track.pause();
  Playing_song = false;
  play.innerHTML = '<i class="fa fa-play fa-2x black-text" aria-hidden="true"></i>';
}


// next song
function next_song() {
  if (index_no < All_song.length - 1) {
    index_no += 1;
    load_track(index_no);
    playsong();
  } else {
    index_no = 0;
    load_track(index_no);
    playsong();

  }
}


// previous song
function previous_song() {
  if (index_no > 0) {
    index_no -= 1;
    load_track(index_no);
    playsong();

  } else {
    index_no = All_song.length;
    load_track(index_no);
    playsong();
  }
}


// change volume
function volume_change() {
  volume_show.innerHTML = recent_volume.value;
  track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration() {
  slider_position = track.duration * (slider.value / 100);
  track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch() {
  if (autoplay == 1) {
    autoplay = 0;
  } else {
    autoplay = 1;
  }

  var element = document.getElementById("onauto");
  element.classList.toggle("activebtn");
}


function range_slider() {
  let position = 0;

  // update slider position
  if (!isNaN(track.duration)) {
    position = track.currentTime * (100 / track.duration);
    slider.value = position;
  }


  // function will run when the song is over
  if (track.ended) {
    play.innerHTML = '<i class="fa fa-play fa-2x black-text" aria-hidden="true"></i>';
    if (autoplay == 1) {
      index_no += 1;
      load_track(index_no);
      playsong();
    }
  }
}
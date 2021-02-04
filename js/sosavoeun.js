let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
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
     name: "អ្នកបំរើតាមយន្តហោះ",
     path: "https://favsong.netlify.app/asset/audios/so-savoeun/អ្នកបំរើតាមយន្តហោះ.mp3",
     img: "/asset/images/soSavoeun.png",
     singer: "សូ សាវឿន"
   },
   {
     name: "អូនស្នេហ៍បងពិត",
     path: "https://favsong.netlify.app/asset/audios/so-savoeun/អូនស្នេហ៍បងពិត.mp3",
     img: "/asset/images/soSavoeun.png",
     singer: "សូ សាវឿន"
   },
   {
     name: "ស្នេហាក្នុងពេលរាត្រី",
     path: "https://favsong.netlify.app/asset/audios/so-savoeun/ស្នេហាក្នុងពេលរាត្រី.mp3",
     img: "/asset/images/soSavoeun.png",
     singer: "សូ សាវឿន"
   },
   {
     name: "ស្ទឹងសែនប៉ារីស",
     path: "https://favsong.netlify.app/asset/audios/so-savoeun/ស្ទឹងសែនប៉ារីស.mp3",
     img: "/asset/images/soSavoeun.png",
     singer: "សូ សាវឿន"
   },
   {
     name: "សុវិជាមាតា",
     path: "https://favsong.netlify.app/asset/audios/so-savoeun/សុវិជាមាតា.mp3",
     img: "/asset/images/soSavoeun.png",
     singer: "សូ សាវឿន"
   },
   {
     name: "ល្ងាចអូនទៅដល់",
     path: "https://favsong.netlify.app/asset/audios/so-savoeun/ល្ងាចអូនទៅដល់.mp3",
     img: "/asset/images/soSavoeun.png",
     singer: "សូ សាវឿន"
   },
   {
     name: "ព្រៃល្បាស់ខៀវខ្ចី",
     path: "https://favsong.netlify.app/asset/audios/so-savoeun/ព្រៃល្បាស់ខៀវខ្ចី.mp3",
     img: "/asset/images/soSavoeun.png",
     singer: "សូ សាវឿន"
   },
   {
     name: "ជាតិខ្មែរមិនមែនល្ងង់ខ្លៅ",
     path: "https://favsong.netlify.app/asset/audios/so-savoeun/ជាតិខ្មែរមិនមែនល្ងង់ខ្លៅ.mp3",
     img: "/asset/images/soSavoeun.png",
     singer: "សូ សាវឿន"
   },
   {
     name: "កំពង់ហ្លួងដួងចិត្ត",
     path: "https://favsong.netlify.app/asset/audios/so-savoeun/កំពង់ហ្លួងដួងចិត្ត.mp3",
     img: "/asset/images/soSavoeun.png",
     singer: "សូ សាវឿន"
   },
   {
     name: "កូនមាសម្តាយ",
     path: "https://favsong.netlify.app/asset/audios/so-savoeun/កូនមាសម្តាយ.mp3",
     img: "/asset/images/soSavoeun.png",
     singer: "សូ សាវឿន"
   },
   {
     name: "កុំឲ្យចាស់ទាន់",
     path: "https://favsong.netlify.app/asset/audios/so-savoeun/កុំឲ្យចាស់ទាន់.mp3",
     img: "/asset/images/soSavoeun.png",
     singer: "សូ សាវឿន"
   },
   {
     name: "កុំឲ្យខ្មាស់សត្វ",
     path: "https://favsong.netlify.app/asset/audios/so-savoeun/កុំឲ្យខ្មាស់សត្វ.mp3",
     img: "/asset/images/soSavoeun.png",
     singer: "សូ សាវឿន"
   },

];


// All functions


// function load the track
function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


//mute sound function
function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }


// reset song slider
 function reset_slider(){
	 slider.value = 0;
 }

// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause fa-2x black-text" aria-hidden="true"></i>';
}

//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play fa-2x black-text" aria-hidden="true"></i>';
}


// next song
function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


// previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


// change volume
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration(){
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


function range_slider(){
	let position = 0;
        
        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
       // function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play fa-2x black-text" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
     }
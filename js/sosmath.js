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
     name: "គងមាស",
     path: "https://favsong.netlify.app/asset/audios/sosmath/គងមាស.mp3",
     img: "/asset/images/math.png",
     singer: "Sos Math"
   },
   {
     name: "គួរទុកជាគំរូស្ត្រី",
     path: "https://favsong.netlify.app/asset/audios/sosmath/គួរទុកជាគំរូស្ត្រី.mp3",
     img: "/asset/images/math.png",
     singer: "Sos Math"
   },
   {
     name: "គ្រំចិត្តព្រោះស្នេហ៍",
     path: "https://favsong.netlify.app/asset/audios/sosmath/គ្រំចិត្តព្រោះស្នេហ៍.mp3",
     img: "/asset/images/math.png",
     singer: "Sos Math"
   },
   {
     name: "ឃ្លាតពីអូនព្រោះរឿងទឹកដី",
     path: "https://favsong.netlify.app/asset/audios/sosmath/ឃ្លាតពីអូនព្រោះរឿងទឹកដី.mp3",
     img: "/asset/images/math.png",
     singer: "Sos Math"
   },
   {
     name: "ចាន់អើយ អើយចាន់",
     path: "https://favsong.netlify.app/asset/audios/sosmath/ចាន់អើយ អើយចាន់.mp3",
     img: "/asset/images/math.png",
     singer: "Sos Math"
   },
   {
     name: "ឆោមអើយឆោមឆើត",
     path: "https://favsong.netlify.app/asset/audios/sosmath/ឆោមអើយឆោមឆើត.mp3",
     img: "/asset/images/math.png",
     singer: "Sos Math"
   },
   {
     name: "ទឹកដក់បាតព្រែក",
     path: "https://favsong.netlify.app/asset/audios/sosmath/ទឹកដក់បាតព្រែក.mp3",
     img: "/asset/images/math.png",
     singer: "Sos Math"
   },
   {
     name: "ទឹកភ្នែកម្តាយខ្ញុំ",
     path: "https://favsong.netlify.app/asset/audios/sosmath/ទឹកភ្នែកម្តាយខ្ញុំ.mp3",
     img: "/asset/images/math.png",
     singer: "Sos Math"
   },
   {
     name: "ទឹកភ្នែកអាដាំ",
     path: "https://favsong.netlify.app/asset/audios/sosmath/ទឹកភ្នែកអាដាំ.mp3",
     img: "/asset/images/math.png",
     singer: "Sos Math"
   },
   {
     name: "ផាហ៊ុម កវី",
     path: "https://favsong.netlify.app/asset/audios/sosmath/ផាហ៊ុម កវី.mp3",
     img: "/asset/images/math.png",
     singer: "Sos Math"
   },
   {
     name: "ផ្ញើកងចងដៃ",
     path: "https://favsong.netlify.app/asset/audios/sosmath/ផ្ញើកងចងដៃ.mp3",
     img: "/asset/images/math.png",
     singer: "Sos Math"
   },
   {
     name: "ភ្នំភ្លើងស្នេហា",
     path: "https://favsong.netlify.app/asset/audios/sosmath/ភ្នំភ្លើងស្នេហា.mp3",
     img: "/asset/images/math.png",
     singer: "Sos Math"
   },
   {
     name: "មាសស្នេហ៍",
     path: "https://favsong.netlify.app/asset/audios/sosmath/មាសស្នេហ៍.mp3",
     img: "/asset/images/math.png",
     singer: "Sos Math"
   },
   {
     name: "សូមអញ្ជើញឡើងរាំ",
     path: "https://favsong.netlify.app/asset/audios/sosmath/សូមអញ្ជើញឡើងរាំ.mp3",
     img: "/asset/images/math.png",
     singer: "Sos Math"
   },
   {
     name: "ស្នាមជីវិត",
     path: "https://favsong.netlify.app/asset/audios/sosmath/ស្នាមជីវិត.mp3",
     img: "/asset/images/math.png",
     singer: "Sos Math"
   },
   {
     name: "ស្រណោះភ្នំស្រី",
     path: "https://favsong.netlify.app/asset/audios/sosmath/ស្រណោះភ្នំស្រី.mp3",
     img: "/asset/images/math.png",
     singer: "Sos Math"
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
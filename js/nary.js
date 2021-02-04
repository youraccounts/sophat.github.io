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
     name: "អូរទឹកថ្លាបុប្ផាប៉ៃលិន",
     path: "https://favsong.netlify.app/asset/audios/nary/អូរទឹកថ្លាបុប្ផាប៉ៃលិន.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "អាចារ្យបាំងឈើ",
     path: "https://favsong.netlify.app/asset/audios/nary/អាចារ្យបាំងឈើ.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "អណ្តូងទឹកខែវស្សា",
     path: "https://favsong.netlify.app/asset/audios/nary/អណ្តូងទឹកខែវស្សា.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "ឡានចៅហ្វាយទេអូន",
     path: "https://favsong.netlify.app/asset/audios/nary/ឡានចៅហ្វាយទេអូន.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "ហ៊ានភ្នាល់ដាក់អី",
     path: "https://favsong.netlify.app/asset/audios/nary/ហ៊ានភ្នាល់ដាក់អី.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "សំណាងខ្ញុំ (ឆ្នោតមួយសន្លឹក)",
     path: "https://favsong.netlify.app/asset/audios/nary/សំណាងខ្ញុំ (ឆ្នោតមួយសន្លឹក).mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "ស្រមៃបរតាំងស៊ូ",
     path: "https://favsong.netlify.app/asset/audios/nary/ស្រមៃបរតាំងស៊ូ.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "ស្រណោះភ្លៀង",
     path: "https://favsong.netlify.app/asset/audios/nary/ស្រណោះភ្លៀង.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "ស្នេហ៍អូនស្នេហ៍បង",
     path: "https://favsong.netlify.app/asset/audios/nary/ស្នេហ៍អូនស្នេហ៍បង.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "សារ៉ាវ៉ាន់ឆ្នាំថ្មី",
     path: "https://favsong.netlify.app/asset/audios/nary/សារ៉ាវ៉ាន់ឆ្នាំថ្មី.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "សងជម្ងឺចិត្តហើយ",
     path: "https://favsong.netlify.app/asset/audios/nary/សងជម្ងឺចិត្តហើយ.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "វិមានទឹកភ្នែក",
     path: "https://favsong.netlify.app/asset/audios/nary/វិមានទឹកភ្នែក.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "រឿងដាក់ធ្មេញ",
     path: "https://favsong.netlify.app/asset/audios/nary/រឿងដាក់ធ្មេញ.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "រាំ Cha Cha Cha",
     path: "https://favsong.netlify.app/asset/audios/nary/រាំ Cha Cha Cha.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "រាត្រីត្រកាល",
     path: "https://favsong.netlify.app/asset/audios/nary/រាត្រីត្រកាល.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "ឫស្សីមួយដើម",
     path: "https://favsong.netlify.app/asset/audios/nary/ឫស្សីមួយដើម.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "យើងស្មោះនឹងគ្នា",
     path: "https://favsong.netlify.app/asset/audios/nary/យើងស្មោះនឹងគ្នា.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "មួយច្រមុះឥឡូវ",
     path: "https://favsong.netlify.app/asset/audios/nary/មួយច្រមុះឥឡូវ.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "មិនខ្វះទេស្រី",
     path: "https://favsong.netlify.app/asset/audios/nary/មិនខ្វះទេស្រី.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "ព្រោះស្រលាញ់",
     path: "https://favsong.netlify.app/asset/audios/nary/ព្រោះស្រលាញ់.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "ព្រោះនាងមានប្តី",
     path: "https://favsong.netlify.app/asset/audios/nary/ព្រោះនាងមានប្តី.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "ពិតមែនឬ",
     path: "https://favsong.netlify.app/asset/audios/nary/ពិតមែនឬ.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "ផ្ការាំង",
     path: "https://favsong.netlify.app/asset/audios/nary/ផ្ការាំង.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "ប្តីខ្ញុំកុងសែថ្មី",
     path: "https://favsong.netlify.app/asset/audios/nary/ប្តីខ្ញុំកុងសែថ្មី.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "បុប្ផាបាងកក",
     path: "https://favsong.netlify.app/asset/audios/nary/បុប្ផាបាងកក.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "នោរអើយស្រីនោរ",
     path: "https://favsong.netlify.app/asset/audios/nary/នោរអើយស្រីនោរ.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "នាំគ្នារាំ_ Jerk",
     path: "https://favsong.netlify.app/asset/audios/nary/នាំគ្នារាំ_ Jerk.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "ទ្រូប្រើសពីរ",
     path: "https://favsong.netlify.app/asset/audios/nary/ទ្រូប្រើសពីរ.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "ថើបថ្លៃប៉ុន្មាន",
     path: "https://favsong.netlify.app/asset/audios/nary/ថើបថ្លៃប៉ុន្មាន.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "តារាខ្ញុំ",
     path: "https://favsong.netlify.app/asset/audios/nary/តារាខ្ញុំ.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "ជើងភ្នំទទា",
     path: "https://favsong.netlify.app/asset/audios/nary/ជើងភ្នំទទា.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "ជួបភ័ក្រ្តជួបស្នេហ៍ (ម្ចាស់ខ្លុយស្នេហ៍)",
     path: "https://favsong.netlify.app/asset/audios/nary/ជួបភ័ក្រ្តជួបស្នេហ៍ (ម្ចាស់ខ្លុយស្នេហ៍).mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "គោចាស់ស្មៅខ្ចី",
     path: "https://favsong.netlify.app/asset/audios/nary/គោចាស់ស្មៅខ្ចី.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "ខ្វះរូបអូន",
     path: "https://favsong.netlify.app/asset/audios/nary/ខ្វះរូបអូន.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "ខ្មាស់អស់បក្សា",
     path: "https://favsong.netlify.app/asset/audios/nary/ខ្មាស់អស់បក្សា.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "ខឹងច្រើនឆាប់ចាស់",
     path: "https://favsong.netlify.app/asset/audios/nary/ខឹងច្រើនឆាប់ចាស់.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "ក្រោមម្លប់ដូង",
     path: "https://favsong.netlify.app/asset/audios/nary/ក្រោមម្លប់ដូង.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "កូលាបកោះ",
     path: "https://favsong.netlify.app/asset/audios/nary/កូលាបកោះ.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "កូបស្រីយកប្តីបែបណា",
     path: "https://favsong.netlify.app/asset/audios/nary/កូបស្រីយកប្តីបែបណា.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "កុំប្រកាន់បងអី",
     path: "https://favsong.netlify.app/asset/audios/nary/កុំប្រកាន់បងអី.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "កុំងងក់",
     path: "https://favsong.netlify.app/asset/audios/nary/កុំងងក់.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "កណ្តៀងត្បូងឆាំង",
     path: "https://favsong.netlify.app/asset/audios/nary/កណ្តៀងត្បូងឆាំង.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "កញ្ញា Jerk",
     path: "https://favsong.netlify.app/asset/audios/nary/កញ្ញា Jerk.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
   },
   {
     name: "៣២ លក់គុយទាវ",
     path: "https://favsong.netlify.app/asset/audios/nary/៣២ លក់គុយទាវ.mp3",
     img: "/asset/images/Nary.png",
     singer: "អ៊ឹង ណារី"
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
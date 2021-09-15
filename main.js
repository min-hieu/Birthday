const rythm = new Rythm();

rythm.addRythm('happyFeet', 'twist', 0, 10, {
              min: 9,
              max: 30
            })

rythm.setMusic('./happyBirthday.mp3');
rythm.start();

var onScroll = function() {
	var scrollPos = window.scrollY;
	var overlay = document.querySelector('.eyzContainer');
	var light = document.querySelector('#light');
	console.log(scrollPos);
	if (scrollPos > 1321){
		overlay.classList.add('notFixed');
	} 
	else {
		overlay.classList.remove('notFixed');
	}
	if (scrollPos > 1100) {
		light.classList.add('lightoff');
	}
	else {
		light.classList.remove('lightoff');
	}
	if (rythm.stopped == true){
		rythm.start();
	}
}

onScroll();
document.addEventListener('scroll', onScroll);

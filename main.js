const rythm = new Rythm();

rythm.addRythm('happyFeet', 'twist', 0, 10, {
              min: 20,
              max: 180
            })

rythm.setMusic('./happyBirthday.mp3');
rythm.start();

var onScroll = function() {
	var scrollPos = window.scrollY;
	var overlay = document.querySelector('.eyzContainer');
	var light = document.querySelector('#light');
	console.log(scrollPos);
	if (scrollPos > 580){
		overlay.classList.add('notFixed');
	} 
	else {
		overlay.classList.remove('notFixed');
	}
	if (scrollPos > 650) {
		light.classList.add('lightoff');
	}
	else {
		light.classList.remove('lightoff');
	}
}

onScroll();
document.addEventListener('scroll', onScroll);
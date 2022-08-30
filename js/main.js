// Splash Screen

let splashScreen = document.getElementById('splash-screen');
let splashLogo = document.getElementById('splash-logo');

setInterval(() => {
	splashScreen.style.opacity = '0';
}, 5000);

// Rating Timeout

setTimeout(() => {
	let userRating = prompt('Do you like this project??(Rate out of 10)');
	alert('Creator Contact: @_akashwut | Instagram');
}, 15000);

// SearchBar Active Styles

let searchico = document.getElementById('searchicohidden');
let searchinput = document.getElementById('inputsearch');
let crossico = document.getElementById('crossicohidden');
let header = document.getElementById('header');
let body = document.getElementById('body');
let headerRight = document.querySelector('.header-controls');
let headerLeft = document.querySelector('.menu-icon-wrap');
let searchBox = document.getElementById('searchbar');
let searchIcon = document.getElementById('searchiconbox');



function searchReset() {
	crossico.style.display = 'none';
	searchico.style.display = 'none';
	searchinput.style.paddingLeft = "0px";
	searchIcon.style.borderLeft = "none";
	searchBox.style.borderColor = "rgba(255, 255, 255, 0.2)";
}



function searchStyle() {
	searchico.style.display = 'flex';
	crossico.style.display = 'flex';
	searchIcon.style.borderLeft = "1px solid rgb(49 67 155)";
	searchBox.style.borderColor = "rgb(49 67 155)";
	searchinput.style.paddingLeft = "26px";
}

searchinput.addEventListener('click', ()=> {
	searchStyle();
	crossico.style.opacity = 0;
});

crossico.addEventListener('click', ()=> {
	searchReset();
	searchinput.value = "";
});

searchinput.addEventListener('input', ()=> {
	if(searchinput.value != "") {
		crossico.style.opacity = 1;
	} else {
		crossico.style.opacity = 0;

	}
});

headerLeft.addEventListener('click', ()=> {
	if (searchico.style.display == 'flex') {
		searchReset();
	}
})

headerRight.addEventListener('click', ()=> {
	if (searchico.style.display == 'flex') {
		searchReset();
	}
})

// Interest Card Hover $ Selection Styles

let topics = Array.from(document.getElementsByClassName('interest-cards'));

topics.forEach((eachTopic) => {
	eachTopic.addEventListener('click', (selection)=> {
		topics.forEach(ifAnyTopic => {
		if (ifAnyTopic.classList.contains('selected-interest')) {
			ifAnyTopic.classList.remove('selected-interest');	
		}

	});
		selected = selection.target;
		selected.classList.add("selected-interest");
	})
});

// SideNav Selection Styles

let sideNavIcon = document.querySelectorAll('.sidenav-icon');

sideNavIcon.forEach(sideNav => {
	sideNav.addEventListener('click', (selection)=> {
		sideNavIcon.forEach(ifAnySideNavIcon => {
			if (ifAnySideNavIcon.classList.contains('material-symbols-rounded')) {
				ifAnySideNavIcon.classList.add('material-symbols-outlined');
				ifAnySideNavIcon.classList.remove('material-symbols-rounded');
			}
		});
		selected = selection.target;
		sideNav.classList.add('material-symbols-rounded');
	})
});

// Video Data Entry

let channelLogo = document.querySelectorAll('.channel-logoimg');
let videoPreview = document.querySelectorAll('.video-previewimg');
let videoCard = document.querySelectorAll('.video-card');
let videoTitle = document.querySelectorAll('.video-title');
let channelName = document.querySelectorAll('.channel-name');
let videoView = document.querySelectorAll('.video-views');
let videoDate = document.querySelectorAll('.video-date');
let videoDuration = document.querySelectorAll('.video-duration');

videoCard.forEach((videoCards, i) => {
	videoPreview[i].src = videos[i].videoPreview;
	videoTitle[i].innerText = videos[i].videoTitle;
	channelName[i].innerText = videos[i].channeName;
	channelLogo[i].src = videos[i].channelLogo;
	videoView[i].innerText = videos[i].videoViews;
	videoDate[i].innerText = videos[i].videoDate;
	videoDuration[i].innerText = videos[i].videoDuration;
});
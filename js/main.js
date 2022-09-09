// Splash Screen

let splashScreen = document.getElementById('splash-screen');
let splashLogo = document.getElementById('splash-logo');

setInterval(() => {
	splashScreen.style.opacity = '0';
}, 5000);

// Rating Timeout

// Screen Width Fix

window.onload = function () {
        if (window.innerWidth <= 400) {
          var mvp = document.getElementById("myViewport");
          mvp.setAttribute("content", "width = 400");
        }
};

// SearchBar Active Styles

let searchico = document.getElementById('searchicohidden');
let searchinput = document.getElementById('inputsearch');
let crossico = document.getElementById('crossicohidden');
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

searchinput.addEventListener('click', () => {
	searchStyle();
	crossico.style.opacity = 0;
});

crossico.addEventListener('click', () => {
	searchReset();
	searchinput.value = "";
});

searchinput.addEventListener('input', () => {
	if (searchinput.value != "") {
		crossico.style.opacity = 1;
	} else {
		crossico.style.opacity = 0;

	}
});

headerLeft.addEventListener('click', () => {
	if (searchico.style.display == 'flex') {
		searchReset();
	}
})

headerRight.addEventListener('click', () => {
	if (searchico.style.display == 'flex') {
		searchReset();
	}
})

// Interest Card Hover $ Selection Styles & Arrow

let topicMain = document.getElementsByClassName('interests')[0];
let topics = Array.from(document.getElementsByClassName('interest-cards'));
let topicsWrap = document.getElementsByClassName('interests-wrap')[0];
let backArrow = document.getElementById('back-arrow');
let nextArrow = document.getElementById('next-arrow');

topics.forEach((eachTopic) => {
	eachTopic.addEventListener('click', (selection) => {
		topics.forEach(ifAnyTopic => {
			if (ifAnyTopic.classList.contains('selected-interest')) {
				ifAnyTopic.classList.remove('selected-interest');
			}

		}); searchReset();
		selected = selection.target;
		selected.classList.add("selected-interest");
	});
});

let screenWidth = screen.width;

topicsWrap.addEventListener('scroll', ()=> {
	if (screenWidth > 550) {
		if (topicsWrap.scrollLeft > 0) {
			backArrow.style.display = 'flex';
			nextArrow.style.display = 'none';
		}
		else {
			backArrow.style.display = 'none';
			nextArrow.style.display = 'flex';
		}
	}
	else {
		nextArrow.style.display = 'none';
		backArrow.style.display = 'none';
	}
});

backArrow.addEventListener('click', ()=> {
	let scrollValue = parseInt(topicsWrap.scrollLeft);
	topicsWrap.scrollLeft = scrollValue - 100;
});

nextArrow.addEventListener('click', ()=> {
	let scrollValue = parseInt(topicsWrap.scrollLeft);
	topicsWrap.scrollLeft = scrollValue + 100;
});


// SideNav Selection Styles

let sideNavIcon = document.querySelectorAll('.sidenav-icon');

sideNavIcon.forEach(sideNav => {
	sideNav.addEventListener('click', (selection) => {
		sideNavIcon.forEach(ifAnySideNavIcon => {
			if (ifAnySideNavIcon.classList.contains('material-symbols-rounded')) {
				ifAnySideNavIcon.classList.add('material-symbols-outlined');
				ifAnySideNavIcon.classList.remove('material-symbols-rounded');
			}
		});
		searchReset();
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
let verifiedIcon = document.querySelectorAll('.verified-icon');

videoCard.forEach((videoCards, i) => {
	videoCards.style.display = 'flex';
	videoPreview[i].src = videos[i].videoPreview;
	videoTitle[i].innerText = videos[i].videoTitle;
	channelName[i].innerText = videos[i].channeName;
	channelLogo[i].src = videos[i].channelLogo;
	videoView[i].innerText = videos[i].videoViews;
	videoDate[i].innerText = videos[i].videoDate;
	videoDuration[i].innerText = videos[i].videoDuration;
	verifiedIcon[i].innerText = videos[i].channelVerification;
});


// Hamburger Icon & NavBar Open

let menuBtn = document.getElementById('hamburger-icon');
let menuBtnResponsive = document.getElementById('hamburger-icon-responsive');
let headerScroll = document.querySelectorAll('.interests')[0];
let mainContent = document.getElementsByTagName('main')[0];
let mainNavBar = document.getElementsByTagName('nav')[0];


menuBtn.addEventListener('click', () => {
	if (mainNavBar.style.left == '-350px') {
		headerScroll.style.left = '224px';
		mainContent.style.marginLeft = '224px';
		mainNavBar.style.left = '-100px'
	}
	else {
		headerScroll.style.left = '76px';
		mainContent.style.marginLeft = '76px';
		mainNavBar.style.left = '-350px'
	}
});
menuBtnResponsive.addEventListener('click', () => {
	if (mainNavBar.style.left == '-350px') {
		headerScroll.style.left = '0px';
		mainContent.style.marginLeft = '0px';
		mainNavBar.style.left = '-100px'
		mainNavBar.style.top = '47px'
	}
	else {
		mainNavBar.style.left = '-350px'
		headerScroll.style.left = '0px';
		mainContent.style.marginLeft = '0px';
	}
});

// Main NavBar Styles

let mainNav = document.querySelectorAll('.main-nav');
let mainNavIcon = document.querySelectorAll('.main-nav-icon');

mainNav.forEach(mainNavs => {
	mainNavs.addEventListener('click', (selection) => {
		selected = selection.target;
		mainNav.forEach(mainNavs => {
			if (mainNavs.classList.contains('default-main-nav')) {
				mainNavs.classList.remove('default-main-nav');
			}
		});
		mainNavs.classList.add('default-main-nav');
	})
});

mainNavIcon.forEach((mainNavIcons, i) => {
	mainNavIcons.addEventListener("click", (selection) => {
		selected = selection.target;
		if (mainNavIcons.classList.contains('material-symbols-outlined')) {
			mainNavIcons.classList.remove('material-symbols-outlined');
			mainNavIcons.classList.add('material-symbols-rounded');
		}

	});
});

// Video Page Appearance

let videoPage = document.getElementsByClassName('video-page')[0];
let sideNavFixed = document.getElementsByClassName('sidenav')[0];
let youtubeIcon = document.getElementById('youtube');

videoCard.forEach(videoCards => {
	videoCards.addEventListener('click', ()=> {
		videoPage.style.right = 'unset';
		mainNavBar.style.left = '-350px';
		sideNavFixed.style.display = 'none';
		mainContent.classList.add('display-none');
		topicMain.style.display = 'none';
	})
	youtubeIcon.addEventListener('click', ()=> {
		if (screenWidth <= 550) {
			mainNavBar.style.left = '-350px';
		}
		else {
			mainNavBar.style.left = '-100px';
		}
		videoPage.style.right = '-300%';
		sideNavFixed.style.display = 'flex';
		mainContent.classList.remove('display-none');
		topicMain.style.display = 'flex';
	});
});

// Video Page Data Entry 

let videoTitlePage = document.getElementsByClassName('video_page-title')[0];
let videoSource = document.getElementById('video-source');
let videoViewsPage = document.getElementsByClassName('video_page-view-ex')[0];
let channelIconPage = document.getElementsByClassName('channel_page-logo')[0];
let channelNamePage = document.getElementsByClassName('channel_page-name')[0];
let channelSubsPage = document.querySelector('.subscribers-n');
let channelVerificationPage = document.querySelector('.verification-tick');
let likesCountPage = document.querySelector('.contols-text');

videoCard.forEach((videoCards, index) => {
	videoCard[index].index = index;
	videoCards.addEventListener('click', (e)=> {
		videoIndex = e.target.index;
		for (let i = 0; i < videos.length; i++) {
			const videoData = videos[i];
			if (videoIndex == videoData.index) {
				videoCurrent = videoData.videoTitle;
				videoTitlePage.innerText = videoData.videoTitle;
				videoSource.src = videoData.iframe;
				videoViewsPage.innerText = videoData.videoViewsEx;
				channelIconPage.src = videoData.channelLogo;
				channelNamePage.innerText = videoData.channeName;
				channelSubsPage.innerText = videoData.channelSubs;
				channelVerificationPage.innerText = videoData.channelVerification;
				likesCountPage.innerText = videoData.likesCount;
			};
		};
	});
});

let channelIconSide = document.querySelectorAll('.channel-logoimg-page');
let videoPreviewSide = document.querySelectorAll('.video-previewimg-page');
let videoCardSide = document.querySelectorAll('.video-card-page');
let videoTitleSide = document.querySelectorAll('.video-title-page');
let channelNameSide = document.querySelectorAll('.channel-name-page');
let videoViewSide = document.querySelectorAll('.video-views-page');
let videoDateSide = document.querySelectorAll('.video-date-page');
let videoDurationSide = document.querySelectorAll('.video-duration-page');
let verifiedIconSide = document.querySelectorAll('.verified-icon-page');

videoCardSide.forEach((sideVideoCards, i) => {
	sideVideoCards.style.display = 'flex';
	videoPreviewSide[i].src = videosPage[i].videoPreview;
	channelIconSide[i].src = videosPage[i].channelLogo;
	videoTitleSide[i].innerText = videosPage[i].videoTitle;
	channelNameSide[i].innerText = videosPage[i].channeName;
	videoViewSide[i].innerText = videosPage[i].videoViews;
	videoDateSide[i].innerText = videosPage[i].videoDate;
	videoDurationSide[i].innerText = videosPage[i].videoDuration;
	verifiedIconSide[i].innerText = videosPage[i].channelVerification;
});

let subBtnPage = document.getElementsByClassName('subscribe-btn')[0];

if (screenWidth <= 550) {
	subBtnPage.innerText = 'SUBSCRIBE';
}

else{
	subBtnPage.innerText = 'Subscribe';
}


// Experimental

// let header = document.getElementsByTagName('header')[0];
// let screenWidth = screen.width;

// if (screenWidth >= 500 && screenWidth <= 650) {
// 	confirm('Do you want to see Navbar menu | Experimental');
// 	if (confirm) {
// 		menuBtnResponsive.style.display = 'flex';
// 		menuBtnResponsive.style.top = '100px';
// 		header.style.padding = '10px';
// 	}
// }


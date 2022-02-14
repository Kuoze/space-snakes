const tabAbout = document.getElementById('about');
const tabRoadmap = document.getElementById('roadmap');
const tabGameplay = document.getElementById('gameplay');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const divsAbout = document.querySelectorAll('.about-section');
const divsGameplay = document.querySelectorAll('.gameplay-section');

const isMobileResolution = window.matchMedia('(max-width: 500px)');
const isTableResolution = window.matchMedia('(max-width: 1300px)');

let currentPage = 0;
let currentTab = 'about';
let totalPages = 5;

const init = () => {
    if(isMobileResolution.matches) {
        totalPages = 5
        loadSections();
    } else if(isTableResolution.matches) {
        totalPages = currentTab === 'about' ? 3 : 4;
        loadSections();
    } else {
        loadAllSections();
    }
}

const handleTab = (tab) => {

    currentPage = 0;
    currentTab = tab;
    const scrollOpt = {
        behavior: 'smooth'
    }

    if(isMobileResolution.matches){
        totalPages = 5;
        loadSections();
    } else if(isTableResolution.matches) {
        totalPages = currentTab === 'about' ? 3 : 4;
        loadSections();
    } else {
        loadAllSections();
    }

    switch (tab) {
        case 'about':            
            tabAbout.classList.remove('hide');
            tabRoadmap.classList.add('hide');
            tabGameplay.classList.add('hide');
            tabAbout.scrollIntoView(scrollOpt);
            break;
        case 'roadmap':
            btnNext.classList.add('hide');
            tabRoadmap.classList.remove('hide');
            tabAbout.classList.add('hide');
            tabGameplay.classList.add('hide');
            tabRoadmap.scrollIntoView(scrollOpt);
            break;
        case 'gameplay':
            tabGameplay.classList.remove('hide');
            tabRoadmap.classList.add('hide');
            tabAbout.classList.add('hide');
            tabGameplay.scrollIntoView(scrollOpt);
            break;
        default:
            return;
    }
}

const loadSections = () => {    
    showHideSections(currentPage);
    btnNext.classList.remove('hide');
    btnPrev.classList.add('hide');
}

const showContent = (pageToShow) => {
    currentPage = currentPage + pageToShow;

    if (currentPage >= 1) {
        btnPrev.classList.remove('hide');
    } else {
        btnPrev.classList.add('hide');
    }
    //console.log("totalPages", totalPages);

    if (currentPage < totalPages - 1) {
        btnNext.classList.remove('hide');
    } else {
        btnNext.classList.add('hide');
    }

    showHideSections(currentPage);
}

const showHideSections = (currentPage) => {
    //console.log("CurrentPage", currentPage);

    if (currentTab === "about") {
        divsAbout.forEach((div, i) => {
            div.classList.add('hide');
            if(totalPages === 5) {
                if (currentPage === 0) {
                    if (i < 2) {
                        div.classList.remove('hide');
                    }
                } else {
                    if (i === currentPage + 1) div.classList.remove('hide');
                }
            } else {
                if (currentPage === 0) {
                    if (i < 3) {
                        div.classList.remove('hide');
                    }
                } else if(currentPage === 1) {
                    if(i > 2 && i < 4 ) div.classList.remove('hide');
                } else {
                    if(i > 3 ) div.classList.remove('hide');
                }
            }
            
        });
    } else if (currentTab === "gameplay") {
        divsGameplay.forEach((div, i) => {
            div.classList.add('hide');
            if(totalPages === 5) {
                if (i === currentPage ) div.classList.remove('hide');
            } else {
                if (i === currentPage ) div.classList.remove('hide');
                if(currentPage === 3){
                    if (i > 3 ) div.classList.remove('hide');
                }
            }
        });
    }
}

const loadAllSections = () => {
    btnNext.classList.add('hide');
    btnPrev.classList.add('hide');

    if(currentTab === 'about') {
        divsAbout.forEach((div) => {
            div.classList.remove('hide');
        });
    } else if(currentTab === 'gameplay') {
        divsGameplay.forEach((div) => {
            div.classList.remove('hide');
        });
    }
}

init();
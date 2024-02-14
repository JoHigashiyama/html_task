const listMainStory = [
    'img-story/main-story/main_img_01.jpg',
    'img-story/main-story/main_img_02.jpg',
    'img-story/main-story/main_img_03.jpg',
    'img-story/main-story/main_img_04.jpg',
    'img-story/main-story/main_img_05.jpg',
];
let a = -1;
const slideShowMain = () => {
    if (a === listMainStory.length - 1) {
        a = 0;
    } else {
        a++;
    }
    document.getElementById('slideMainStory').src = listMainStory[a];
}
setInterval(slideShowMain, 3000);

const listChampion = [
    'img-story/champion/champion_img_01.jpg',
    'img-story/champion/champion_img_02.jpg',
    'img-story/champion/champion_img_03.jpg',
    'img-story/champion/champion_img_04.jpg',
    'img-story/champion/champion_img_05.jpg',
];
let b = -1;
const slideShowChampion = () => {
    if (b === listChampion.length - 1) {
        b = 0;
    } else {
        b++;
    }
    document.getElementById('slideChampion').src = listChampion[b];
}
setInterval(slideShowChampion, 3000);

const listLegend = [
    'img-story/legend/legend_img_01.jpg',
    'img-story/legend/legend_img_02.jpg',
    'img-story/legend/legend_img_03.jpg',
    'img-story/legend/legend_img_04.jpg',
    'img-story/legend/legend_img_05.jpg',
];
let c = -1;
const slideShowLegend = () => {
    if (c === listLegend.length - 1) {
        c = 0;
    } else {
        c++;
    }
    document.getElementById('slideLegend').src = listLegend[c];
}
setInterval(slideShowLegend, 3000);

const listStarDust = [
    'img-story/star-dust/star_img_01.jpg',
    'img-story/star-dust/star_img_02.jpg',
    'img-story/star-dust/star_img_03.jpg',
    'img-story/star-dust/star_img_04.jpg',
    'img-story/star-dust/star_img_05.jpg',
];
let d = -1;
const slideShowStar = () => {
    if (d === listStarDust.length - 1) {
        d = 0;
    } else {
        d++;
    }
    document.getElementById('slideStarDust').src = listStarDust[d];
}
setInterval(slideShowStar, 3000);
const listKitakami = [
    'img-dlc/kitakami/kitakami_img_01.jpg',
    'img-dlc/kitakami/kitakami_img_02.jpg',
    'img-dlc/kitakami/kitakami_img_03.jpg',
];
let a = -1;
const slideShowKitakami = () => {
    if (a === listKitakami.length - 1){
        a = 0;
    } else {
        a++;
    }
    document.getElementById('slideKitakami').src = listKitakami[a];
}
setInterval(slideShowKitakami, 3000);

const listZeiSugu = [
    'img-dlc/ZeiSugu/zeisugu_img_01.jpg',
    'img-dlc/ZeiSugu/zeisugu_img_02.jpg',
    'img-dlc/ZeiSugu/zeisugu_img_03.jpg',
];
let b = -1;
const slideShowZeiSugu = () => {
    if (b === listZeiSugu.length - 1) {
        b = 0;
    } else {
        b++;
    }
    document.getElementById('slideZeiSugu').src = listZeiSugu[b];
}
setInterval(slideShowZeiSugu, 3000);

const listLegend = [
    'img-dlc/legend/legend_img_01.jpg',
    'img-dlc/legend/legend_img_02.jpg',
    'img-dlc/legend/legend_img_03.jpg',
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

const listBlueberry = [
    'img-dlc/blueberry/blueberry_img_01.jpg',
    'img-dlc/blueberry/blueberry_img_02.jpg',
    'img-dlc/blueberry/blueberry_img_03.jpg',
];
let d = -1;
const slideShowBlueberry = () => {
    if (d === listBlueberry.length - 1) {
        d = 0;
    } else {
        d++;
    }
    document.getElementById('slideBlueberry').src = listBlueberry[d];
}
setInterval(slideShowBlueberry, 3000);

const listLeague = [
    'img-dlc/league/league_img_01.jpg',
    'img-dlc/league/league_img_02.jpg',
    'img-dlc/league/league_img_03.jpg',
    'img-dlc/league/league_img_04.jpg',
    'img-dlc/league/league_img_05.jpg',
];
let e = -1;
const slideShowLeague = () => {
    if (e === listLeague.length - 1) {
        e = 0;
    } else {
        e++;
    }
    document.getElementById('slideLeague').src = listLeague[e];
}
setInterval(slideShowLeague, 3000);

const listAreazero = [
    'img-dlc/areazero/areazero_img_01.jpg',
    'img-dlc/areazero/areazero_img_02.jpg',
    'img-dlc/areazero/areazero_img_03.jpg',
];
let f = -1;
const slideShowAreazero = () => {
    if (f === listAreazero.length - 1) {
        f = 0;
    } else {
        f++;
    }
    document.getElementById('slideAreazero').src = listAreazero[f];
}
setInterval(slideShowAreazero, 3000);
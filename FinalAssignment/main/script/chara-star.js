const star_name = document.getElementById('star-name');
const star_detail = document.getElementById('star-detail');
const star_photo = document.getElementById('star-photo');
const star_next = document.getElementById('star-next');
const star_back = document.getElementById('star-back');

const listStar = [
    {
        name: 'ピーニャ',
        detail: '<p>スター団「チーム・セギン」のボス<br>計算高い性格で、また頭が切れるとのこと<br>ラッパーのジムリーダー・ライムのファンで、<br>彼女をリスペクトしてる部分も見られる</p>',
        photo: 'img-characters/star/pi-nya.jpg',
    },
    {
        name: 'メロコ',
        detail: '<p>スター団「チーム・ジュダル」のボス<br>荒っぽく喧嘩っ早い性格だが一度決めたことは最後までつらぬく性分で、<br>仲間たちからはとても信頼されている</p>',
        photo: 'img-characters/star/meroko.jpg',
    },
    {
        name: 'シュウメイ',
        detail: '<p>スター団「チーム・シー」のボス<br>手先が器用で、メンバーのコスチュームは彼が仕立てたものである<br>性格は忍者らしく、義に厚い仲間想いである</p>',
        photo: 'img-characters/star/shumei.jpg',
    },
    {
        name: 'オルティガ',
        detail: '<p>スター団「チーム・ルクバー」のボス<br>チームのメカニック担当で、ボスの中では最年少だが腕は確かである<br>パルデアでも有数のアパレルブランド経営者の御曹司である</p>',
        photo: 'img-characters/star/oruthiga.jpg',
    },
    {
        name: 'ビワ',
        detail: '<p>スター団「チーム・カーフ」のボス<br>また、格闘技の選手でスター団の戦闘指南役をしている<br>素顔を隠す厳ついメイクのような怖い性格はしておらず、<br>他人を思いやる優しい性格で、メンバーから姉のように慕われている</p>',
        photo: 'img-characters/star/biwa.jpg',
    },
];

let countStar = 0;

const changeStar = () => {
    star_name.textContent = listStar[countStar].name;
    star_detail.innerHTML = listStar[countStar].detail;
    star_photo.src = listStar[countStar].photo;
}

const nextStar = () => {
    if (countStar == listStar.length - 1) {
        countStar = 0;
    } else {
        countStar++;
    }
    changeStar();
}

const backStar = () => {
    if (countStar === 0) {
        countStar = listStar.length - 1;
    } else {
        countStar--;
    }
    changeStar();
}

star_next.addEventListener('click', nextStar, false);
star_back.addEventListener('click', backStar, false);
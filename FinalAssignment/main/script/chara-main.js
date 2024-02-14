const main_next = document.getElementById('main-next');
const main_back = document.getElementById('main-back');
const main_name = document.getElementById('main-name');
const main_detail = document.getElementById('main-detail');
const main_photo = document.getElementById('main-photo');

const listMain = [
    {
        name: 'ネモ',
        detail: '<p>明るく元気な性格で、とにかくポケモンバトルが大好き<br>チャンピオンランクの称号を持っており、<br>バトルの腕前は折り紙付きの凄腕ポケモントレーナー<br>しかし、モンスターボールを投げるのは苦手という意外な一面を持つ</p>',
        photo: 'img-characters/main/nemo.jpg',
    },
    {
        name: 'ペパー',
        detail: '<p>料理が得意な先輩<br>ポケモンを元気にする健康料理を研究している<br>ポケモンバトルは苦手なようで、主人公に秘伝スパイス探しの協力を頼む</p>',
        photo: 'img-characters/main/pepa.jpg',
    },
    {
        name: 'ボタン',
        detail: '<p>とある理由であまり学校にきていないようだ<br>人見知りな性格で、機械系の操作が得意<br>イーブイのバッグがお気に入りでいつも背負っている</p>',
        photo: 'img-characters/main/botan.jpg',
    },
    {
        name: 'オーリム博士',
        detail: '<p>ワイルドな見た目に違わず、男勝りな性格<br>スカーレット版でパルデアの伝承について研究している</p>',
        photo: 'img-characters/main/o-rimu.jpg',
    },
    {
        name: 'フトゥー博士',
        detail: '<p>あまり感情を表に出すことがない、物静かな性格<br>バイオレット版でパルデアの伝承について研究している</p>',
        photo: 'img-characters/main/hutwu.jpg',
    },
    {
        name: 'ネルケ',
        detail: '<p>スター団の調査のため、<br>スターダスト作戦にて行動を共にし、サポートしてくれる<br>でも、どこかで会ったことのあるような気がする</p>',
        photo: 'img-characters/main/neruke.jpg',
    },
];

let countMain = 0;

const changeMain = () => {
    main_name.textContent = listMain[countMain].name;
    main_detail.innerHTML = listMain[countMain].detail;
    main_photo.src = listMain[countMain].photo;
}

const nextMain = () => {
    if (countMain === listMain.length - 1) {
        countMain = 0;
    } else {
        countMain++;
    }
    changeMain();
}

const backMain = () => {
    if (countMain === 0) {
        countMain = listMain.length -1;
    } else {
        countMain--;
    }
    changeMain();
}

main_next.addEventListener('click', nextMain, false);
main_back.addEventListener('click', backMain, false);

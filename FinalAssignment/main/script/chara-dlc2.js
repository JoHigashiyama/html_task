const dlc2_name = document.getElementById('dlc2-name');
const dlc2_detail = document.getElementById('dlc2-detail');
const dlc2_photo = document.getElementById('dlc2-photo');
const dlc2_next = document.getElementById('dlc2-next');
const dlc2_back = document.getElementById('dlc2-back');

const listDlc2 = [
    {
        name: 'カキツバタ',
        detail: '<p>ブルベリーグの四天王の一人<br>また、元チャンピオンである<br>授業にはあまり出ないらしく、3回留年している噂がある<br>緩い感じの口調で話すが<br>ドライかつ空気の読めない発言で周囲の顰蹙を買う事もある</p>',
        photo: 'img-characters/dlc2/kakitubata.jpg',
    },
    {
        name: 'タロ',
        detail: '<p>ブルベリーグの四天王の一人<br>しっかり者で、学園に訪れたばかりの主人公に施設を案内してくれる<br>「かわいいが最強」が信条で、<br>自分が可愛いと思うポケモンばかりを手持ちに据え、愛情を注いだ結果、<br>四天王まで登り詰めてしまう天性の努力家でもある</p>',
        photo: 'img-characters/dlc2/taro.jpg',
    },
    {
        name: 'ネリネ',
        detail: '<p>ブルベリーグの四天王の一人<br>礼儀正しく、体言止めの話し方が特徴的<br>時間に厳しく、常に時計を持ち歩いて行動している<br>同級生のゼイユとは仲が良く、<br>性格が正反対ではあるが、不思議と息があっている</p>',
        photo: 'img-characters/dlc2/nerine.jpg',
    },
    {
        name: 'アカマツ',
        detail: '<p>ブルベリーグの四天王の一人<br>性格に表裏がなく熱血的でかつ、素直な性格をしている<br>勉強が得意ではないそうだが<br>料理に関しては熱心的で常にフライパンを持ち歩いている<br>辛い物がとても好き</p>',
        photo: 'img-characters/dlc2/akamatu.jpg',
    },
    {
        name: 'シアノ校長',
        detail: '<p>ブルーベリー学園の校長を務める<br>クラベル校長とは旧知の中である<br>ファンキーな性格をしており、<br>物忘れが激しく、テラリウムドームの設計者にも関わらず、<br>最新のシステムを把握していない部分もある</p>',
        photo: 'img-characters/dlc2/siano.jpg',
    },
];

let countDlc2 = 0;

const changeDlc2 = () => {
    dlc2_name.textContent = listDlc2[countDlc2].name;
    dlc2_detail.innerHTML = listDlc2[countDlc2].detail;
    dlc2_photo.src = listDlc2[countDlc2].photo;
}

const nextDlc2 = () => {
    if (countDlc2 === listDlc2.length - 1) {
        countDlc2 = 0;
    } else {
        countDlc2++;
    }
    changeDlc2();
}

const backDlc2 = () => {
    if (countDlc2 === 0) {
        countDlc2 = listDlc2.length - 1;
    } else {
        countDlc2--;
    }
    changeDlc2();
}

dlc2_next.addEventListener('click', nextDlc2, false);
dlc2_back.addEventListener('click', backDlc2, false);
const dlc1_name = document.getElementById('dlc1-name');
const dlc1_detail = document.getElementById('dlc1-detail');
const dlc1_photo = document.getElementById('dlc1-photo');
const dlc1_next = document.getElementById('dlc1-next');
const dlc1_back = document.getElementById('dlc1-back');

const listDlc1 = [
    {
        name: 'スグリ',
        detail: '<p>キタカミ出身のブルーベリー学園の生徒<br>人見知りな性格をしているが、負けず嫌いで、<br>主人公のライバルとして、めげずに何度もバトルに挑む<br>キタカミの里に伝承に出てくる鬼のカッコよさに、強いあこがれを持っている</p>',
        photo: 'img-characters/dlc1/suguri.jpg',
    },
    {
        name: 'ゼイユ',
        detail: '<p>キタカミ出身のブルーベリー学園の生徒<br>気が強く身勝手で好戦的な一面もあるが<br>弟のスグリを不器用ながら気にかけており、姉らしい一面もある<br>感情が昂った時に拳をわなわな振るわせる動作をよくしている</p>',
        photo: 'img-characters/dlc1/zeiyu.jpg',
    },
    {
        name: 'ブライア先生',
        detail: '<p>ブルーベリー学園の先生<br>パルデアの地下に眠るテラパゴスの正体について研究している<br>研究者らしく好奇心旺盛な性格をしている。</p>',
        photo: 'img-characters/dlc1/buraia.jpg',
    },
];

let countDlc1 = 0;

const changeDlc1 = () => {
    dlc1_name.textContent = listDlc1[countDlc1].name;
    dlc1_detail.innerHTML = listDlc1[countDlc1].detail;
    dlc1_photo.src = listDlc1[countDlc1].photo;
}

const nextDlc1 = () => {
    if (countDlc1 === listDlc1.length - 1) {
        countDlc1 = 0;
    } else {
        countDlc1++;
    }
    changeDlc1();
}

const backDlc1 = () => {
    if (countDlc1 === 0) {
        countDlc1 = listDlc1.length - 1;
    } else {
        countDlc1--;
    }
    changeDlc1();
}

dlc1_next.addEventListener('click', nextDlc1, false);
dlc1_back.addEventListener('click', backDlc1, false);
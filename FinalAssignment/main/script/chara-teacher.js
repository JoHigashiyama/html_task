const teacher_next = document.getElementById('teacher-next');
const teacher_back = document.getElementById('teacher-back');
const teacher_name = document.getElementById('teacher-name');
const teacher_detail = document.getElementById('teacher-detail');
const teacher_photo = document.getElementById('teacher-photo');

const listTeacher = [
    {
        name: 'クラベル校長',
        detail: '<p>アカデミーの校長を務めている<br>入学したばかりの主人公にいろいろなことを教えてくれる<br>時には厳しく、時には親身に接してくれることも<br>オーリム博士/フトゥー博士とは友人のようだ</p>',
        photo: 'img-characters/teacher/kuraberu.jpg',
    },
    {
        name: 'ジニア先生',
        detail: '<p>主人公のクラスの担任であり、生物の授業を担当している<br>研究に没頭して我を忘れる一面、マイペースで天然気味な一面がある<br>しかし、スマホロトムのポケモン図鑑アプリの開発者であり、<br>優れた技能を持つことがわかる</p>',
        photo: 'img-characters/teacher/zinia.jpg',
    },
    {
        name: 'キハダ先生',
        detail: '<p>バトル学の授業を担当している<br>趣味は筋トレ<br>熱血的な性格をしており、よく空手のポーズをとっている<br>ジムリーダーのリップとは幼馴染</p>',
        photo: 'img-characters/teacher/kihada.jpg',
    },
    {
        name: 'レホール先生',
        detail: '<p>歴史の授業を担当している<br>生徒に対し「貴様」や「小賢しい」などの言葉を使うが、人当たりは柔らかい<br>歴史あるものにロマンを感じる言動がよく見られる</p>',
        photo: 'img-characters/teacher/reho-ru.jpg',
    },
    {
        name: 'サワロ先生',
        detail: '<p>家庭科の授業を担当している<br>体格がよく、厳格な風貌をしているが、言動は至って紳士的である<br>意外にも、かわいいもの好きで、甘党で辛い物が苦手</p>',
        photo: 'img-characters/teacher/sawaro.jpg',
    },
    {
        name: 'セイジ先生',
        detail: '<p>言語学の授業を担当している<br>剃り込みを入れた坊主頭と顎髭が特徴的である<br>授業では、様々な言語を使い、<br>軽妙なトークを織り交ぜた親しみやすい喋り方が特徴である</p>',
        photo: 'img-characters/teacher/seizi.jpg',
    },
    {
        name: 'タイム先生',
        detail: '<p>数学の授業を担当している<br>穏やかな性格で、ジムリーダーのライムの姉である<br>1年前まではフリッジジムのジムリーダーを務めており、<br>凄腕のポケモントレーナーである</p>',
        photo: 'img-characters/teacher/time.jpg',
    },
    {
        name: 'ミモザ先生',
        detail: '<p>アカデミーの保健師を務めている<br>ラフな話し方をしており、生徒のサボりを容認している<br>以前はポケモンセンターで働いていたようだ</p>',
        photo: 'img-characters/teacher/mimoza.jpg',
    },
];

let countTeacher = 0;

const changeTeacher = () => {
    teacher_name.textContent = listTeacher[countTeacher].name;
    teacher_detail.innerHTML = listTeacher[countTeacher].detail;
    teacher_photo.src = listTeacher[countTeacher].photo;
}

const nextTeacher = () => {
    if (countTeacher === listTeacher.length - 1) {
        countTeacher = 0;
    } else {
        countTeacher++;
    }
    changeTeacher();
}

const backTeacher = () => {
    if (countTeacher === 0) {
        countTeacher = listTeacher.length - 1;
    } else {
        countTeacher--;
    }
    changeTeacher();
}

teacher_next.addEventListener('click', nextTeacher, false);
teacher_back.addEventListener('click', backTeacher, false);
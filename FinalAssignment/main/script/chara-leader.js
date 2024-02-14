const leader_name = document.getElementById('leader-name');
const leader_detail = document.getElementById('leader-detail');
const leader_photo = document.getElementById('leader-photo');
const leader_next = document.getElementById('leader-next');
const leader_back = document.getElementById('leader-back');

const listLeader = [
    {
        name: 'カエデ',
        detail: '<p>セルクルタウンのジムリーダー<br>普段はパティスリー『ムクロジ』の店長を務めているパティシエールであり、<br>作ったお菓子はポケモンたちにも振る舞っている</p>',
        photo: 'img-characters/leader/kaede.jpg',
    },
    {
        name: 'コルサ',
        detail: '<p>ボウルタウンのジムリーダー<br>普段は芸術家としても活動している<br>ポケモン勝負を作品としてとらえて芸術性を見出しており<br>ジムテストでトレーナーの審美眼を試しているらしい</p>',
        photo: 'img-characters/leader/korusa.jpg',
    },
    {
        name: 'ナンジャモ',
        detail: '<p>ハッコウシティのジムリーダー<br>明るく活発的な性格をしており、<br>パルデアでは絶大な人気を誇る動画配信者である<br>彼女独特の話し方は多くの人々に使われている</p>',
        photo: 'img-characters/leader/nanjamo.jpg',
    },
    {
        name: 'ハイダイ',
        detail: '<p>カラフシティのジムリーダー<br>また、大ベテランのコックにして中華レストラン「ハイダイ倶楽部」の店主<br>一人称は「オイラ」で、やや気性の荒い江戸っ子口調で話す</p>',
        photo: 'img-characters/leader/haidai.jpg',
    },
    {
        name: 'ライム',
        detail: '<p>フリッジタウンのジムリーダー<br>本業はラッパーでバトル中も熱いラップを披露する<br>プロのラッパーとしてもファンが多く、<br>スター団のピーニャも彼女のファンである</p>',
        photo: 'img-characters/leader/rime.jpg',
    },
    {
        name: 'リップ',
        detail: '<p>ベイクタウンのジムリーダー<br>本業はメイクアップアーティスト<br>他にも自らがモデルを務めるコスメブランドの展開等、<br>様々な仕事を手掛けている為多忙な日々を送っている<br>キハダ先生とは幼馴染</p>',
        photo: 'img-characters/leader/rip.jpg',
    },
    {
        name: 'グルーシャ',
        detail: '<p>ナッペ山ジムのジムリーダー<br>氷のような素っ気ない性格をしている<br>以前は、パルデア地方開催大会6大会連続王者・世界ランク2位の実力を持ち、<br>天才スノーボーダーとして活躍していた</p>',
        photo: 'img-characters/leader/guru-sha.jpg',
    },
    {
        name: 'チリ',
        detail: '<p>四天王の一人<br>ポケモンリーグの面接官も担当している<br>普段はノリがよく、フレンドリーでコガネ弁を用いた話し方をしているが、<br>仕事中は厳粛な雰囲気をだしている</p>',
        photo: 'img-characters/leader/tiri.jpg',
    },
    {
        name: 'ポピー',
        detail: '<p>おそらく最年少級の四天王の一人<br>年相応に言葉足らずな面もあるが、丁寧かつ、しっかりものである<br>面倒見のいいチリに懐いていて、よく行動を共にしている</p>',
        photo: 'img-characters/leader/popi.jpg',
    },
    {
        name: 'アオキ',
        detail: '<p>チャンプルタウンのジムリーダー兼四天王の一人<br>また、ポケモンリーグ営業部員の仕事も担っており、多忙な日々を送っている<br>物静かで、長考しているときは周りが心配するほど全く動かないらしい</p>',
        photo: 'img-characters/leader/aoki.jpg',
    },
    {
        name: 'ハッサク',
        detail: '<p>四天王の一人<br>また、アカデミーで美術の授業を担当している<br>授業の時は穏やかで、バトルの時は凛々しい姿を見せる<br>人の成長を見ると感動して、<br>声をあげながら、泣いてしまう意外な一面もある</p>',
        photo: 'img-characters/leader/hassaku.jpg',
    },
    {
        name: 'オモダカ',
        detail: '<p>パルデア地方のトップチャンピオン<br>また、ポケモンリーグ委員長、アカデミー理事長を兼任している<br>物腰は柔らかいながら威風堂々としており、<br>"ポケモントレーナーなら誰でも憧れる人物"という評価を得ている</p>',
        photo: 'img-characters/leader/omodaka.jpg',
    },
];

let countLeader = 0;

const changeLeader = () => {
    leader_name.textContent = listLeader[countLeader].name;
    leader_detail.innerHTML = listLeader[countLeader].detail;
    leader_photo.src = listLeader[countLeader].photo;
}

const nextLeader = () => {
    if (countLeader === listLeader.length - 1) {
        countLeader = 0;
    } else {
        countLeader++;
    }
    changeLeader();
}

const backLeader = () => {
    if (countLeader === 0) {
        countLeader = listLeader.length - 1;
    } else {
        countLeader--;
    }
    changeLeader();
}

leader_next.addEventListener('click', nextLeader, false);
leader_back.addEventListener('click', backLeader, false);
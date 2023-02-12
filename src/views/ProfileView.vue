<template>
  <!-- <template>と</template>の中には divタグ
  などのブロックを1つしか書くことができない。 ここがHTMLで記述する部分 -->
  <div id="profile_container">
    <section id="title"><h1>Profile</h1></section>
    <section id="profile-top">
      <!-- 自分の顔が入った写真を入れる -->
      <div class="profile-image">
        <h1>伊藤和輝</h1>
        <img src="../../images/profile1.png" alt="" />
      </div>
      <!--  -->
      <div class="info">
        <p>
          <span>所属</span>愛知工業大学 情報科学部情報科学科
          メディア情報専攻３年
        </p>
        <p>
          <span>研究内容</span> XRスポーツトレーニングシステム/ダマスカス包丁
        </p>
        <p>
          <span>趣味</span
          >ライブやフェスに行くこと/野球・スポーツ観戦/アニメ・漫画/ゲーム
          etc...
        </p>
        <p>
          <span>好きなバンド</span>BUMP OF CHICKEN / sumika / 緑黄色社会 / Saucy
          Dog / 04 Limited Sazabies / SUPER BEAVER etc...
        </p>
        <p>
          <span>使えるプログラミング言語</span> Python / Ruby / PHP / JavaScript
          / Java, C言語 / HTML&CSS / C# etc...
        </p>
        <p style="margin-top: 2rem">
          Webサイト制作, Webアプリ開発, モバイルアプリ開発, ゲーム制作,
          動画制作などを大学の授業や趣味で行っています。<br />
          Photoshopをはじめ,Illustratorを使った作品制作の経験あり<br />
          PremierProやAfterEffectsを使ったMV制作の経験あり
        </p>
      </div>
    </section>

    <!-- 大学で学んできたこと -->
    <section id="univ">
      <h1 class="univ-title">大学で学んできたこと</h1>
      <div class="univ-box">
        <div class="univ-line1">
          <div class="univ-project box1">
            <h2>プログラミング</h2>
            <div class="univ-contents">
              <p>
                ・Webサイト制作<br />・ゲーム制作（Unity)<br />・画像処理 /
                顔認識（OpenCV/Python)<br />・Twitterのような掲示板作成<br />・CGプログラミング（遊園地作成）<br />・オブジェクト指向プログラミング
                など
              </p>
            </div>
            <div class="univ-contents-sub">
              <p>
                １年次にC言語を通してプログラミングの基礎を学び、２年ではJavaやPHPを使った応用プログラミングを学び、３年ではRubyを使ったWebアプリケーション制作に取り組んできました。
              </p>
            </div>
          </div>
          <div class="univ-project box2">
            <h2>動画編集</h2>
            <div class="univ-contents">
              <p>
                ・個人MV制作<br />・グループショートムービー制作<br />・AffterEffectを使った演出
                <br />・PremireProを使った動画編集<br />・ハッカソンのデモ動画制作
              </p>
            </div>
            <div class="univ-contents-sub">
              <p>
                大学１年の前期にオリジナル個人MV制作に取り組みました。<br />ほとんど知識がない状態だったので、絵コンテの段階から、
                絵の構図や演出をうまく表現するのに苦戦しました。撮影・編集まで合わせて制作期間はおよそ３週間ほどかかりました。
              </p>
            </div>
          </div>
        </div>
        <div class="univ-line2">
          <div class="univ-project box3">
            <h2>3Dモデリング</h2>
            <div class="univ-contents">
              <p>
                ・Autodesc MAYA<br />
                <small style="margin-left: 1rem"
                  >（ライティング, レンダリング）</small
                ><br />・Vroid Studio<br />・Unity<small
                  >（ステージモデリング）</small
                >
                <br />・Autodesc CAD<small>（2D図面を3D化）</small>
              </p>
            </div>
            <div class="univ-contents-sub">
              <p>
                MayaやUnityをメインで使用して、椅子や急須などの小物から脱出ゲーム用のステージまでいろいろなものを製作してきました。
                現在は研究で行っているダマスカス包丁の波状模様の再現をMayaにて取り組んでいます。
              </p>
            </div>
          </div>
          <div class="univ-project box4">
            <h2>研究室</h2>
            <div class="univ-contents">
              <p>
                ・モーションキャプチャ<br />・オープンワールドゲーム制作<br />・脱出ゲーム制作
                <br />・VR/ホロレンズ<br />・VroidStudio
              </p>
            </div>
            <div class="univ-contents-sub">
              <p>
                ３年から研究室に配属され、松河教授の元でモーションキャプチャで撮った熟練者のスポーツフォームをVRとホロレンズ上に映し出し、フォームの矯正ができるサービスの開発に携わってきました。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 就活の軸 -->
    <section id="vision">
      <h1 class="vision-title">Vision</h1>
      <h3>〜IT業界を志望する理由〜</h3>
      <h4>日本のIT技術は世界に比べると置いて行かれてしまっている状況です。</h4>
      <h4>
        しかし、逆に捉えるとまだまだ日本にはITの力で改善していける分野や、ITの力を必要としている人がたくさんいるはずです。
      </h4>
      <h4>
        かつての産業大国日本のような力を取り戻すために、世の中に貢献して世界と戦っていきたいと思ったのでIT業界の道に進みました。
      </h4>

      <h3>〜就活をする上での企業選びの軸〜</h3>
      <h4>新技術にもアンテナを張り、新しいことに挑戦している企業</h4>
      <h4>
        ユーザーのニーズに応え、快適で喜びの溢れる世の中になるようなサービスを提供している企業
      </h4>
      <h4>部署の垣根を越えたフレンドリーな職場環境がある企業</h4>

      <h3>〜なりたいエンジニア像〜</h3>
      <h4>
        要件定義から携わり、その後の開発から運用まで全て任されるようなフルスタックエンジニアを目指していきたいです。
      </h4>
      <h4>
        世の中にまだない、面白いものを生み出し、日本だけでなく世界を明るく変えていきたいです。
      </h4>
      <h4>
        自発的に動き、改善点を見つけ出したり、後輩に教えたり、将来的には管理職の仕事につけるよう励んでいきたいです。
      </h4>
    </section>

    <!-- 経歴 -->
    <section id="career">
      <h1 class="career-title">Career</h1>
      <div class="career-contents">
        <div class="career-left">
          <div class="career-box box1">
            <div class="box-left">
              <h1>幼少期</h1>
              <p>・ジグソーパズルをやるのが好きだった</p>
            </div>
          </div>
          <div class="career-box box3">
            <div class="box-left">
              <h1>中学1年生</h1>
              <p>・入学式で入学生代表の言葉を読む</p>
              <p>・後期にクラスの学級委員を務める</p>
              <p>→剣道２段獲得！！</p>
            </div>
          </div>
          <div class="career-box box5">
            <div class="box-left">
              <h1>高校1年生</h1>
              <p>・最初の球技大会に出れず、、、</p>
              <p>・硬式テニス部に入部</p>
            </div>
          </div>
          <div class="career-box box7">
            <div class="box-left">
              <h1>高校３年生</h1>
              <p>・毎週のように模試と補習</p>
              <p>→早朝や土日、放課後補習も</p>
              <p>・大学受験に失敗</p>
            </div>
          </div>
          <div class="career-box box7">
            <div class="box-left">
              <h1>大学2年生</h1>
              <p>・コロナ禍はまだ続く</p>
              <p>・GPA同専攻同学年3位の成績を修める</p>
              <p>・5daysインターンシップに参加</p>
            </div>
          </div>
        </div>
        <div class="career-right">
          <div class="career-box box2">
            <div class="box-right">
              <h1>小学校時代</h1>
              <p>・市の美術展に６年連続選ばれる</p>
              <p>
                →特に４年生の時に描いた風神・雷神の絵が絶賛され、卒業するまで図工室に飾られていた
              </p>
              <p>・この時からパソコンの授業があった。</p>
            </div>
          </div>
          <div class="career-box box4">
            <div class="box-right">
              <h1>中学３年生</h1>
              <p>・夏の大会をもって剣道部を引退</p>
              <p>・剣道２段を獲得！！</p>
            </div>
          </div>
          <div class="career-box box6">
            <div class="box-right">
              <h1>高校２年生</h1>
              <p>・3泊4日の勉強合宿を完走</p>
            </div>
          </div>
          <div class="career-box box8">
            <div class="box-right">
              <h1>大学１年生</h1>
              <p>・コロナ時代に突入し、入学式ができずほとんどリモート授業</p>
            </div>
          </div>
          <div class="career-box box8">
            <div class="box-right">
              <h1>大学３年生</h1>
              <p>
                ・大学対抗ハッカソン<br />「Hack Aichi+2022」で企業賞受賞！！
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Age: 21,
      Birthdate: {
        day: 2,
        month: 6,
        year: 2001,
      },
      Position: "大学3年生",
    };
  },
};
</script>

<style lang="scss" scoped>
#profile_container {
  height: auto;
  max-width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#title {
  width: 9rem;
  margin: 1.5rem 0 0 4rem;
  border-bottom: 1px solid rgb(12, 10, 10);
}

#profile-top {
  margin: 3rem;
  padding: 2rem 0;
  display: flex;
  height: 390px;
  max-width: 100%;
  justify-content: center;
  border: 2px solid rgb(99, 77, 77);
}

.profile-image {
  max-height: 100%;
  max-width: 20%;
  margin-right: 3rem;
  margin: 0 auto;
}

.profile-image h1 {
  margin: 0 0 4px 70px;
}

.profile-image > img {
  max-height: 100%;
  max-width: 100%;
  // margin-top: 1.5rem;
}

.info {
  max-height: 100%;
  margin-top: 20px;
}

.info > p {
  // margin-top: 0.5rem;
  font-weight: 400;
  line-height: 2rem;
}

.info > p > span {
  background-color: rgba(203, 235, 224, 0.6);
  color: rgb(17, 6, 6);
  padding: 0.4rem;
  margin-right: 1rem;
  border-radius: 0.9rem;
}

#univ {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.univ-title {
  border-bottom: 3px solid black;
}

.univ-line1 {
  display: flex;
}

.univ-line2 {
  display: flex;
}

.univ-project {
  height: 400px;
  width: 400px;
  margin: 2rem;
  background-color: bisque;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.univ-project > h2 {
  margin-top: 1rem;
  font-size: 2rem;
}

.univ-contents {
  margin-top: 2rem;
  line-height: 2rem;
  font-size: 1.2rem;
}

.univ-contents-sub {
  margin: 1rem;
  padding: 0.9rem;
  font-size: 0.7rem;
  border-radius: 1.2rem;
  background-color: #fff;
}

.box1 {
  background-color: rgba(136, 183, 183, 0.4);
}
.box2 {
  background-color: rgba(208, 213, 171, 0.4);
}
.box3 {
  background-color: rgba(152, 183, 136, 0.4);
}
.box4 {
  background-color: rgba(173, 143, 173, 0.4);
}

#vision {
  margin: 3rem 0 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.5rem;
}

#vision h1 {
  margin: 3rem;
}

#vision h3 {
  font-size: 1.9rem;
  margin: 4rem 0 2rem;
}

#vision h4 {
  margin: 0.7rem;
}

.vision-title {
  padding-bottom: 4px;
  font-size: 2rem;
  border-bottom: 3px solid black;
}

#career {
  height: 1600px;
  margin: 3rem 3rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.5rem;
}
.career-title {
  padding-bottom: 4px;
  font-size: 2rem;
  border-bottom: 3px solid black;
}

.career-contents {
  height: 1500px;
  margin: 3rem;
  padding: 3rem;
  width: 100%;
  background-color: rgb(246, 236, 224);
  display: flex;
  border-radius: 3.5rem;
}

.career-left {
  width: 50%;
  border-right: 2px solid rgb(0, 0, 0);
}

.career-right {
  margin-top: 8rem;
  width: 50%;
  border-left: 2px solid rgb(0, 0, 0);
}

.career-box {
  background-color: rgb(246, 236, 224);
  border-top: 1px solid rgb(3, 2, 2);
}

.box-left {
  width: 64%;
  padding: 1rem;
  margin-bottom: 8rem;
  border: 1px solid rgb(3, 2, 2);
  background-color: rgb(250, 250, 249);
}

.box-left p {
  margin-top: 1rem;
}

.box-right {
  width: 60%;
  padding: 1rem;
  margin-left: 13.7rem;
  margin-bottom: 8rem;
  border: 1px solid rgb(3, 2, 2);
  background-color: rgb(250, 250, 249);
}

.box-right p {
  margin-top: 1rem;
}
</style>

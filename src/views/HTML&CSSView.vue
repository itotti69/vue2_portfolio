<template>
  <div id="gallery-container">
    <section id="title">
      <h1>HTML&CSS作品集</h1>
    </section>
    <!-- 写真 -->
    <section id="gallery-contents">
      <div class="gallery-top">
        <img src="../../images/portfolioFirst.png" alt="ハッカソン" />
      </div>
      <div class="gallery-under">
        <img src="../../images/portfolioFirst2.png" alt="ハッカソン" />
        <img src="../../images/portfolioFirst3.png" alt="ハッカソン" />
        <img src="../../images/portfolioFirst4.png" alt="ハッカソン" />
      </div>
      <p>大学２年生の頃、授業で初めてのポートフォリオサイトを作りました！</p>
      <section id="gallery-detail">
        <div class="info">
          <h2>●ポートフォリオ Part1</h2>
          <p>制作期間:約３週間</p>
          <p>
            HTML&CSS,
            javaScript、jQueryライブラリを用いて初めてのポートフォリオサイトを作りました。
          </p>
          <h2>●工夫した点</h2>
          <p>
            単に横並びに画像を並べるのではなく、階段上に並べ、見た人が面白いと思うデザインになるように心がけました。
            また、テーマをあらかじめ決めておきました。今回は綺麗めでおしゃれなサイトにしたいと思ったため、白と黒をメインに配色にも気を配ったおしゃれなサイトに仕上げました。
          </p>

          <h2>●学んだこと</h2>
          <p>
            この時はグリッドレイアウトなどを知らず、位置を無理矢理調整したりして制作していたため、
            レイアウトが崩れている箇所があったため次回からは気をつけようと思いました。。それでも、HTML&CSSの基礎で学んだことを活かして、初めてながら納得のいく作品を完成させることができ、
            さらにプログラミングが好きになりました。
          </p>
        </div>
      </section>
    </section>

    <section id="gallery-contents">
      <div class="gallery-top">
        <img src="../../images/TOP画面.png" alt="インターン" />
      </div>
      <div class="gallery-under">
        <img src="../../images/アーティスト写真.png" alt="インターン" />
        <img src="../../images/トピック.png" alt="インターン" />
        <img src="../../images/お問合せフォーム.png" alt="インターン" />
      </div>
      <p>
        株式会社アルタさんのサマーインターンシップにてポートフォリオサイトを作りました！
      </p>
      <section id="gallery-detail">
        <div class="info">
          <h2>●ポートフォリオ Part2</h2>
          <p>制作期間:約3日間</p>
          <p>
            大学2年生の時に参加したアルタサマーインターンシップにてポートフォリオサイトを作りました。
            一度ポートフォリオサイトを作ったことがあったため、それを超える作品を作ろうと頑張って作りました。
            実際に働いている社員の方にフィードバックを毎日してもらい、とても評価していただけて嬉しかったです。
          </p>
          <h2>●工夫した点</h2>
          <p>
            タイトルの下に下線を色分けで引くことで、セクションの区切りをわかりやすくしました。また、flex-boxをうまく使い、レイアウトが整ったみやすいデザインになっています。
          </p>

          <h2>●学んだこと</h2>
          <p>
            タグの書き方やコメントの残し方、レイアウトの工夫などの詳しい部分のことをプロの方にマンツーマンで教えていただき、とても勉強になりました。
            大学2年生ながら「うちの会社で即戦力になれる」と言っていただけた時は、すごく嬉しくもっとスキルを伸ばしたいと努力するきっかけを与えて頂けました。
          </p>
        </div>
      </section>
    </section>

    <section id="gallery-contents">
      <div class="gallery-top">
        <img src="../../images/音楽総合サイトTOP.png" alt="音楽サイト" />
      </div>
      <p>趣味の音楽の情報を集めた情報サイトを作ってみました！</p>
      <section id="gallery-detail">
        <div class="info">
          <h2>●音楽総合サイト</h2>
          <p>制作期間:約2日間</p>
          <p>
            大学3年生の授業課題で自分の趣味の音楽を最大限にアピールできる音楽サイトをHTML&CSSで作ってみました。
            アーティスト・曲・歌詞の一覧ページ、ライブの情報、音楽最新ニュースなどこの先実装部分を増やし、色々な人に使ってもらえるサイトを作りたいです。
          </p>
          <h2>●工夫した点</h2>
          <p>
            六角形を並べ、その中に写真と文字を埋め込むことで、あまり見たことのない面白くてわかりやすいデザインのジャンル紹介にしてみました。
            また、電光掲示板をイメージしたスケジュール表、ネオン調のタイトルなど新たな試みにチャレンジしてみました。グリットレイアウトでデザインしました。
          </p>

          <h2>●学んだこと</h2>
          <p>
            何回もWebサイトを作ってきたこともあって、製作時間が早くなり、確実にスキルアップしていると感じました。
          </p>
        </div>
      </section>
    </section>
  </div>
</template>

<style scoped>
#gallery-contents {
  /* height: 1000px; */
  max-width: 100%;
  margin: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gallery-top {
  height: 480px;
  width: 900px;
  border: 0.3rem solid black;
}

.gallery-top img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery-under {
  margin: 6.5rem 0 1rem;
  height: 380px;
  width: 1500px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 0.3rem solid black;
}

.gallery-under img {
  width: 400px;
  height: 300px;
  margin: 2rem;
  object-fit: cover;
}

#gallery-detail {
  margin: 3rem;
  padding: 2rem;
  line-height: 3rem;
  background-color: aliceblue;
  border: 3px solid rgb(39, 215, 224);
}

.info p {
  line-height: 1.6rem;
}
</style>

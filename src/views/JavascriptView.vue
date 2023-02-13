<template>
  <div id="gallery-container">
    <section id="title">
      <h1>JavaScipt作品集</h1>
    </section>
    <!-- 写真 -->
    <section id="gallery-contents">
      <div class="gallery-top">
        <img src="../../images/portfolioFirst.png" alt="portfolio" />
      </div>
      <div class="gallery-under">
        <img src="../../images/portfolioFirst2.png" alt="portfolio" />
        <img src="../../images/portfolioFirst3.png" alt="portfolio" />
        <img src="../../images/portfolioFirst4.png" alt="portfolio" />
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
            TOP画面上部に遷移できるスクロールボタンや動きのあるボタンデザイン、ホバーで画像がギャラリー表示される機能、ハンバーガーメニューなどの
            UIに優れた機能を多く取り入れ、動的なサイトに仕上げました。
          </p>

          <h2>●学んだこと</h2>
          <p>
            今回はjQueryをメインにして作ったのですが、他にも便利なライブラリなどがあるので他のものも試してみて最適なライブラリを見つけたいです。
          </p>
        </div>
      </section>
    </section>

    <section id="gallery-contents">
      <div class="gallery-top">
        <img src="../../images/数当てゲーム.png" alt="game1" />
      </div>
      <p>３桁の数字を当てる数当てゲームをjavaScriptで作りました。</p>
      <section id="gallery-detail">
        <div class="info">
          <h2>●数当てゲーム</h2>
          <p>制作期間:約３時間</p>
          <p>
            javaScriptのみで作りました。ユーザーは３桁の数字を入力した後チェックボタンを押します。値がそれより小さいのか大きいのか、どれくらいの範囲に収まっているかをテキスト
            で表示します。そこから正解の数字を導き出すまで何回も繰り返し、正解の３桁の数字を入力できたらゲームクリアです。いかに少ないチェック回数で辿り着けるかを競います。
          </p>
        </div>
      </section>
    </section>

    <section id="gallery-contents">
      <div class="gallery-top">
        <img src="../../images/陣取りゲーム.png" alt="game2" />
      </div>
      <p>陣取りゲーム</p>
      <section id="gallery-detail">
        <div class="info">
          <h2>●最強はどっち？オオカミVSライオン陣取りゲーム</h2>
          <p>制作期間:約3時間</p>
          <p>
            javaSciptのみで作ったものです。○×ゲームをオオカミとライオンに変えたものになります。
            現在どちらのターンなのかわかるようにテキストメッセージで表示してあります。
          </p>
        </div>
      </section>
    </section>

    <section id="gallery-contents">
      <div class="gallery-top">
        <img src="../../images/東京オリンピック.png" alt="game3" />
      </div>
      <p>
        東京オリンピックカウントダウンカレンダー（この時はまだ開催前です。）
      </p>
      <section id="gallery-detail">
        <div class="info">
          <h2>●東京オリンピックカウントダウンカレンダー</h2>
          <p>制作期間:約１時間</p>
          <p>
            javaSciptのみで作ったものです。制作時はオリンピック開催前だったので正常に動いていたのですが、終了してから日付が経過してしまいーの値になってしまっているので今は使えません。
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

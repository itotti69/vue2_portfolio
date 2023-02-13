<template>
  <div id="gallery-container">
    <section id="title">
      <h1>Ruby作品集</h1>
    </section>
    <!-- 写真 -->
    <section id="gallery-contents">
      <div class="gallery-top">
        <video controls src="../../images/デモ動画完成版.mp4"></video>
        <!-- <img src="../../images/portfolioFirst.png" alt="portfolio" /> -->
      </div>
      <p>
        大学3年生、RubyとNAVITIME
        APIで電車到着時刻チャット送信Webアプリを作りました!
      </p>
      <section id="gallery-detail">
        <div class="info">
          <h2>●NAVITIME API電車到着時刻チャット送信アプリ</h2>
          <p>制作期間:約3週間</p>
          <p>
            Rubyをメインに、Javascript、NAVITIME Transport API、NAVITIME
            Route(totalnavi)
            APIを使って制作しました。まずinputで出発駅と到着駅、出発日時をユーザーに入力してもらいます。それをCGIでPOST経由で送信し、出発駅と到着駅のIDを取得するためにNAVITIME
            Transport
            APIにリクエストを送信してそれらを取得します。得られたIDを使って、NAVITIME
            Route(totalnavi)
            APIにリクエストを送信し、出発時刻、到着時刻、所要時間、電車のタイプなどを取得します。それらの情報と「〇〇分に××駅に到着するから迎えに来て！」のようなひとことメッセージを画面に出力し、テキストをワンクリックでコピーしてLINEなどですぐに送信できるような仕様になっています。
            教授からの評価も高く、もっと多くの人に使ってもらいたいと言っていただけました。
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

.gallery-top video {
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

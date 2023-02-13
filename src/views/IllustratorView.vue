<template>
  <div id="gallery-container">
    <section id="title">
      <h1>Illustrator作品集</h1>
    </section>
    <!-- 写真 -->
    <section id="gallery-contents">
      <div class="gallery-tops">
        <img src="../../images/kagee.jpg" alt="kagee" />
      </div>

      <p>実際の動物の写真をパスで切り抜いて影絵を作りました！</p>

      <section id="gallery-detail">
        <div class="info">
          <h2>●パスで切り抜いたアニマル影絵</h2>
          <p>制作期間:約1日間</p>
        </div>
      </section>
    </section>

    <section id="gallery-contents">
      <div class="gallery-tops">
        <img src="../../images/JAPAN_poster.jpg" alt="ポスター" />
      </div>

      <p>コンペ提出を想定したポスターを作成しました!</p>

      <section id="gallery-detail">
        <div class="info">
          <h2>●日本をテーマにしたポスターを作成</h2>
          <p>
            制作期間:約2日間
            キャラクター東京2020オリンピックのイメージキャラクターを自作で考えて作ってみました。日本らしさをイメージして作りました。
          </p>
        </div>
      </section>
    </section>

    <section id="gallery-contents">
      <div class="gallery-tops">
        <img src="../../images/logo_tree.jpg" alt="ロゴツリー" />
      </div>

      <p>自分で考えたロゴを集めたロゴツリーを作りました!</p>

      <section id="gallery-detail">
        <div class="info">
          <h2>●ロゴツリー</h2>
          <p>
            制作期間:約4日間
            「こんなロゴありそうだな」と思うのをひたすら書き起こし、それをロゴツリーにしてみました。アイデアは約３０種類考えました。
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

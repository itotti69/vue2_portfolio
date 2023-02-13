<template>
  <div id="gallery-container">
    <section id="title">
      <h1>Unity作品集</h1>
    </section>
    <!-- 写真 -->
    <section id="gallery-contents">
      <div class="gallery-top">
        <img src="../../images/seiza1.png" alt="seiza1" />
      </div>

      <div class="gallery-under">
        <img src="../../images/seiza2.png" alt="seiza2" />
        <img src="../../images/seiza3.png" alt="seiza3" />
      </div>

      <p>Unityで星座的当てゲームを作りました!</p>

      <section id="gallery-detail">
        <div class="info">
          <h2>●Unity星座の星の配置を暗記して光らせるシューティングゲーム</h2>
          <p>制作期間:約2週間</p>
          <p>
            ボタンを押すと表示される星座の配置を暗記して、的当て画面へ移動、宇宙船に乗って実際に自分が宇宙にいるかのような没入感
            を味わいながら星を光らせてみよう！というゲームです。子供から大人まで楽しめるようにゲーム性はとてもシンプルになっています。
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

<template>
  <div id="gallery-container">
    <section id="title">
      <h1>Animate作品集</h1>
    </section>
    <!-- 写真 -->
    <section id="gallery-contents">
      <div class="gallery-tops">
        <img src="../../images/anime02.jpg" alt="anime1" />
      </div>

      <div class="gallery-under">
        <img src="../../images/anime03.jpg" alt="anime2" />
        <img src="../../images/anime.jpg" alt="anime3" />
      </div>

      <p>人が歩いて穴に落ちるアニメーションを作りました!</p>

      <section id="gallery-detail">
        <div class="info">
          <h2>●迷宮落下アニメーション</h2>
          <p>
            制作期間:約2日間
            人が歩いていくと落とし穴が!空から落ちていくアニメーションを作りました。
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

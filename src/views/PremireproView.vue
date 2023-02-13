<template>
  <div id="gallery-container">
    <section id="title">
      <h1>PremirePro作品集</h1>
    </section>
    <!-- 写真 -->
    <section id="gallery-contents">
      <div class="gallery-top">
        <img src="../../images/movie_0.jpg" alt="movie_0" />
      </div>

      <div class="gallery-under">
        <img src="../../images/movie_1.jpg" alt="movie_1" />
        <img src="../../images/movie_2.jpg" alt="movie_2" />
      </div>

      <p>[Alexandros]「月色ホライズン」のオリジナルMVを作成しました!</p>

      <section id="gallery-detail">
        <div class="info">
          <h2>●オリジナルMV「月色ホライズン」</h2>
          <p>
            制作期間:約1ヶ月
            企画、撮影、制作全て自分1人で制作しました。PremireProとAffterEffectをこの時初めて使いました。
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

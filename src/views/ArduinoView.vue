<template>
  <div id="gallery-container">
    <section id="title">
      <h1>Arduino作品集</h1>
    </section>
    <!-- 写真 -->
    <section id="gallery-contents">
      <div class="gallery-tops">
        <img src="../../images/sushi.png" alt="arduino" />
      </div>

      <p>本物の醤油差しをコントローラー代わりにして遊ぶゲームを開発しました!</p>

      <section id="gallery-detail">
        <div class="info">
          <h2>●XR回転寿司ゲーム</h2>
          <p>
            制作期間:約２週間
            加速度、ジャイロなどのセンサーが搭載されたマイコン「M5Stick」、Arduino、OpnenGLを使って、
            自宅でも回転寿司気分を味わえる回転寿司ゲームを制作しました。本物の醤油差しの中にM5Stickを取り付け、
            コントローラーにし、前後左右に動かすことで画面上の醤油差しも移動します。回っている寿司の上まで持ってきたら、
            トントンと醤油を垂らしてあげるみたいに動かすと画面の中でも連動して醤油が垂れます。寿司にヒットしたらポイント獲得!
            回転スピードがどんどん上がっていきます。
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

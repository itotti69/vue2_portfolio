<template>
  <div id="gallery-container">
    <section id="title">
      <h1>アルバイト</h1>
    </section>
    <!-- 写真 -->
    <section id="gallery-contents">
      <div class="gallery-top">
        <img src="../../images/right-on.png" alt="アルバイト" />
      </div>
      <p>アパレルショップ『Rightーon』アルバイト</p>
      <section id="gallery-detail">
        <div class="info">
          <h2>●仕事内容</h2>
          <p>お客様へのコーディネート提案、接客販売、品出し、レジ打ちなど</p>
          <h2>●実績</h2>
          <p>1日の個人売り→25万円達成! & 店の全国月間売上No.1を達成！！</p>
          <h2>●このアルバイトの魅力</h2>
          <p>
            みんな仲良くて優しいところ、つねに色々なところから一緒に働くスタッフやお客様の感謝の言葉が聞こえたり、笑顔が見えたりするところ。
          </p>
          <h2>●このアルバイトをやっていて嬉しかったこと</h2>
          <p>
            子供連れのお母さんがやってきて「子供が全然ファッションに興味ないから服を選んであげてやってください」と言われたことがあります。そこで色々と聞きながらコーディネートの提案をしたところ、お母さんとお子さんの両方から「すごくかっこいいコーディネートをしてくれてありがとう！」と感謝の言葉をかけられたことです。
          </p>
          <h2>●このアルバイトをやっていて辛かったこと</h2>
          <p>
            自分より後から入ってきた子たちが、先に辞めていってしまったことです。先輩としてもっと一人一人の悩みだったりを聞いてあげたかったのにできなかったのが悔しかったです。
          </p>
          <h2>●どうしてこのアルバイトを始めようと思った？</h2>
          <p>
            元々自分の性格は消極的で、販売をして接客するようなタイプではありませんでした。しかし、このままだとダメだと思いあえて苦手な接客のアルバイトに挑戦したのがきっかけです。
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
  height: 400px;
  width: 700px;
}

.gallery-top img {
  width: 100%;
  height: 100%;
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

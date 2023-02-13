<template>
  <div id="gallery-container">
    <section id="title">
      <h1>Django作品集</h1>
    </section>
    <!-- 写真 -->
    <section id="gallery-contents">
      <h1 class="gallery-contents-title">Music & Photo Memories</h1>
      <div class="gallery-top">
        <img src="../../images/pmapp.png" alt="pmapp" />
      </div>
      <p>Python/Djangoで作った音楽✖︎写真思い出共有アルバムアプリ<br /></p>
      <section id="gallery-detail">
        <div class="info">
          <h2>
            ●PythonのフレームワークDjangoで作った音楽✖︎写真思い出共有アルバムアプリ
          </h2>
          <p>
            旅行先で撮った写真、そこに向かうまでの車の中で聞いていた音楽、この二つが組み合わされば目と耳で思い出が蘇ってくる！それを叶えてくれるアプリ
          </p>
          <h2>●使用技術</h2>
          <p>
            PythonのフレームワークDjangoを使用。制作期間を短く設定していたので、スピーディーに仕上げるために装飾はbootStrapを初めて使用。
          </p>
          <h2>●なぜこのアプリを作ろうと思ったのか？</h2>
          <p>
            instagramのミュージックスタンプにも似たような機能がある。しかし、インスタはどちらかというと写真目当てで見にくる人が多く音楽が急にストーリーに流れてくると鬱陶しく感じる人もいるかも知れない。<br />
            それならば、最初から音楽も一緒に投稿できてみんなで思い出を振り返ることができるアプリがあれば楽しいなと思ったのが作ろうと思ったきっかけです。
          </p>
          <h2>●このアプリのアピールポイント</h2>
          <p>
            YouTubeのMVも自分の投稿に紐づけることができる。その時にわざわざiframeタグ用のURLを探してこなくても、YouTubeのURLを載せるだけでiframeタグに自動変換してくれる機能がある！
          </p>
          <h2>●現在制作中の機能</h2>
          <p>
            AIが使う人の好みに合わせたおすすめ音楽を提案してくれる機能。投稿シェア機能など
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

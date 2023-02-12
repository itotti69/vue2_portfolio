<template>
  <div id="gallery-container">
    <section id="title">
      <h1>HTML&CSS作品</h1>
    </section>
    <!-- 写真 -->
    <section id="gallery-contents">
      <div class="gallery-top">
        <img src="../../images/hack01.png" alt="ハッカソン" />
      </div>
      <p>愛知大学対抗ハッカソン『Hack Aichi＋2022』企業賞受賞</p>
      <section id="gallery-detail">
        <div class="info">
          <h2>●『Hack Aichi+2022』とは？</h2>
          <p>
            愛知県主催の「大学対抗ハッカソン」。愛知県経営者協会及び同協会会員企業等による協賛のもと開催。<br />
            出場約20チーム。チーム人数３〜５人。開発期間２週間。テーマ「SDGs課題解決に向けたプロダクト開発」
          </p>
          <h2>●制作したアプリ「コミュチャ」</h2>
          <p>こちらから→</p>
          <h2>●チームでの役割について</h2>
          <p>
            主にアプリのログイン機能、ユーザー登録やUI、デモ動画作成、プレゼン発表資料作成、デザイン
          </p>
          <h2>●どうして賞を取ることができた？</h2>
          <p>
            他のチームが４〜５人で出場している中で、３人という少ない人数でハンデを背負いながらも、目的に沿った一つのアプリを完成させることができた技術力が評価されたからだと思います。
          </p>
          <h2>●どうしてこのアプリを作ろうと思った？</h2>
          <p>
            コロナ禍で直接顔を合わせて会話する機会が減っている中で、テキストコミュニケーションをうまくとることが今後大切になってくると思いました。<br />
            その中で、ストレスのないチャットでの会話ができれば、働く職場環境を快適にしていけるのではないかと思い作りました。
          </p>
          <h2>●参加しようと思ったきっかけ</h2>
          <p>
            自分達のプログラミングスキルが他の同年代の大学生と比べた時にどれくらい通用するのか確かめたかったから。<br />
            ライバルたちの作るプロダクトを見て刺激を受けたかったから。
          </p>
          <h2>●参加する前と後で変わったこと</h2>
          <p>
            これまで大学の中でしか争ってこなかったので、同じ愛知県に本当にすごいアイデアを持った学生だったり、高い技術力を持った学生がたくさんいることを知れて、刺激を受けました
            。
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

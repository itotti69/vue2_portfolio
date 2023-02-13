<template>
  <div id="gallery-container">
    <section id="title">
      <h1>PHP作品集</h1>
    </section>
    <!-- 写真 -->
    <section id="gallery-contents">
      <div class="gallery-top">
        <img src="../../images/twitter1.png" alt="twitter1" />
      </div>
      <div class="gallery-under">
        <img src="../../images/twitter2.png" alt="twitter2" />
        <img src="../../images/twitter3.png" alt="twitter3" />
      </div>
      <div class="gallery-under">
        <img src="../../images/twitter4.png" alt="twitter4" />
        <img src="../../images/twitter7.png" alt="twitter7" />
      </div>
      <div class="gallery-under">
        <img src="../../images/twitter8.png" alt="twitter8" />
        <img src="../../images/twitter9.png" alt="twitter9" />
      </div>
      <p>大学2年生の時、授業でTwitterのような掲示板制作に取り組みました!</p>
      <section id="gallery-detail">
        <div class="info">
          <h2>●Twitterのような掲示板</h2>
          <p>制作期間:約３.5週間</p>
          <p>
            PHPとMySQLで制作しました。機能としては、アカウント作成、記事の投稿・削除・更新・検索、ログイン・ログアウト、プロフィール編集、アイコン設定、
            いいね・リツイート・コメント機能、位置情報検索、フォロー・フォロワー機能、鍵アカウント、アカウント凍結、引用リツイート、公認アカウントバッジ付与、
            記事の140文字制限、投票記事、投稿時間など２７個ほどとなっています。
          </p>
          <h2>●工夫した点</h2>
          <p>
            非公開アカウント、凍結、フォロー・フォロワー機能を作る時にデータベース上で０か１かで判断できるように登録をし区別しました。
            特にいいね・コメント・リツイート・フォロー・フォロワー機能に関しては、それぞれ専用のテーブルを用意し、各テーブルをうまく繋げて実装しました。
            授業でほとんど教えてもらっていない内容だったため独学で勉強し、紙にER図などを書きながら設計していきました。
          </p>

          <h2>●学んだこと</h2>
          <p>
            これほどのものを自分1人の力で作れるとは思っていなかったのですが、データベースを用いて設計していくことの楽しさを覚えたため、
            楽しく制作に励むことができました。この時自分の得意言語はPHPだと感じました。
          </p>
        </div>
      </section>
    </section>

    <section id="gallery-contents">
      <div class="gallery-top">
        <img src="../../images/掲示板.png" alt="インターン" />
      </div>

      <p>アルタサマーインターンシップにて簡易掲示板を作成しました!</p>
      <section id="gallery-detail">
        <div class="info">
          <h2>●簡易掲示板</h2>
          <p>制作期間:約2日間</p>
          <p>
            アルタサマーインターンシップにて作った作品で、PHPとMySQLで作成しました。ユーザーの投稿、検索、削除、更新などができるようになっています。
            途中記事の削除ができないトラブルなどがありましたが、マンツーマンで教えていただき良い作品が作れてよかったです。
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
  object-fit: cover;
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
  object-fit: cover;
}

.gallery-under img {
  max-width: 800px;
  max-height: 300px;
  margin-top: 2rem;
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

<template>
  <div id="home_container">
    <!-- 表題 -->
    <section class="top">
      <div class="top-title">
        <h2>
          愛知から世界へ<br />
          <h3>フルスタックエンジニアをめざして</h3>
        </h2>
        <p>Welcome to My Portfolio Site.</p>
      </div>
    </section>

    <!-- 画像を横に４つ並べる -->
    <section id="sub-image">
      <ul class="image-gallery">
        <li class="image-box1">
          <img src="../../images/merryrock.jpeg" alt="メリロ" />
        </li>
        <li class="image-box2">
          <img src="../../images/hackaichi.jpeg" alt="Hack Aichi+2022" />
        </li>
        <li class="image-box3">
          <img src="../../images/rockin.jpeg" alt="ROCK IN JAPAN2022" />
        </li>
        <li class="image-box4">
          <img src="../../images/right-on.png" alt="right-on" />
        </li>
      </ul>
    </section>

    <div class="background">
      <h1 class="info-text">アピールポイント</h1>
      <!-- 六角形を作る -->
      <div class="hexagon_box">
        <!-- １行目 -->
        <div class="hexa_line1">
          <div class="hexagon">
            <div class="hexagon_inner1">
              <div class="hexagon_inner2">
                <div class="hexagon_inner3">
                  <!-- 六角形の中の画像 -->
                  <div class="hexagon_inner-image1 hexagon_text1">
                    <a href="#">協調性</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="hexagon">
            <div class="hexagon_inner1">
              <div class="hexagon_inner2">
                <div class="hexagon_inner3">
                  <div class="hexagon_inner-image2 hexagon_text1">
                    <a href="#">観察力</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="hexagon">
            <div class="hexagon_inner1">
              <div class="hexagon_inner2">
                <div class="hexagon_inner3">
                  <div class="hexagon_inner-image3 hexagon_text1">
                    <a href="#">好奇心</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hexa_line2">
          <div class="hexagon">
            <div class="hexagon_inner1">
              <div class="hexagon_inner2">
                <div class="hexagon_inner3">
                  <div class="hexagon_inner-image4 hexagon_text2">
                    <a href="#">挑戦心</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="hexagon">
            <div class="hexagon_inner1">
              <div class="hexagon_inner2">
                <div class="hexagon_inner3">
                  <div class="hexagon_inner-image5 hexagon_text2">
                    <a href="#">向上心</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- メインコンテンツ -->
      <section id="main">
        <!-- TOPIC１ 学生時代に1番頑張ったこと -ハッカソン- -->
        <section id="topic">
          <h1 class="gakutika-title">
            <span>01</span>学生時代に1番頑張ったこと
          </h1>
          <div class="topic-main main1">
            <!-- 左側 タイトルと画像 -->
            <div class="left-box left1">
              <div class="topic-image">
                <img src="../../images/hackson.jpeg" alt="ハッカソン集合写真" />
              </div>
            </div>

            <!-- 右側 作品タイトルと概要 -->
            <div class="right-box right1">
              <div class="topic-sub-title">
                <h1>Hack Aichi +2022 企業賞受賞！！</h1>
                <h2>コミュチャ</h2>
              </div>

              <div class="topic-content-box">
                <!-- 左からスライドイン -->
                <div class="topic-content">
                  <div id="topic-content-message" class="website1">
                    <div class="info-message">
                      <h3>
                        SDGs解決に向けて職場の環境を快適にするアプリを開発<br />
                        日本語⇄外国語、敬語⇄常語 自動翻訳チャットアプリ
                      </h3>
                    </div>

                    <!-- 使用した言語 -->
                    <div class="info-message" style="margin-top: 1.5rem">
                      <h4>
                        制作人数: 3人 / 制作期間: 2週間<br />ReactNative,
                        Firebase, TypeScript, Python
                      </h4>
                    </div>
                    <a href="#" class="button1">
                      <div class="button-inner1">
                        <router-link id="router" to="/gakutika">
                          <span class="button-text1"
                            >VIEW MORE→</span
                          ></router-link
                        >
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- アコーディオンボックス -->
          <div class="acordion1-container">
            <!-- labelのfor要素とinputのidを紐づけている -->
            <!-- label要素をクリックしてもフォームがアクティブ化 -->
            <label class="accordion1 accordion1-1" for="point1-1">
              <!-- アコーディオンが開く用 -->
              <input
                class="accordion1_open"
                id="point1-1"
                type="radio"
                name="acoordion1-1"
              />
              <!-- アコーディオンが閉じる用 -->
              <input
                class="accordion1_close"
                id="close1-1"
                type="radio"
                name="acoordion1-1"
              />
              <div class="accordion1_tab">POINT!</div>
              <div class="accordion1_wrapper">
                <!-- 説明リスト -->
                <dl class="accordion1_box">
                  <!-- タイトル -->
                  <dt class="accordion1_patition">
                    <span class="accordion1_number">01</span>
                    <span class="accordion1_title">
                      SDGs課題解決に向けたテーマ</span
                    >
                  </dt>
                  <!-- 説明文 -->
                  <dd class="accordion1_text">
                    ハッカソンのテーマは「SDGs課題解決に向けたプロダクト開発」という少し難しい内容であったため、アイデアを出すのにも一苦労でした。
                    このハッカソンのワークショップなどを通して、世界にはまだまだ解決しなければいけない様々な課題が未解決のままであり、
                    一見繋がりのなさそうなIT技術もSDGsの課題解決に大きく貢献できる可能性を秘めていると感じました。
                  </dd>
                </dl>
              </div>
              <label for="close1-1" class="accordion1_button">
                <span class="accordion1_buttonText">CLOSE</span>
              </label>
            </label>

            <label class="accordion1 accordion1-2" for="open1-2">
              <input
                class="accordion1_open"
                id="open1-2"
                type="radio"
                name="acoordion1-2"
              />
              <input
                class="accordion1_close"
                id="close1-2"
                type="radio"
                name="acoordion1-2"
              />
              <div class="accordion1_tab">POINT!</div>
              <div class="accordion1_wrapper">
                <dl class="accordion1_box">
                  <dt class="accordion1_patition">
                    <span class="accordion1_number">02</span>
                    <span class="accordion1_title">初めてのチーム開発</span>
                  </dt>
                  <dd class="accordion1_text">
                    初めてのチーム開発がハッカソンの舞台となりました。慣れないgit使ってのチーム開発だということもあり、苦戦しながらもなんとかアプリを開発させることができました。
                    入社してからはこのようなチーム開発がメインで行われていくので、それまでに改善点なども見つかり、良い経験になりました。
                  </dd>
                </dl>
              </div>
              <label for="close1-2" class="accordion1_button">
                <span class="accordion1_buttonText">CLOSE</span>
              </label>
            </label>

            <label class="accordion1 accordion1-3" for="open1-3">
              <input
                class="accordion1_open"
                id="open1-3"
                type="radio"
                name="acoordion1-3"
              />
              <input
                class="accordion1_close"
                id="close1-3"
                type="radio"
                name="acoordion1-3"
              />
              <div class="accordion1_tab">POINT!</div>
              <div class="accordion1_wrapper">
                <dl class="accordion1_box">
                  <dt class="accordion1_patition">
                    <span class="accordion1_number">03</span>
                    <span class="accordion1_title">苦労したこと</span>
                  </dt>
                  <dd class="accordion1_text">
                    ３人ともハッカソンの参加が初めてだったこともあり、計画の立て方やどのようにそれぞれに役割を分担して、それを逐一共有すればいいのかわからないというところに苦戦しました。
                    決まった時間にZoom会議を開いて進捗状況を報告し合ったり、開発が追いつかなさそうなところを他の人に引き継いでもらったりなど、
                    何が正しいのかわからない中で、わからないなりに３人で協力しながらハッカソンを完走できたのは良い思い出になりました。
                  </dd>
                </dl>
              </div>
              <label for="close1-3" class="accordion1_button">
                <span class="accordion1_buttonText">CLOSE</span>
              </label>
            </label>
          </div>
        </section>
        <!-- ハッカソン end -->

        <!-- TOPIC2 学生時代の思い出 -->
        <section id="topic">
          <h1 class="gakutika-title"><span>02</span>学生時代の思い出</h1>
          <div class="topic-main main2">
            <!-- 左側 作品タイトルと概要 -->
            <div class="right-box right2">
              <div class="topic-sub-title">
                <h1>店舗全国月間売上No.1を達成！！</h1>
                <h2>アルバイト『Right-on』</h2>
              </div>

              <div class="topic-content-box">
                <!-- 左からスライドイン -->
                <div class="topic-content">
                  <div id="topic-content-message" class="website1">
                    <div class="info-message">
                      <h3 style="font-size: 1rem">
                        アパレルショップRight-onでのアルバイト経験<br />
                        お客様のニーズに応える提案力・コミュニケーション力を身につけました
                      </h3>
                    </div>

                    <!-- 使用した言語 -->
                    <div class="info-message" style="margin-top: 1.5rem">
                      <h4>
                        勤務年数: 2年2ヶ月<br />
                        Position: トレーナー
                      </h4>
                    </div>
                    <a href="#" class="button2">
                      <div class="button-inner2">
                        <router-link id="router" to="/albaito">
                          <span class="button-text2">VIEW MORE→</span>
                        </router-link>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- 右側 タイトルと画像 -->
            <div class="left-box left2">
              <div class="topic-image">
                <img src="../../images/right-on.png" alt="Right-on写真" />
              </div>
            </div>
          </div>

          <!-- アコーディオンボックス -->
          <div class="acordion2-container">
            <!-- labelのfor要素とinputのidを紐づけている -->
            <!-- label要素をクリックしてもフォームがアクティブ化 -->
            <label class="accordion2 accordion2-1" for="point2-1">
              <!-- アコーディオンが開く用 -->
              <input
                class="accordion2_open"
                id="point2-1"
                type="radio"
                name="acoordion2-1"
              />
              <!-- アコーディオンが閉じる用 -->
              <input
                class="accordion2_close"
                id="close2-1"
                type="radio"
                name="acoordion2-1"
              />
              <div class="accordion2_tab">POINT!</div>
              <div class="accordion2_wrapper">
                <!-- 説明リスト -->
                <dl class="accordion2_box">
                  <!-- タイトル -->
                  <dt class="accordion2_patition">
                    <span class="accordion2_number">01</span>
                    <span class="accordion2_title">２年間の軌跡</span>
                  </dt>
                  <!-- 説明文 -->
                  <dd class="accordion2_text">
                    入りたての頃は店長から注意を受けてばかりで、それが悪循環を招いてしまっていたりして一時はアルバイトをやめようかと思った時期もありました。
                    その中で周りの手厚いサポートもありながら、辞めずに続けてきた結果、今では月間MVPに選んでいただけるほど接客に自信がつき、店の全国月間売上高1位に貢献することができたのは今後一生忘れることのできない思い出です。
                  </dd>
                </dl>
              </div>
              <label for="close2-1" class="accordion2_button">
                <span class="accordion2_buttonText">CLOSE</span>
              </label>
            </label>

            <label class="accordion2 accordion2-2" for="open2-2">
              <input
                class="accordion2_open"
                id="open2-2"
                type="radio"
                name="acoordion2-2"
              />
              <input
                class="accordion2_close"
                id="close2-2"
                type="radio"
                name="acoordion2-2"
              />
              <div class="accordion2_tab">POINT!</div>
              <div class="accordion2_wrapper">
                <dl class="accordion2_box">
                  <dt class="accordion2_patition">
                    <span class="accordion2_number">02</span>
                    <span class="accordion2_title" style="font-size: 0.9rem"
                      >販売実績を大幅に向上させた改善点</span
                    >
                  </dt>
                  <dd class="accordion2_text">
                    個人の売上が伸び悩んでいた時期がありました。以前は特に戦略を立てずに勢いだけで売上を伸ばしてきてしまっていたのが原因だと考え、お客様への質問の仕方をあえて「オープン・クエスチョン」から「クローズド・クエスチョン」へと変えてみました。
                    そうしたところ、自分の中でも話の展開が組み立てやすく、よりお客様のニーズに沿った接客ができるようになり、売上がどんどんと上がっていきました。
                  </dd>
                </dl>
              </div>
              <label for="close2-2" class="accordion2_button">
                <span class="accordion2_buttonText">CLOSE</span>
              </label>
            </label>

            <label class="accordion2 accordion2-3" for="open2-3">
              <input
                class="accordion2_open"
                id="open2-3"
                type="radio"
                name="acoordion2-3"
              />
              <input
                class="accordion2_close"
                id="close2-3"
                type="radio"
                name="acoordion2-3"
              />
              <div class="accordion2_tab">POINT!</div>
              <div class="accordion2_wrapper">
                <dl class="accordion2_box">
                  <dt class="accordion2_patition">
                    <span class="accordion2_number">03</span>
                    <span class="accordion2_title"
                      >一緒に働くスタッフへの声かけ</span
                    >
                  </dt>
                  <dd class="accordion2_text">
                    アルバイトをする上で1番大切にしていることが「一緒に働くスタッフへの声かけです」。いくら"モノ”が売れたとしても、
                    それを販売するスタッフのモチベーションが下がったままだとどこかで限界を迎えてしまうと思うからです。疲れているスタッフを見かけたら「後少しだから一緒に頑張ろう！」というような
                    声かけするということを常に忘れずに続けてきました。
                  </dd>
                </dl>
              </div>
              <label for="close2-3" class="accordion2_button">
                <span class="accordion2_buttonText">CLOSE</span>
              </label>
            </label>
          </div>
        </section>
        <!-- TOPIC2 学生時代の思い出 end -->

        <!-- TOPIC3 制作物 -->
        <section id="topic">
          <h1 class="gakutika-title"><span>03</span>特に注力した制作物</h1>
          <div class="topic-main main3">
            <!-- 左側 タイトルと画像 -->
            <div class="left-box left3">
              <div class="topic-image">
                <img src="../../images/pmapp.png" alt="制作物写真" />
              </div>
            </div>

            <!-- 右側 作品タイトルと概要 -->
            <div class="right-box right3">
              <div class="topic-sub-title">
                <h1>音楽✖︎写真 ~思い出共有アルバムアプリ~</h1>
                <h2>『Music & Photo Memories』</h2>
              </div>

              <div class="topic-content-box">
                <!-- 左からスライドイン -->
                <div class="topic-content">
                  <div id="topic-content-message" class="website1">
                    <div class="info-message">
                      <h3>
                        "あの日あの時あの場所で"<br />
                        見た景色＆聴いていた音楽を<br />目と耳で思い返すことができるアプリを開発
                      </h3>
                    </div>

                    <!-- 使用した言語 -->
                    <div class="info-message" style="margin-top: 1.5rem">
                      <h4>
                        制作人数: 1人 / 制作期間: 2週間<br />Python/Django,
                        bootStrap
                      </h4>
                    </div>
                    <a href="#" class="button3">
                      <div class="button-inner3">
                        <router-link id="router" to="/pmapp">
                          <span class="button-text3">VIEW MORE→</span>
                        </router-link>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- アコーディオンボックス -->
          <div class="acordion3-container">
            <!-- labelのfor要素とinputのidを紐づけている -->
            <!-- label要素をクリックしてもフォームがアクティブ化 -->
            <label class="accordion3 accordion3-1" for="point3-1">
              <!-- アコーディオンが開く用 -->
              <input
                class="accordion3_open"
                id="point3-1"
                type="radio"
                name="acoordion3-1"
              />
              <!-- アコーディオンが閉じる用 -->
              <input
                class="accordion3_close"
                id="close3-1"
                type="radio"
                name="acoordion3-1"
              />
              <div class="accordion3_tab">POINT!</div>
              <div class="accordion3_wrapper">
                <!-- 説明リスト -->
                <dl class="accordion3_box">
                  <!-- タイトル -->
                  <dt class="accordion3_patition">
                    <span class="accordion3_number">01</span>
                    <span class="accordion3_title">作ろうと思ったきっかけ</span>
                  </dt>
                  <!-- 説明文 -->
                  <dd class="accordion3_text">
                    使ってもらう人が便利になって、さらに楽しんでもらえるようなアプリ、そして自分の趣味の音楽をアプリで共有できるようなアプリ。これらを組み合わせた時に今1番欲しいアプリはどういったモノなのかを考えて出てきた答えがこのアプリでした。
                  </dd>
                </dl>
              </div>
              <label for="close3-1" class="accordion3_button">
                <span class="accordion3_buttonText">CLOSE</span>
              </label>
            </label>

            <label class="accordion3 accordion3-2" for="open3-2">
              <input
                class="accordion3_open"
                id="open3-2"
                type="radio"
                name="acoordion3-2"
              />
              <input
                class="accordion3_close"
                id="close3-2"
                type="radio"
                name="acoordion3-2"
              />
              <div class="accordion3_tab">POINT!</div>
              <div class="accordion3_wrapper">
                <dl class="accordion3_box">
                  <dt class="accordion3_patition">
                    <span class="accordion3_number">02</span>
                    <span class="accordion3_title">こだわりポイント</span>
                  </dt>
                  <dd class="accordion3_text">
                    タグ、音楽ジャンル、カテゴリごとに一覧ページがあり、検索がしやすい。レイアウトにもこだわりました。
                    また、YouTubeのMVも自分の投稿に紐づけることができるが、その時にわざわざiframeタグ用のURLを探してこなくても、YouTubeのURLを載せるだけでiframeタグに自動変換してくれる機能にもこだわりました。
                  </dd>
                </dl>
              </div>
              <label for="close3-2" class="accordion3_button">
                <span class="accordion3_buttonText">CLOSE</span>
              </label>
            </label>

            <label class="accordion3 accordion3-3" for="open3-3">
              <input
                class="accordion3_open"
                id="open3-3"
                type="radio"
                name="acoordion3-3"
              />
              <input
                class="accordion3_close"
                id="close3-3"
                type="radio"
                name="acoordion3-3"
              />
              <div class="accordion3_tab">POINT!</div>
              <div class="accordion3_wrapper">
                <dl class="accordion3_box">
                  <dt class="accordion3_patition">
                    <span class="accordion3_number">03</span>
                    <span class="accordion3_title">苦労した点</span>
                  </dt>
                  <dd class="accordion3_text">
                    本格的なWebアプリケーションをまだ作ったことがなかったことが１番苦労しました。ViewとURLの紐付き方だったり、データベースの扱い方だったり、少し複雑なところも出てきてしまい、それを独学でネットの記事を読んで解決していくのが大変でした。
                  </dd>
                </dl>
              </div>
              <label for="close3-3" class="accordion3_button">
                <span class="accordion3_buttonText">CLOSE</span>
              </label>
            </label>
          </div>
        </section>
        <!-- TOPIC3 制作物 end -->
      </section>
    </div>
  </div>
  <!-- home_container -->
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

#main {
  margin: 3rem 3rem 0 3rem;
}

#background-1 {
  background-image: url("../../images/aurora_2.jpg");
}

.top {
  color: white;
  height: 88vh;
  font-size: 1.5rem;
  text-align: center;
  /*背景画像の設定*/
  background-size: cover;
  /*背景画像は固定に*/
  background-attachment: fixed;
  background-position: center;
  background-image: url("../../images/aurora_2.jpg");
}

.top h2 {
  padding-top: 14rem;
}

#home_container {
  text-align: center;
}

.image-gallery {
  height: 13rem;
  width: 100%;
  display: block;
  border: 0.4rem solid rgb(151, 168, 2);
}

.image-gallery li {
  height: 100%;
  width: 25%; /* 25%で４つの画像を横並びに配置 */
  float: left;
  border: 0.4rem solid rgb(206, 204, 204);
}

.image-gallery li img {
  height: 100%;
  width: 100%;
  object-fit: cocver;
}

.background {
  margin: 0;
  padding: 12rem 0 12rem;
  background: linear-gradient(
      135deg,
      rgba(29, 33, 11, 0.8),
      rgba(28, 1, 11, 0.8)
    ),
    url("../../images/milky-way.jpg"), fixed;
  background-size: cover;
}

.info-text {
  background: transparent;
  letter-spacing: 4px;
  font-family: futura, sans-serif;
  color: #fff;
  display: block;
  text-shadow: 0 0 10px #21cbff, 0 0 10px #21cbff;
  font-size: 2rem;
}

.hexagon_box {
  width: auto;
  margin: 3rem;
  padding: 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(
      135deg,
      rgba(101, 255, 40, 0.8),
      rgba(89, 80, 255, 0.8)
    ),
    url("../../images/treasure.png"), fixed;
  background-size: cover;
  color: white;
  border-radius: 1.5rem;
}

.hexagon {
  position: relative;
  width: 150px;
  overflow: hidden;
}

.hexagon::before {
  display: block;
  padding-top: 86.602540378%; /*  2√3 / 4 x 100  */
  content: "";
}
.hexagon_inner1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transform: rotate(60deg);
}
.hexagon_inner2 {
  width: 100%;
  height: 100%;
  overflow: hidden;
  transform: rotate(60deg);
}
.hexagon_inner3 {
  width: 100%;
  height: 100%;
  transform: rotate(-120deg);
}

.hexagon_text1 > a {
  font-size: 1.5rem;
  position: absolute;
  top: 37%;
  left: 27%;
  color: white;
  display: block;
}

.hexagon_text2 > a {
  font-size: 1.5rem;
  position: absolute;
  top: 37%;
  left: 27%;
  color: white;
  display: block;
}

.hexagon_inner-image1 {
  width: 100%;
  height: 100%;
  /* background: url("./img/artist.jpg"); */
  background-color: rgba(0, 0, 0, 0.7);
  /* filter: brightness(100%); */
  background-size: cover;
  position: relative;
}

.hexagon_inner-image1::after {
  background-image: linear-gradient(rgb(88, 195, 214), rgb(8, 42, 87));
  filter: blur(20px);
  transform: translateY(10px) scale(1.1);
  mix-blend-mode: color-dodge;
}

.hexagon_inner-image2 {
  width: 100%;
  height: 100%;
  /* background: url("./img/songs.jpg"); */
  background-color: rgba(0, 0, 0, 0.7);
  /* filter: brightness(100%); */
  background-size: cover;
  position: relative;
}

.hexagon_inner-image3 {
  width: 100%;
  height: 100%;
  /* background: url("./img/Lyrics.jpg"); */
  background-color: rgba(0, 0, 0, 0.7);
  /* filter: brightness(100%); */
  background-size: cover;
  position: relative;
}

.hexagon_inner-image4 {
  width: 100%;
  height: 100%;
  /* background: url("./img/Live.jpg"); */
  background-color: rgba(0, 0, 0, 0.7);
  /* filter: brightness(100%); */
  background-size: cover;
  position: relative;
}

.hexagon_inner-image5 {
  width: 100%;
  height: 100%;
  /* background: url("./img/Fes.png"); */
  background-color: rgba(0, 0, 0, 0.7);
  /* filter: brightness(100%); */
  background-size: cover;
  position: relative;
}

.hexagon_box {
  color: white;
}

.hexa_line1 {
  display: flex;
  justify-content: space-around;
  width: 70%;
  margin-bottom: 2rem;
}
.hexa_line2 {
  display: flex;
  justify-content: space-around;
  width: 45%;
}

#topic {
  justify-content: space-between;
  margin: 14rem 2rem 0rem 2rem;
}

.gakutika-title {
  width: 40%;
  position: relative;
  overflow: hidden;
  padding: 1.5rem 2rem 1.5rem 7.2rem;
  margin-left: 2rem;
  border: 2px solid #000;
  background-color: #fff;
}

.gakutika-title:before {
  position: absolute;
  top: -150%;
  left: -60px;
  width: 200px;
  height: 300%;
  content: "";
  -webkit-transform: rotate(25deg);
  transform: rotate(25deg);
  background: #000;
}

.gakutika-title span {
  font-size: 3.2rem;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  display: block;
  padding-left: 16px;
  color: #fff;
}

.topic-main {
  height: 500px;
  margin: 5rem 0 5rem 0;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  border-radius: 1.5rem;
}

.main1 {
  background-color: #d7e4f6;
}
.main2 {
  background-color: #f4f6d7;
}
.main3 {
  background-color: #cfb7e0;
}

.left-box {
  width: 45%;
  font-size: 40px;
  display: inline-block;
  border: 1px solid black;
  margin: 2rem 0 0 4.6rem;
}

.left1 {
  /* 左が手前、右が奥になるように y軸を中心に20度傾ける */
  transform: perspective(700px) rotateY(20deg);
  transform-origin: 0% 50% 0px;
}
.left2 {
  /* 左が手前、右が奥になるように y軸を中心に20度傾ける */
  transform: perspective(2900px) rotateY(-30deg);
  transform-origin: 60% 60% 0px;
}
.left3 {
  /* 左が手前、右が奥になるように y軸を中心に20度傾ける */
  transform: perspective(700px) rotateY(20deg);
  transform-origin: 0% 50% 0px;
}

.right-box {
  width: 55%;
  padding: 3rem;
  justify-content: center;
  border-radius: 0.6rem;
}

.right1 {
  background-color: #f6ece8;
}
.right2 {
  background-color: #e7f6f4;
}
.right3 {
  background-color: #f3deef;
}

.topic-image {
  width: 100%;
  height: 100%;
  margin: 1rem;
}

.topic-image > img {
  width: 100%;
  height: 100%;
}

.topic-sub-title {
  width: 80%;
  padding: 1rem;
  margin: 0 auto;
  margin-bottom: 1rem;
  border: 6px double #000;
}

:root {
  --main_color1: #00acb9;
  --main_color2: #ffa400;
  --main_color3: #ff2e71;
  --sub_color: #4d4d4d;
}

.button1 {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 256px;
  height: 72px;
  margin: 20px auto;
  overflow: hidden;
  font-family: "Homenaje", sans-serif;
}
.button1::before,
.button1::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  transform-origin: bottom right;
  transition: all 0.6s ease;
}
.button1::before {
  width: 16px;
  height: 56px;
  transform: skewY(45deg);
  background: var(--main_color1);
}
.button1::after {
  width: 240px;
  height: 16px;
  transform: skewX(45deg);
  background: var(--sub_color);
}
.button-inner1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 240px;
  height: 56px;
  padding: 8px;
  box-sizing: border-box;
  border: solid 2px #000;
  background: #fff;
  transition: all 0.6s ease;
}
.button-inner1::before,
.button-inner1::after {
  content: "";
  position: absolute;
  top: 8px;
  left: calc(100% - 80px - 8px);
  height: 8px;
  transition: all 1.2s linear;
}
.button-inner1::before {
  z-index: 2;
  background: var(--main_color1);
  width: 0;
  margin-top: 1.5rem;
}
.button-inner1::after {
  z-index: 1;
  background: var(--sub_color);
  width: 80px;
  margin-top: 1.5rem;
}
.button-text1 {
  position: relative;
  display: flex;
  align-items: flex-end;
  width: calc(100% - 66px);
  height: 100%;
  box-sizing: border-box;
  padding-left: 11px;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  color: #00acb9;
  letter-spacing: 2px;
}
.button-text1::before {
  content: "CLICK!";
  position: absolute;
  top: 0;
  left: 12px;
  font-size: 10px;
  line-height: 12px;
}
.button-text1::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--main_color1);
}

.button1:hover::before {
  width: 0;
}
.button1:hover::after {
  height: 0;
}
.button1:hover .button-inner1 {
  top: 16px;
  left: 16px;
}
.button1:hover .button-inner1::before {
  width: 80px;
}
.button1:hover,
.button1:hover {
  animation-timing-function: steps(30);
  animation-fill-mode: forwards;
}
.button1:hover {
  animation-iteration-count: 10;
  animation-duration: 0.02s;
}
.button1:hover {
  animation-duration: 0.02s;
}

.button2 {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 256px;
  height: 72px;
  margin: 20px auto;
  overflow: hidden;
  font-family: "Homenaje", sans-serif;
}
.button2::before,
.button2::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  transform-origin: bottom right;
  transition: all 0.6s ease;
}
.button2::before {
  width: 16px;
  height: 56px;
  transform: skewY(45deg);
  background: var(--main_color2);
}
.button2::after {
  width: 240px;
  height: 16px;
  transform: skewX(45deg);
  background: var(--sub_color);
}
.button-inner2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 240px;
  height: 56px;
  padding: 8px;
  box-sizing: border-box;
  border: solid 2px #000;
  background: #fff;
  transition: all 0.6s ease;
}
.button-inner2::before,
.button-inner2::after {
  content: "";
  position: absolute;
  top: 8px;
  left: calc(100% - 80px - 8px);
  height: 8px;
  transition: all 1.2s linear;
}
.button-inner2::before {
  z-index: 2;
  background: var(--main_color2);
  width: 0;
  margin-top: 1.5rem;
}
.button-inner2::after {
  z-index: 1;
  background: var(--sub_color);
  width: 80px;
  margin-top: 1.5rem;
}
.button-text2 {
  position: relative;
  display: flex;
  align-items: flex-end;
  width: calc(100% - 66px);
  height: 100%;
  box-sizing: border-box;
  padding-left: 11px;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  color: #ffa400;
  letter-spacing: 2px;
}
.button-text2::before {
  content: "CLICK!";
  position: absolute;
  top: 0;
  left: 12px;
  font-size: 10px;
  line-height: 12px;
}
.button-text2::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--main_color2);
}

.button2:hover::before {
  width: 0;
}
.button2:hover::after {
  height: 0;
}
.button2:hover .button-inner2 {
  top: 16px;
  left: 16px;
}
.button2:hover .button-inner2::before {
  width: 80px;
}
.button2:hover,
.button2:hover {
  animation-timing-function: steps(30);
  animation-fill-mode: forwards;
}
.button2:hover {
  animation-iteration-count: 10;
  animation-duration: 0.02s;
}
.button2:hover {
  animation-duration: 0.02s;
}

.button3 {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 256px;
  height: 72px;
  margin: 20px auto;
  overflow: hidden;
  font-family: "Homenaje", sans-serif;
}
.button3::before,
.button3::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  transform-origin: bottom right;
  transition: all 0.6s ease;
}
.button3::before {
  width: 16px;
  height: 56px;
  transform: skewY(45deg);
  background: var(--main_color3);
}
.button3::after {
  width: 240px;
  height: 16px;
  transform: skewX(45deg);
  background: var(--sub_color);
}
.button-inner3 {
  position: absolute;
  top: 0;
  left: 0;
  width: 240px;
  height: 56px;
  padding: 8px;
  box-sizing: border-box;
  border: solid 2px #000;
  background: #fff;
  transition: all 0.6s ease;
}
.button-inner3::before,
.button-inner3::after {
  content: "";
  position: absolute;
  top: 8px;
  left: calc(100% - 80px - 8px);
  height: 8px;
  transition: all 1.2s linear;
}
.button-inner3::before {
  z-index: 2;
  background: var(--main_color3);
  width: 0;
  margin-top: 1.5rem;
}
.button-inner3::after {
  z-index: 1;
  background: var(--sub_color);
  width: 80px;
  margin-top: 1.5rem;
}
.button-text3 {
  position: relative;
  display: flex;
  align-items: flex-end;
  width: calc(100% - 66px);
  height: 100%;
  box-sizing: border-box;
  padding-left: 11px;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  color: #ff2e71;
  letter-spacing: 2px;
}
.button-text3::before {
  content: "CLICK!";
  position: absolute;
  top: 0;
  left: 12px;
  font-size: 10px;
  line-height: 12px;
}
.button-text3::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--main_color3);
}

.button3:hover::before {
  width: 0;
}
.button3:hover::after {
  height: 0;
}
.button3:hover .button-inner3 {
  top: 16px;
  left: 16px;
}
.button3:hover .button-inner3::before {
  width: 80px;
}
.button3:hover,
.button3:hover {
  animation-timing-function: steps(30);
  animation-fill-mode: forwards;
}
.button3:hover {
  animation-iteration-count: 10;
  animation-duration: 0.02s;
}
.button3:hover {
  animation-duration: 0.02s;
}

.acordion1-container {
  display: flex;
  justify-content: space-between;
  background-color: #f6d2d4;
  padding: 3rem 3rem 5rem;
  border-radius: 1rem;
}

.accordion1-1 {
  /* カスタムプロパティ（変数） */
  --color: #18b9c1;
}
.accordion1-2 {
  --color: #ffa400;
}
.accordion1-3 {
  --color: #ff2e71;
}

/* アコーディオン本体 */
.accordion1 {
  position: relative;
  width: 33%;
  margin: 0 1rem 0;
  color: #443849;
}

/* 「POINT!」 タブ */
.accordion1_tab {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  z-index: 2;
  width: 6.2rem;
  height: 1.6rem;
  font-size: 16px;
  border-radius: 10px 12px 0 0;
  background: rgb(85, 197, 188);
  font-family: "Barlow", sans-serif;
  color: #443849;
}
.accordion1_tab::before {
  content: "";
  position: absolute;
  z-index: 2;
  bottom: 0;
  right: -18px;
  width: 0;
  height: 0;
  border-top: solid 20px transparent;
  border-left: solid 20px rgb(85, 197, 188);
  border-right: solid 0 transparent;
  border-bottom: solid 0 transparent;
  color: #443849;
}
.accordion1_open,
.accordion1_close {
  /* labelで包んているので非表示 */
  display: none;
}
.accordion1_wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 2rem;
  box-sizing: border-box;
  background: #fff;
  border-radius: 0 12px 12px 12px;
  cursor: pointer; /* カーソルが手の形になる */
}
.accordion1_box {
  margin: 0;
}
.accordion1_patition {
  position: relative;
  z-index: 2;
  box-sizing: border-box;
  margin-top: 1rem;
  width: 100%;
  transition: all 0.2s ease;
}
.accordion1_number {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 50px;
  height: 40px;
  margin-right: 16px;
  font-size: 40px;
  font-family: "Barlow", sans-serif;
  color: var(--color);
}
.accordion1_number::before {
  content: "";
  position: absolute;
  bottom: 1px;
  left: 66px;
  width: 0;
  height: 40px;
  background: var(--color);
}
.accordion1_number::after {
  content: "";
  position: absolute;
  bottom: 4px;
  left: 66px;
  width: 0;
  height: 40px;
  font-size: 13px;
  line-height: 13px;
  overflow: hidden;
}
.accordion1_title {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-left: 56px;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.3;
  min-height: 40px;
}
.accordion1_title::before {
  content: "";
  position: absolute;
  bottom: -12px;
  right: 0;
  width: 0;
  height: 1px;
  background: var(--color);
}
.accordion1_text {
  position: relative;
  z-index: 2;
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  max-height: 0;
  overflow: hidden;
  color: transparent;
  transition: all 0.5s ease;
}
.accordion1_text::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: auto;
  width: 0;
  height: 100%;
  background: var(--color);
}
.accordion1_button {
  position: absolute;
  z-index: 1; /* accordion_tab(z-index: 2)の下に隠れているので、開かれるまでは表示されない */
  top: 4px;
  left: 1px;
  font-family: "Barlow", sans-serif;
  font-size: 12px;
  width: 0;
  height: 28px;
  overflow: hidden; /* 必要ない部分を見えなくする */
  transition: all 0.8s ease;
  cursor: pointer;
}
/* ボタンの形指定 */
.accordion1_button::before {
  content: "";
  position: absolute;
  z-index: 1;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transform-origin: bottom right;
  transform: skew(30deg); /* 要素を３０度傾ける */
  border-radius: 0 7px 0 0;
  /* --colorで定義した値が入る */
  background: var(--color);
}
/* ボタンテキスト（CLOSE) */
.accordion1_buttonText {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  z-index: 3; /* 1番手前にくるようにしてクリックできるようにする。 */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-right: 3rem;
  color: #fff;
}
/* バツ×ボタン */
.accordion1_buttonText::before,
.accordion1_buttonText::after {
  content: "";
  position: absolute;
  top: 0;
  right: 1.5rem;
  bottom: 0;
  margin: auto 0;
  width: 1rem;
  height: 3px;
  background: #fff;
}
.accordion1_buttonText::before {
  transform: rotate(45deg);
}
.accordion1_buttonText::after {
  transform: rotate(-45deg);
}

/* :checked擬似クラスセレクタ → ラジオボタンがonの状態を指す */
/* アコーディオンが開いた時のタグ処理 */
.accordion1_open:checked ~ .accordion1_tab {
  animation: tab_height 0.4s ease;
  /* 対象は実行の最後のキーフレームで設計された計算値を保持 */
  /* keyframes 100%の時点のheightで確定 */
  animation-fill-mode: forwards;
  color: #443849;
}
@keyframes tab_height {
  0% {
    height: 26px;
    color: #443849;
  }
  /* タブの高さを広げて文字色変更 */
  100% {
    height: 32px;
    color: #443849;
  }
}
/* CLOSEボタンが押された時のタグ処理 */
.accordion1_close:checked ~ .accordion1_tab {
  height: 32px; /* クリックされた最初の高さは指定しておく */
  animation: tab_reverse 0.3s 0.3s ease;
  animation-fill-mode: forwards;
  color: #443849;
}
@keyframes tab_reverse {
  0% {
    height: 32px;
    color: #443849;
  }
  100% {
    height: 24px;
    color: #443849;
  }
}
.accordion1_open:checked ~ .accordion1_tab::before {
  animation: tab_traiangle 0.3s ease;
  animation-fill-mode: forwards;
  color: #443849;
}
@keyframes tab_traiangle {
  0% {
    right: -16px;
    border-top: solid 21px transparent;
    color: #443849;
  }
  100% {
    right: -18px;
    border-top: solid 27px transparent;
    color: #443849;
  }
}
.accordion1_close:checked ~ .accordion1_tab::before {
  right: -18px;
  border-top: solid 26px transparent;
  animation: tab_triangle_reverse 0.3s 0.3s ease;
  animation-fill-mode: forwards;
  color: #443849;
}
@keyframes tab_triangle_reverse {
  0% {
    right: -18px;
    border-top: solid 26px transparent;
    color: #443849;
  }
  100% {
    right: -16px;
    border-top: solid 20px transparent;
    color: #443849;
  }
}
.accordion1_open:checked ~ .accordion1_wrapper {
  cursor: default;
}
.accordion1_open:checked ~ .accordion1_wrapper .accordion1_patition {
  margin-bottom: 10px;
  animation: title_top 0.1s ease;
  animation-fill-mode: forwards;
}
@keyframes title_top {
  0% {
    padding-top: 0;
    margin-bottom: 0;
  }
  100% {
    padding-top: 50px;
    margin-bottom: 24px;
  }
}
.accordion1_close:checked ~ .accordion1_wrapper .accordion1_patition {
  padding-top: 64px;
  margin-bottom: 24px;
  animation: title_top_reverse 0.3s 0.5s ease;
  animation-fill-mode: forwards;
}
@keyframes title_top_reverse {
  0% {
    padding-top: 64px;
    margin-bottom: 24px;
  }
  100% {
    padding-top: 0;
    margin-bottom: 0;
  }
}
.accordion1_open:checked ~ .accordion1_wrapper .accordion1_number {
  animation: rotate 0.5s linear;
  animation-fill-mode: forwards;
}
@keyframes rotate {
  0% {
    transform: rotateY(0deg) scale(1);
    width: auto;
  }
  20% {
    transform: rotateY(360deg) scale(1.6);
    font-size: 56px;
    height: 56px;
  }
  60% {
    transform: rotateY(360deg) scale(1.6);
  }
  70% {
    transform: rotateY(360deg) scale(1);
    width: auto;
  }
  84% {
    transform: rotateY(360deg) scale(1);
    width: auto;
  }
  85% {
    transform: rotateY(360deg) scale(1);
    width: 100%;
  }
  100% {
    transform: rotateY(360deg) scale(1);
    width: 100%;
    font-size: 56px;
    height: 56px;
  }
}
.accordion1_close:checked ~ .accordion1_wrapper .accordion1_number {
  font-size: 56px;
  height: 56px;
  animation: rotate_rev 0.2s 0.5s linear;
  animation-fill-mode: forwards;
}
@keyframes rotate_rev {
  0% {
    font-size: 56px;
    height: 56px;
  }
  100% {
    font-size: 40px;
    height: 40px;
  }
}
.accordion1_open:checked ~ .accordion1_wrapper .accordion1_number::before {
  animation: num_line 0.3s 0.9s ease;
  animation-fill-mode: forwards;
}
@keyframes num_line {
  0% {
    width: 0;
  }
  100% {
    width: 5px;
  }
}
.accordion1_close:checked ~ .accordion1_wrapper .accordion1_number::before {
  animation: num_line_rev 0.3s ease;
  animation-fill-mode: forwards;
}
@keyframes num_line_rev {
  0% {
    width: 5px;
  }
  100% {
    width: 0;
  }
}
.accordion1_open:checked ~ .accordion1_wrapper .accordion1_number::after {
  animation: num_text 0.7s 1s ease;
  animation-fill-mode: forwards;
}
@keyframes num_text {
  0% {
    width: 0;
  }
  100% {
    width: 80px;
  }
}
.accordion1_close:checked ~ .accordion1_wrapper .accordion1_number::after {
  animation: num_text_rev 0.3s ease;
  animation-fill-mode: forwards;
}
@keyframes num_text_rev {
  0% {
    width: 80px;
  }
  100% {
    width: 0;
  }
}
.accordion1_open:checked ~ .accordion1_wrapper .accordion1_title {
  animation: title_space 0.5s 0.5s ease;
  animation-fill-mode: forwards;
}
@keyframes title_space {
  0% {
    padding-left: 56px;
  }
  100% {
    padding-left: 0;
  }
}
.accordion1_close:checked ~ .accordion1_wrapper .accordion1_title {
  padding-left: 0;
  animation: title_space_rev 0.3s 0.3s ease;
  animation-fill-mode: forwards;
}
@keyframes title_space_rev {
  0% {
    padding-left: 0;
  }
  100% {
    padding-left: 56px;
  }
}
.accordion1_open:checked ~ .accordion1_wrapper .accordion1_title::before {
  animation: title_line 0.5s 0.9s ease;
  animation-fill-mode: forwards;
}
@keyframes title_line {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
.accordion1_close:checked ~ .accordion1_wrapper .accordion1_title::before {
  animation: title_line_rev 0.3s ease;
  animation-fill-mode: forwards;
}
@keyframes title_line_rev {
  0% {
    width: 100%;
  }
  100% {
    width: 0;
  }
}

.accordion1_open:checked ~ .accordion1_wrapper .accordion1_text {
  max-height: 200px;
  animation: text_color 0.8s 0.9s ease;
  animation-fill-mode: forwards;
}
@keyframes text_color {
  0% {
    color: transparent;
  }
  49.9% {
    color: transparent;
  }
  50% {
    color: #443849;
  }
  100% {
    color: #443849;
  }
}
.accordion1_close:checked ~ .accordion1_wrapper .accordion1_text {
  animation: text_color_rev 0.3s ease;
  animation-fill-mode: forwards;
}
@keyframes text_color_rev {
  0% {
    color: #443849;
  }
  100% {
    color: transparent;
  }
}
.accordion1_open:checked ~ .accordion1_wrapper .accordion1_text::before {
  animation: text_blind 0.8s 0.9s ease;
  animation-fill-mode: forwards;
}
@keyframes text_blind {
  0% {
    width: 0;
    left: 0;
    right: auto;
  }
  45% {
    width: 100%;
    left: 0;
    right: auto;
  }
  49.9% {
    width: 100%;
    left: 0;
    right: auto;
  }
  50% {
    width: 100%;
    left: auto;
    right: 0;
  }
  55% {
    width: 100%;
    left: auto;
    right: 0;
  }
  100% {
    width: 0;
    left: auto;
    right: 0;
  }
}
.accordion1_open:checked ~ .accordion1_button {
  animation: close_button 0.5s 0.9s ease-out;
  animation-fill-mode: forwards;
}
@keyframes close_button {
  0% {
    width: 0;
  }
  100% {
    width: calc(100% - 24px - 4px);
  }
}
.accordion1_close:checked ~ .accordion1_button {
  animation: close_button_rev 0.3s ease-in;
  animation-fill-mode: forwards;
}
@keyframes close_button_rev {
  0% {
    width: calc(100% - 24px - 4px);
  }
  100% {
    width: 0;
  }
}

/* accordion2 */
.acordion2-container {
  display: flex;
  justify-content: space-between;
  background-color: #adb9ee;
  padding: 3rem 3rem 5rem;
  border-radius: 1rem;
}

.accordion2-1 {
  /* カスタムプロパティ（変数） */
  --color: #6c00ff;
}
.accordion2-2 {
  --color: #3c79f5;
}
.accordion2-3 {
  --color: #a0e4cb;
}

/* アコーディオン本体 */
.accordion2 {
  position: relative;
  width: 33%;
  margin: 0 1rem 0;
  color: #443849;
}

/* 「POINT!」 タブ */
.accordion2_tab {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  z-index: 2;
  width: 6.2rem;
  height: 1.6rem;
  font-size: 16px;
  border-radius: 10px 12px 0 0;
  background: rgb(136, 200, 32);
  font-family: "Barlow", sans-serif;
}
.accordion2_tab::before {
  content: "";
  position: absolute;
  z-index: 2;
  bottom: 0;
  right: -18px;
  width: 0;
  height: 0;
  border-top: solid 20px transparent;
  border-left: solid 20px rgb(136, 200, 32);
  border-right: solid 0 transparent;
  border-bottom: solid 0 transparent;
}
.accordion2_open,
.accordion2_close {
  /* labelで包んているので非表示 */
  display: none;
}
.accordion2_wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 2rem;
  box-sizing: border-box;
  background: #fff;
  border-radius: 0 12px 12px 12px;
  cursor: pointer; /* カーソルが手の形になる */
}
.accordion2_box {
  margin: 0;
}
.accordion2_patition {
  position: relative;
  z-index: 2;
  box-sizing: border-box;
  margin-top: 1rem;
  width: 100%;
  transition: all 0.2s ease;
}
.accordion2_number {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 50px;
  height: 40px;
  margin-right: 16px;
  font-size: 40px;
  font-family: "Barlow", sans-serif;
  color: var(--color);
}
.accordion2_number::before {
  content: "";
  position: absolute;
  bottom: 1px;
  left: 66px;
  width: 0;
  height: 40px;
  background: var(--color);
}
.accordion2_number::after {
  content: "";
  position: absolute;
  bottom: 4px;
  left: 66px;
  width: 0;
  height: 40px;
  font-size: 13px;
  line-height: 13px;
  overflow: hidden;
}
.accordion2_title {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-left: 56px;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.3;
  min-height: 40px;
}
.accordion2_title::before {
  content: "";
  position: absolute;
  bottom: -12px;
  right: 0;
  width: 0;
  height: 1px;
  background: var(--color);
}
.accordion2_text {
  position: relative;
  z-index: 2;
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  max-height: 0;
  overflow: hidden;
  color: transparent;
  transition: all 0.5s ease;
}
.accordion2_text::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: auto;
  width: 0;
  height: 100%;
  background: var(--color);
}
.accordion2_button {
  position: absolute;
  z-index: 1; /* accordion_tab(z-index: 2)の下に隠れているので、開かれるまでは表示されない */
  top: 4px;
  left: 1px;
  font-family: "Barlow", sans-serif;
  font-size: 12px;
  width: 0;
  height: 28px;
  overflow: hidden; /* 必要ない部分を見えなくする */
  transition: all 0.8s ease;
  cursor: pointer;
}
/* ボタンの形指定 */
.accordion2_button::before {
  content: "";
  position: absolute;
  z-index: 1;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transform-origin: bottom right;
  transform: skew(30deg); /* 要素を３０度傾ける */
  border-radius: 0 7px 0 0;
  /* --colorで定義した値が入る */
  background: var(--color);
}
/* ボタンテキスト（CLOSE) */
.accordion2_buttonText {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  z-index: 3; /* 1番手前にくるようにしてクリックできるようにする。 */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-right: 3rem;
  color: #fff;
}
/* バツ×ボタン */
.accordion2_buttonText::before,
.accordion2_buttonText::after {
  content: "";
  position: absolute;
  top: 0;
  right: 1.5rem;
  bottom: 0;
  margin: auto 0;
  width: 1rem;
  height: 3px;
  background: #fff;
}
.accordion2_buttonText::before {
  transform: rotate(45deg);
}
.accordion2_buttonText::after {
  transform: rotate(-45deg);
}

/* :checked擬似クラスセレクタ → ラジオボタンがonの状態を指す */
/* アコーディオンが開いた時のタグ処理 */
.accordion2_open:checked ~ .accordion2_tab {
  animation: tab_height 0.4s ease;
  /* 対象は実行の最後のキーフレームで設計された計算値を保持 */
  /* keyframes 100%の時点のheightで確定 */
  animation-fill-mode: forwards;
}
@keyframes tab_height {
  0% {
    height: 26px;
  }
  /* タブの高さを広げて文字色変更 */
  100% {
    height: 32px;
    color: var(--color);
  }
}
/* CLOSEボタンが押された時のタグ処理 */
.accordion2_close:checked ~ .accordion2_tab {
  height: 32px; /* クリックされた最初の高さは指定しておく */
  animation: tab_reverse 0.3s 0.3s ease;
  animation-fill-mode: forwards;
  color: var(--color);
}
@keyframes tab_reverse {
  0% {
    height: 32px;
    color: var(--color);
  }
  100% {
    height: 24px;
    color: #443849;
  }
}
.accordion2_open:checked ~ .accordion2_tab::before {
  animation: tab_traiangle 0.3s ease;
  animation-fill-mode: forwards;
}
@keyframes tab_traiangle {
  0% {
    right: -16px;
    border-top: solid 21px transparent;
  }
  100% {
    right: -18px;
    border-top: solid 27px transparent;
  }
}
.accordion2_close:checked ~ .accordion2_tab::before {
  right: -18px;
  border-top: solid 26px transparent;
  animation: tab_triangle_reverse 0.3s 0.3s ease;
  animation-fill-mode: forwards;
}
@keyframes tab_triangle_reverse {
  0% {
    right: -18px;
    border-top: solid 26px transparent;
  }
  100% {
    right: -16px;
    border-top: solid 20px transparent;
  }
}
.accordion2_open:checked ~ .accordion2_wrapper {
  cursor: default;
}
.accordion2_open:checked ~ .accordion2_wrapper .accordion2_patition {
  margin-bottom: 10px;
  animation: title_top 0.1s ease;
  animation-fill-mode: forwards;
}
@keyframes title_top {
  0% {
    padding-top: 0;
    margin-bottom: 0;
  }
  100% {
    padding-top: 50px;
    margin-bottom: 24px;
  }
}
.accordion2_close:checked ~ .accordion2_wrapper .accordion2_patition {
  padding-top: 64px;
  margin-bottom: 24px;
  animation: title_top_reverse 0.3s 0.5s ease;
  animation-fill-mode: forwards;
}
@keyframes title_top_reverse {
  0% {
    padding-top: 64px;
    margin-bottom: 24px;
  }
  100% {
    padding-top: 0;
    margin-bottom: 0;
  }
}
.accordion2_open:checked ~ .accordion2_wrapper .accordion2_number {
  animation: rotate 0.5s linear;
  animation-fill-mode: forwards;
}
@keyframes rotate {
  0% {
    transform: rotateY(0deg) scale(1);
    width: auto;
  }
  20% {
    transform: rotateY(360deg) scale(1.6);
    font-size: 56px;
    height: 56px;
  }
  60% {
    transform: rotateY(360deg) scale(1.6);
  }
  70% {
    transform: rotateY(360deg) scale(1);
    width: auto;
  }
  84% {
    transform: rotateY(360deg) scale(1);
    width: auto;
  }
  85% {
    transform: rotateY(360deg) scale(1);
    width: 100%;
  }
  100% {
    transform: rotateY(360deg) scale(1);
    width: 100%;
    font-size: 56px;
    height: 56px;
  }
}
.accordion2_close:checked ~ .accordion2_wrapper .accordion2_number {
  font-size: 56px;
  height: 56px;
  animation: rotate_rev 0.2s 0.5s linear;
  animation-fill-mode: forwards;
}
@keyframes rotate_rev {
  0% {
    font-size: 56px;
    height: 56px;
  }
  100% {
    font-size: 40px;
    height: 40px;
  }
}
.accordion2_open:checked ~ .accordion2_wrapper .accordion2_number::before {
  animation: num_line 0.3s 0.9s ease;
  animation-fill-mode: forwards;
}
@keyframes num_line {
  0% {
    width: 0;
  }
  100% {
    width: 5px;
  }
}
.accordion2_close:checked ~ .accordion2_wrapper .accordion2_number::before {
  animation: num_line_rev 0.3s ease;
  animation-fill-mode: forwards;
}
@keyframes num_line_rev {
  0% {
    width: 5px;
  }
  100% {
    width: 0;
  }
}
.accordion2_open:checked ~ .accordion2_wrapper .accordion2_number::after {
  animation: num_text 0.7s 1s ease;
  animation-fill-mode: forwards;
}
@keyframes num_text {
  0% {
    width: 0;
  }
  100% {
    width: 80px;
  }
}
.accordion2_close:checked ~ .accordion2_wrapper .accordion2_number::after {
  animation: num_text_rev 0.3s ease;
  animation-fill-mode: forwards;
}
@keyframes num_text_rev {
  0% {
    width: 80px;
  }
  100% {
    width: 0;
  }
}
.accordion2_open:checked ~ .accordion2_wrapper .accordion2_title {
  animation: title_space 0.5s 0.5s ease;
  animation-fill-mode: forwards;
}
@keyframes title_space {
  0% {
    padding-left: 56px;
  }
  100% {
    padding-left: 0;
  }
}
.accordion2_close:checked ~ .accordion2_wrapper .accordion2_title {
  padding-left: 0;
  animation: title_space_rev 0.3s 0.3s ease;
  animation-fill-mode: forwards;
}
@keyframes title_space_rev {
  0% {
    padding-left: 0;
  }
  100% {
    padding-left: 56px;
  }
}
.accordion2_open:checked ~ .accordion2_wrapper .accordion2_title::before {
  animation: title_line 0.5s 0.9s ease;
  animation-fill-mode: forwards;
}
@keyframes title_line {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
.accordion2_close:checked ~ .accordion2_wrapper .accordion2_title::before {
  animation: title_line_rev 0.3s ease;
  animation-fill-mode: forwards;
}
@keyframes title_line_rev {
  0% {
    width: 100%;
  }
  100% {
    width: 0;
  }
}

.accordion2_open:checked ~ .accordion2_wrapper .accordion2_text {
  max-height: 200px;
  animation: text_color 0.8s 0.9s ease;
  animation-fill-mode: forwards;
}
@keyframes text_color {
  0% {
    color: transparent;
  }
  49.9% {
    color: transparent;
  }
  50% {
    color: #443849;
  }
  100% {
    color: #443849;
  }
}
.accordion2_close:checked ~ .accordion2_wrapper .accordion2_text {
  animation: text_color_rev 0.3s ease;
  animation-fill-mode: forwards;
}
@keyframes text_color_rev {
  0% {
    color: #443849;
  }
  100% {
    color: transparent;
  }
}
.accordion2_open:checked ~ .accordion2_wrapper .accordion2_text::before {
  animation: text_blind 0.8s 0.9s ease;
  animation-fill-mode: forwards;
}
@keyframes text_blind {
  0% {
    width: 0;
    left: 0;
    right: auto;
  }
  45% {
    width: 100%;
    left: 0;
    right: auto;
  }
  49.9% {
    width: 100%;
    left: 0;
    right: auto;
  }
  50% {
    width: 100%;
    left: auto;
    right: 0;
  }
  55% {
    width: 100%;
    left: auto;
    right: 0;
  }
  100% {
    width: 0;
    left: auto;
    right: 0;
  }
}
.accordion2_open:checked ~ .accordion2_button {
  animation: close_button 0.5s 0.9s ease-out;
  animation-fill-mode: forwards;
}
@keyframes close_button {
  0% {
    width: 0;
  }
  100% {
    width: calc(100% - 24px - 4px);
  }
}
.accordion2_close:checked ~ .accordion2_button {
  animation: close_button_rev 0.3s ease-in;
  animation-fill-mode: forwards;
}
@keyframes close_button_rev {
  0% {
    width: calc(100% - 24px - 4px);
  }
  100% {
    width: 0;
  }
}

/* accordion3 */
.acordion3-container {
  display: flex;
  justify-content: space-between;
  background-color: #ddede9;
  padding: 3rem 3rem 5rem;
  border-radius: 1rem;
}

.accordion3-1 {
  /* カスタムプロパティ（変数） */
  --color: #d800a6;
}
.accordion3-2 {
  --color: #400d51;
}
.accordion3-3 {
  --color: #31e1f7;
}

/* アコーディオン本体 */
.accordion3 {
  position: relative;
  width: 33%;
  margin: 0 1rem 0;
  color: #443849;
}

/* 「POINT!」 タブ */
.accordion3_tab {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  z-index: 2;
  width: 6.2rem;
  height: 1.6rem;
  font-size: 16px;
  border-radius: 10px 12px 0 0;
  background: rgb(186, 52, 115);
  font-family: "Barlow", sans-serif;
  color: #fff;
}
.accordion3_tab::before {
  content: "";
  position: absolute;
  z-index: 2;
  bottom: 0;
  right: -18px;
  width: 0;
  height: 0;
  border-top: solid 20px transparent;
  border-left: solid 20px rgb(186, 52, 115);
  color: #fff;
  border-right: solid 0 transparent;
  border-bottom: solid 0 transparent;
}
.accordion3_open,
.accordion3_close {
  /* labelで包んているので非表示 */
  display: none;
}
.accordion3_wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 2rem;
  box-sizing: border-box;
  background: #fff;
  border-radius: 0 12px 12px 12px;
  cursor: pointer; /* カーソルが手の形になる */
}
.accordion3_box {
  margin: 0;
}
.accordion3_patition {
  position: relative;
  z-index: 2;
  box-sizing: border-box;
  margin-top: 1rem;
  width: 100%;
  transition: all 0.2s ease;
}
.accordion3_number {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 50px;
  height: 40px;
  margin-right: 16px;
  font-size: 40px;
  font-family: "Barlow", sans-serif;
  color: var(--color);
}
.accordion3_number::before {
  content: "";
  position: absolute;
  bottom: 1px;
  left: 66px;
  width: 0;
  height: 40px;
  background: var(--color);
}
.accordion3_number::after {
  content: "";
  position: absolute;
  bottom: 4px;
  left: 66px;
  width: 0;
  height: 40px;
  font-size: 13px;
  line-height: 13px;
  overflow: hidden;
}
.accordion3_title {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-left: 56px;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.3;
  min-height: 40px;
}
.accordion3_title::before {
  content: "";
  position: absolute;
  bottom: -12px;
  right: 0;
  width: 0;
  height: 1px;
  background: var(--color);
}
.accordion3_text {
  position: relative;
  z-index: 2;
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  max-height: 0;
  overflow: hidden;
  color: transparent;
  transition: all 0.5s ease;
}
.accordion3_text::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: auto;
  width: 0;
  height: 100%;
  background: var(--color);
}
.accordion3_button {
  position: absolute;
  z-index: 1; /* accordion_tab(z-index: 2)の下に隠れているので、開かれるまでは表示されない */
  top: 4px;
  left: 1px;
  font-family: "Barlow", sans-serif;
  font-size: 12px;
  width: 0;
  height: 28px;
  overflow: hidden; /* 必要ない部分を見えなくする */
  transition: all 0.8s ease;
  cursor: pointer;
}
/* ボタンの形指定 */
.accordion3_button::before {
  content: "";
  position: absolute;
  z-index: 1;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transform-origin: bottom right;
  transform: skew(30deg); /* 要素を３０度傾ける */
  border-radius: 0 7px 0 0;
  /* --colorで定義した値が入る */
  background: var(--color);
}
/* ボタンテキスト（CLOSE) */
.accordion3_buttonText {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  z-index: 3; /* 1番手前にくるようにしてクリックできるようにする。 */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-right: 3rem;
  color: #fff;
}
/* バツ×ボタン */
.accordion3_buttonText::before,
.accordion3_buttonText::after {
  content: "";
  position: absolute;
  top: 0;
  right: 1.5rem;
  bottom: 0;
  margin: auto 0;
  width: 1rem;
  height: 3px;
  background: #fff;
}
.accordion3_buttonText::before {
  transform: rotate(45deg);
}
.accordion3_buttonText::after {
  transform: rotate(-45deg);
}

/* :checked擬似クラスセレクタ → ラジオボタンがonの状態を指す */
/* アコーディオンが開いた時のタグ処理 */
.accordion3_open:checked ~ .accordion3_tab {
  animation: tab_height 0.4s ease;
  /* 対象は実行の最後のキーフレームで設計された計算値を保持 */
  /* keyframes 100%の時点のheightで確定 */
  animation-fill-mode: forwards;
}
@keyframes tab_height {
  0% {
    height: 26px;
  }
  /* タブの高さを広げて文字色変更 */
  100% {
    height: 32px;
    color: #fff;
  }
}
/* CLOSEボタンが押された時のタグ処理 */
.accordion3_close:checked ~ .accordion3_tab {
  height: 32px; /* クリックされた最初の高さは指定しておく */
  animation: tab_reverse 0.3s 0.3s ease;
  animation-fill-mode: forwards;
  color: #fff;
}
@keyframes tab_reverse {
  0% {
    height: 32px;
    color: #fff;
  }
  100% {
    height: 24px;
    color: #fff;
  }
}
.accordion3_open:checked ~ .accordion3_tab::before {
  animation: tab_traiangle 0.3s ease;
  animation-fill-mode: forwards;
}
@keyframes tab_traiangle {
  0% {
    right: -16px;
    border-top: solid 21px transparent;
  }
  100% {
    right: -18px;
    border-top: solid 27px transparent;
  }
}
.accordion3_close:checked ~ .accordion3_tab::before {
  right: -18px;
  border-top: solid 26px transparent;
  animation: tab_triangle_reverse 0.3s 0.3s ease;
  animation-fill-mode: forwards;
}
@keyframes tab_triangle_reverse {
  0% {
    right: -18px;
    border-top: solid 26px transparent;
  }
  100% {
    right: -16px;
    border-top: solid 20px transparent;
  }
}
.accordion3_open:checked ~ .accordion3_wrapper {
  cursor: default;
}
.accordion3_open:checked ~ .accordion3_wrapper .accordion3_patition {
  margin-bottom: 10px;
  animation: title_top 0.1s ease;
  animation-fill-mode: forwards;
}
@keyframes title_top {
  0% {
    padding-top: 0;
    margin-bottom: 0;
  }
  100% {
    padding-top: 50px;
    margin-bottom: 24px;
  }
}
.accordion3_close:checked ~ .accordion3_wrapper .accordion3_patition {
  padding-top: 64px;
  margin-bottom: 24px;
  animation: title_top_reverse 0.3s 0.5s ease;
  animation-fill-mode: forwards;
}
@keyframes title_top_reverse {
  0% {
    padding-top: 64px;
    margin-bottom: 24px;
  }
  100% {
    padding-top: 0;
    margin-bottom: 0;
  }
}
.accordion3_open:checked ~ .accordion3_wrapper .accordion3_number {
  animation: rotate 0.5s linear;
  animation-fill-mode: forwards;
}
@keyframes rotate {
  0% {
    transform: rotateY(0deg) scale(1);
    width: auto;
  }
  20% {
    transform: rotateY(360deg) scale(1.6);
    font-size: 56px;
    height: 56px;
  }
  60% {
    transform: rotateY(360deg) scale(1.6);
  }
  70% {
    transform: rotateY(360deg) scale(1);
    width: auto;
  }
  84% {
    transform: rotateY(360deg) scale(1);
    width: auto;
  }
  85% {
    transform: rotateY(360deg) scale(1);
    width: 100%;
  }
  100% {
    transform: rotateY(360deg) scale(1);
    width: 100%;
    font-size: 56px;
    height: 56px;
  }
}
.accordion3_close:checked ~ .accordion3_wrapper .accordion3_number {
  font-size: 56px;
  height: 56px;
  animation: rotate_rev 0.2s 0.5s linear;
  animation-fill-mode: forwards;
}
@keyframes rotate_rev {
  0% {
    font-size: 56px;
    height: 56px;
  }
  100% {
    font-size: 40px;
    height: 40px;
  }
}
.accordion3_open:checked ~ .accordion3_wrapper .accordion3_number::before {
  animation: num_line 0.3s 0.9s ease;
  animation-fill-mode: forwards;
}
@keyframes num_line {
  0% {
    width: 0;
  }
  100% {
    width: 5px;
  }
}
.accordion3_close:checked ~ .accordion3_wrapper .accordion3_number::before {
  animation: num_line_rev 0.3s ease;
  animation-fill-mode: forwards;
}
@keyframes num_line_rev {
  0% {
    width: 5px;
  }
  100% {
    width: 0;
  }
}
.accordion3_open:checked ~ .accordion3_wrapper .accordion3_number::after {
  animation: num_text 0.7s 1s ease;
  animation-fill-mode: forwards;
}
@keyframes num_text {
  0% {
    width: 0;
  }
  100% {
    width: 80px;
  }
}
.accordion3_close:checked ~ .accordion3_wrapper .accordion3_number::after {
  animation: num_text_rev 0.3s ease;
  animation-fill-mode: forwards;
}
@keyframes num_text_rev {
  0% {
    width: 80px;
  }
  100% {
    width: 0;
  }
}
.accordion3_open:checked ~ .accordion3_wrapper .accordion3_title {
  animation: title_space 0.5s 0.5s ease;
  animation-fill-mode: forwards;
}
@keyframes title_space {
  0% {
    padding-left: 56px;
  }
  100% {
    padding-left: 0;
  }
}
.accordion3_close:checked ~ .accordion3_wrapper .accordion3_title {
  padding-left: 0;
  animation: title_space_rev 0.3s 0.3s ease;
  animation-fill-mode: forwards;
}
@keyframes title_space_rev {
  0% {
    padding-left: 0;
  }
  100% {
    padding-left: 56px;
  }
}
.accordion3_open:checked ~ .accordion3_wrapper .accordion3_title::before {
  animation: title_line 0.5s 0.9s ease;
  animation-fill-mode: forwards;
}
@keyframes title_line {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
.accordion3_close:checked ~ .accordion3_wrapper .accordion3_title::before {
  animation: title_line_rev 0.3s ease;
  animation-fill-mode: forwards;
}
@keyframes title_line_rev {
  0% {
    width: 100%;
  }
  100% {
    width: 0;
  }
}

.accordion3_open:checked ~ .accordion3_wrapper .accordion3_text {
  max-height: 200px;
  animation: text_color 0.8s 0.9s ease;
  animation-fill-mode: forwards;
}
@keyframes text_color {
  0% {
    color: transparent;
  }
  49.9% {
    color: transparent;
  }
  50% {
    color: #443849;
  }
  100% {
    color: #443849;
  }
}
.accordion3_close:checked ~ .accordion3_wrapper .accordion3_text {
  animation: text_color_rev 0.3s ease;
  animation-fill-mode: forwards;
}
@keyframes text_color_rev {
  0% {
    color: #443849;
  }
  100% {
    color: transparent;
  }
}
.accordion3_open:checked ~ .accordion3_wrapper .accordion3_text::before {
  animation: text_blind 0.8s 0.9s ease;
  animation-fill-mode: forwards;
}
@keyframes text_blind {
  0% {
    width: 0;
    left: 0;
    right: auto;
  }
  45% {
    width: 100%;
    left: 0;
    right: auto;
  }
  49.9% {
    width: 100%;
    left: 0;
    right: auto;
  }
  50% {
    width: 100%;
    left: auto;
    right: 0;
  }
  55% {
    width: 100%;
    left: auto;
    right: 0;
  }
  100% {
    width: 0;
    left: auto;
    right: 0;
  }
}
.accordion3_open:checked ~ .accordion3_button {
  animation: close_button 0.5s 0.9s ease-out;
  animation-fill-mode: forwards;
}
@keyframes close_button {
  0% {
    width: 0;
  }
  100% {
    width: calc(100% - 24px - 4px);
  }
}
.accordion3_close:checked ~ .accordion3_button {
  animation: close_button_rev 0.3s ease-in;
  animation-fill-mode: forwards;
}
@keyframes close_button_rev {
  0% {
    width: calc(100% - 24px - 4px);
  }
  100% {
    width: 0;
  }
}
</style>

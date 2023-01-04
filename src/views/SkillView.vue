<template>
  <div id="skills_container">
    <section id="title"><h1>Skills</h1></section>

    <div class="skills_gallery_container">
      <h3
        class="sub_title"
        style="color: rgb(245, 245, 245); background-color: #2c74b3"
      >
        言語
      </h3>
      <div class="first_row">
        <div class="skill_box" style="background-color: #eafdfc">
          <div class="ring">HTML&CSS</div>
        </div>
        <div class="skill_box" style="background-color: #bfeaf5">
          <div class="ring">javaScript</div>
        </div>
        <div class="skill_box" style="background-color: #91d8e4">
          <div class="ring">Python</div>
        </div>
        <div class="skill_box" style="background-color: #82aae3">
          <div class="ring">PHP</div>
        </div>
      </div>

      <div class="second_row">
        <div class="skill_box" style="background-color: #00657a">
          <div class="ring" style="color: rgb(255, 255, 255)">Java</div>
        </div>
        <div class="skill_box" style="background-color: #008590">
          <div class="ring" style="color: rgb(255, 255, 255)">Ruby</div>
        </div>
        <div class="skill_box" style="background-color: #00a495">
          <div class="ring" style="color: rgb(255, 255, 255)">Swift</div>
        </div>
        <div class="skill_box" style="background-color: #00c287">
          <div class="ring" style="color: rgb(255, 255, 255)">C言語</div>
        </div>
      </div>

      <h3
        class="sub_title"
        style="color: rgb(245, 245, 245); background-color: #ce7bb0"
      >
        ライブラリ・フレームワーク
      </h3>
      <div class="third_row">
        <div class="skill_box" style="background-color: #ebc7e8">
          <div class="ring">Django</div>
        </div>
        <div class="skill_box" style="background-color: #bface0">
          <div class="ring">ReactNative</div>
        </div>
        <div class="skill_box" style="background-color: #a084ca">
          <div class="ring" style="color: rgb(245, 245, 245)">OpenCV</div>
        </div>
        <div class="skill_box" style="background-color: #645caa">
          <div class="ring" style="color: rgb(255, 255, 255)">OpenGL</div>
        </div>
      </div>
      <h3
        class="sub_title"
        style="color: rgb(33, 33, 33); background-color: #f1f7b5"
      >
        その他
      </h3>
      <div class="forth_row">
        <div class="skill_box">
          <div class="ring" style="color: rgb(215, 215, 215)">Unity</div>
        </div>
        <div class="skill_box">
          <div class="ring" style="color: rgb(215, 215, 215)">PhotoShop</div>
        </div>
        <div class="skill_box">
          <div class="ring" style="color: rgb(215, 215, 215)">Illustrator</div>
        </div>
        <div class="skill_box">
          <div class="ring" style="color: rgb(215, 215, 215)">Animate</div>
        </div>
      </div>
      <div class="forth_row">
        <div class="skill_box">
          <div class="ring" style="color: rgb(215, 215, 215)">PremirePro</div>
        </div>
        <div class="skill_box">
          <div class="ring" style="color: rgb(215, 215, 215)">AffterEffect</div>
        </div>
        <div class="skill_box">
          <div class="ring" style="color: rgb(215, 215, 215)">Arduino</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  /* 要素からはみ出してしまうのを解決してくれる */
  /* paddingとborderを幅と高さにふくめてくれる */
  /* レスポンシブデザインで必要 */
  box-sizing: border-box;
  font-family: "M PLUS Rounded 1c", sans-serif;
}

/* 画像の初期設定 */
img {
  /* 画像のはみ出しの調整 */
  max-width: 100%;
  height: auto;
  /* 画像と多要素との間の隙間を無くす対策 */
  vertical-align: bottom;
}
a {
  text-decoration: none;
  color: rgb(255, 255, 255);
}
a:hover {
  color: rgb(179, 205, 9);
}
li {
  list-style: none;
}

#title {
  width: 9rem;
  margin: 1.5rem 0 0 4rem;
  border-bottom: 1px solid rgb(12, 10, 10);
}

.main_title {
  border-bottom: 0.5rem solid white;
}

.sub_title {
  margin-top: 4rem;
  position: relative;
  padding: 1rem 2rem calc(1rem + 10px);
  background: #fff100;
}

.sub_title:before {
  position: absolute;
  top: -10px;
  left: -10px;
  width: 100%;
  height: 100%;
  content: "";
  border: 4px solid rgb(33, 33, 33);
}

.skills_gallery_container {
  display: flex;
  flex-direction: column;
  margin: 1rem 6rem 6rem;
  text-align: center;
}

.first_row,
.second_row,
.third_row,
.forth_row {
  display: flex;
  justify-content: space-around;
}

.skill_box {
  background-color: rgb(61, 61, 63);
  width: 12.5rem;
  height: 15rem;
  margin: 2rem;

  border-radius: 1.5rem;
  box-shadow: 3px 5px 16px -2px #5e6362;
}

.skill_box > h2 {
  display: inline-block;
  margin-bottom: 6rem;
}

.ring {
  color: #434345;
  position: absolute;
  margin-top: 1.5rem;
  margin-left: 0.5rem;
  width: 180px;
  height: 180px;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 190px;
  -webkit-font-smoothing: antialiased;
}
.ring:before,
.ring:after {
  content: "";
  border-radius: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-origin: center center;
}
.ring:before {
  box-shadow: inset 0 11.25px 0 rgba(245, 24, 193, 0.8),
    inset 11.25px 0 0 rgba(250, 200, 0, 0.8),
    inset 0 -11.25px 0 rgba(250, 150, 0, 0.8),
    inset -11.25px 0 0 rgba(250, 100, 0, 0.8);
}

.ring:hover:before {
  animation: rotate 3.5s linear infinite;
}

.ring:after {
  box-shadow: inset 0 11.25px 0 rgba(0, 250, 250, 0.8),
    inset 11.25px 0 0 rgba(0, 200, 200, 0.8),
    inset 0 -11.25px 0 rgba(9, 108, 141, 0.8),
    inset -11.25px 0 0 rgba(70, 201, 234, 0.8);
}

.ring:hover:after {
  animation: rotateZ 3.5s linear infinite; /* アニメーション3.5sで回転 */
}

@keyframes rotate {
  0% {
    transform: rotateZ(0deg) scaleX(1) scaleY(1);
  }
  50% {
    transform: rotateZ(180deg) scaleX(0.82) scaleY(0.95);
  }
  100% {
    transform: rotateZ(360deg) scaleX(1) scaleY(1);
  }
}
@keyframes rotateZ {
  0% {
    transform: rotateZ(0deg) scaleX(1) scaleY(1);
  }
  50% {
    transform: rotateZ(-180deg) scaleX(0.95) scaleY(0.85);
  }
  100% {
    transform: rotateZ(-360deg) scaleX(1) scaleY(1);
  }
}
</style>

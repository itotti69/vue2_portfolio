<template>
  <div id="app">
    <!-- ヘッダー -->
    <header class="header-main" id="background-1">
      <h1>
        <!-- タイトルを押すとサイトのTOPに戻る -->
        <a href="#" class="logo-link">KAZU</a>
      </h1>

      <!-- ナビゲーションメニュー -->
      <nav class="nav-menu-top">
        <ul>
          <li class="now">
            <router-link id="router" to="/">Home</router-link>
          </li>
          <li>
            <!-- Profile -->
            <router-link id="router" to="/profile">Profile</router-link>
          </li>
          <li>
            <!-- Skills -->
            <router-link id="router" to="/skills">Skills</router-link>
          </li>
          <!-- <li>
            <router-link id="router" to="/gallery">Gallery</router-link>
          </li> -->
        </ul>
      </nav>
    </header>
    <router-view />
    <!-- フッター -->
    <footer>
      <h1>KAZU</h1>
      <nav>
        <ul class="footer_list">
          <li><router-link id="router" to="/">Home</router-link></li>
          <li><router-link id="router" to="/profile">Profile</router-link></li>
          <li><router-link id="router" to="/skills">Skills</router-link></li>
        </ul>
      </nav>
      <small>©2020-2022 Kazuki Ito</small>
    </footer>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

#background-1 {
  background-image: url("../images/aurora_2.jpg");
}

.header-main {
  height: 10vh;
  max-width: 100%;
  padding: 0 1.2rem;
  display: flex;
  align-items: center;
  position: relative;
  color: rgb(189, 197, 224);
}

.logo-link {
  /*波紋の基点とするためrelativeを指定*/
  position: relative;
  /*リンクの形状*/
  display: inline-block;
  text-decoration: none;
  outline: none;
  color: white;
}

/*波形の設定*/
.logo-link:hover::before {
  height: 78px;
  width: 78px;
  content: "";
  /*絶対配置で波形の位置を決める*/
  position: absolute;
  top: 0;
  left: 30%;
  /*波形の形状*/
  border: 10px solid rgb(13, 218, 245);
  border-radius: 50%;
  opacity: 1;
  animation: 1s circleanime forwards;
}

.logo-link:active {
  position: relative;
  top: 4px;
}

/*波形が広がるアニメーション*/
@keyframes circleanime {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(3);
    opacity: 0;
  }
}

.header-main {
  display: flex;
  justify-content: space-between; /* 子要素を両端に配置 */
}

.header-main ul {
  margin-left: 300px;
  display: flex;
  align-items: right;
  list-style: none;
}

.header-main ul li {
  margin-left: 1.2rem;
  font-size: 1.2rem;
}

.header-main ul li a {
  text-decoration: none;
  display: inline-block;
  position: relative;
  overflow: hidden;
  color: #fff;
}

.header-main ul li a::after {
  content: "";
  height: 1px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: cyan;
  transform: translate(-100%, 0);
  transition: transform cubic-bezier(0.215, 0.61, 0.355, 1) 0.4s;
}

/*現在地とhoverの設定*/
.header-main ul li a:hover::after {
  transform: scale(1, 1);
  /*xは１に設定（２に設定すると、隣まで影響を受ける）*/
}

.header-main ul li a:active {
  position: relative;
  top: 0.4rem; /* リンクをクリックした時にどれだけ押し下がるかの設定 */
}

/*fadeOutクラスが付与された後のボタンの出現アニメーション設定*/
.fadeOut {
  animation-name: fadeDownAnime;
  animation-duration: 0.7s;
  animation-fill-mode: forwards;
  opacity: 0;
  display: block;
}

@keyframes fadeDownAnime {
  from {
    opacity: 0;
    transform: translateY(-100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

footer {
  padding: 1.5rem 0 0.7rem 0;
  font-size: 1.4rem;
  text-align: center;
  justify-items: center;
  align-items: center;
  background-color: rgb(5, 101, 131);
  color: white;
}

footer ul {
  height: 2rem;
  margin: 0.5rem 0;
}

footer li {
  height: 2rem;
}

footer span {
  margin: 0 6rem;
}

.footer_list {
  /* width: 60rem; */
  display: flex;
  justify-content: center;
  gap: 5.5rem;
}
</style>

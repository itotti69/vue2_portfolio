<template>
  <div id="gallery_container">
    ギャラリーページ
    <input
      id="gallery_searchbar"
      type="text"
      placeholder="ギャラリーを検索"
      @input="UpdateCards"
      v-model="search_text"
    />
    <a href="/profile">helloPage</a>
    <div id="galleries">
      <div class="card" v-for="card in disp_cards" :key="card.id">
        <div class="card_title">
          {{ card.title }}
        </div>
        <div class="card_description">
          {{ card.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search_text: "",
      disp_cards: [],
      cards: [
        {
          title: "成果１",
          description: "成果１の説明",
        },
      ],
    };
  },
  created() {
    this.UpdateCards();
  },
  methods: {
    UpdateCards() {
      this.disp_cards = [];
      if (this.search_text != "") {
        for (let Target_Key in this.cards) {
          if (
            this.cards[Target_Key].title.indexOf(this.search_text) > -1 ||
            this.cards[Target_Key].description.indexOf(this.search_text) > -1
          ) {
            this.disp_cards.push(this.cards[Target_Key]);
          }
        }
      } else {
        this.disp_cards = this.cards;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#gallery_container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  #gallery_searchbar {
    width: 600px;
    height: 40px;
    padding: 0 30px;
    margin: 20px 0;
    border: 1px solid #aaa;
    border-radius: 999px;
    outline: none;
  }
  @media screen and (max-width: 400px) {
    #gallery_searchbar {
      width: 300px;
      height: 40px;
      padding: 0 10px;
      margin: 10px 0;
    }
  }
  #galleries {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .card {
      width: 250px;
      height: 300px;
      border-radius: 10px;
      box-shadow: 0px 2px 8px -4px #777777;
      margin: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      .card_img {
        width: 100%;
        height: 250px;
        border-radius: 10px 10px 0 0;
      }
      .card_description {
        background-color: #fff;
        width: 100%;
        height: 250px;
        padding: 10px;
        margin-bottom: 50px;
        font-size: 15px;
        font-weight: 900;
        position: absolute;
        opacity: 0;
        transition: 0.3s;
        &:hover {
          opacity: 1;
          background-color: rgba($color: #fff, $alpha: 0.9);
        }
      }
      .card_title {
        width: 100%;
        height: 50px;
        font-size: 17px;
        font-weight: 900;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>

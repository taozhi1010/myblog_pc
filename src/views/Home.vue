<template>
  <div class="home">
    <div class="banner">
      <div class="container center">
        <img src="//q.qlogo.cn/g?b=qq&nk=1786128750&s=160" />
        <p>Just Do It !</p>
        <ul>
          <li>
            <img src="https://jensonhui.top/usr/themes/Akina/images/sina.png" />
          </li>
          <li>
            <img
              src="https://jensonhui.top/usr/themes/Akina/images/github.png"
            />
          </li>
          <li>
            <img src="" alt="" />
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <a-list :data-source="data">
        <a-list-item
          slot="renderItem"
          slot-scope="item"
          :description="item"
          :name="item"
        >
          <a-list-item-meta :description="item">
            <a slot="title" :href="item">{{ item }}</a>
            <a-avatar
              slot="avatar"
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
          </a-list-item-meta>
          <div>Content</div>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: "Home",
  data() {
    return {
      data: [],
    };
  },
  components: {},
  created() {
    for (let index = 0; index < 1000; index++) {
      this.data.push(index);
    }
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
}
.banner {
  width: 100%;
  height: 500px;
  background-color: #ccc;
  .center {
    padding-top: 100px;
    > img {
      width: 70px;
      height: 70px;
      background-color: #fff;
      border-radius: 50%;
      display: block;
      margin: 0 auto;
      margin-bottom: 30px;
    }
    > p {
      width: 500px;
      height: 80px;
      background-color: #9d9d9d;
      margin: 0 auto;
      text-align: center;
      line-height: 80px;
      margin-bottom: 20px;
    }
    > ul {
      display: inline-block;
      > li {
        float: left;
        width: 30px;
        height: 30px;
        background-color: #fff;
        margin: 0 5px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
.container {
  width: 500px;
  margin: 0 auto;
}
.avatar {
  width: 50px;
  height: 50px;
}
</style>

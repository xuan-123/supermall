<template>
    <div>
        <tab-bar class="item">
        <tab-bar-item  path="/home">
          <img  slot="item_icon" src="~assets/img/tabbar/tab_home_nor.png" alt="">
          <img slot="item_icon2" src="~assets/img/tabbar/tab_home_hig.png" alt="">
        <div slot = "item_text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/cate">
          <img slot="item_icon" src="~assets/img/tabbar/tab_menu_nor.png" alt="">
          <img slot="item_icon2" src="~assets/img/tabbar/tab_menu_hig.png" alt="">
        <div slot = "item_text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/car">
          <img slot="item_icon" src="~assets/img/tabbar/tab_shopping_nor.png" alt="">
          <img slot="item_icon2" src="~assets/img/tabbar/tab_shopping_hig.png" alt="">
        <div slot = "item_text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/me">
          <img slot="item_icon" src="~assets/img/tabbar/tab_me_nor.png" alt="">
          <img slot="item_icon2" src="~assets/img/tabbar/tab_me_hig.png" alt="">
        <div slot = "item_text">我的</div>
        </tab-bar-item>
    </tab-bar>
    </div>
</template>

<script>
import TabBar from 'common/tabbar/Tabbar'
import TabBarItem from 'common/tabbar/TabBarItem'
export default {
    name:'Maintabbar',
    components:{
    TabBar,TabBarItem
  }
}
</script>

<style>
.item img{
  margin-top: 10px;
}
</style>
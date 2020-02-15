<template>
    <div class="home">
        <nav-bar class="home-nav">
            <div slot='center'>购物车</div>
        </nav-bar>
        <scroll-bar class="content">
            <!-- 轮播图模块 -->
            <home-swiper :banners='banners' ></home-swiper>
            <!-- 推荐列表 -->
            <home-recommend :recommends='recommends' ></home-recommend>
            <!-- 特殊 -->
            <home-feature></home-feature>
            <!-- 三题bar -->
            <tab-control class="tab-control" :titles="['流行','新款','精选']"
            @tabClick='tabClicks'/>
            <good-lists :goods="goods[currentGood].list"></good-lists>
    </scroll-bar>
        
        
        
    </div>
</template>

<script>
//顶部bar
import NavBar from 'common/navbar/NavBar'
//首页轮播图组件
import HomeSwiper from './childComps/HomeSwiper'
//推荐列表
import HomeRecommend from './childComps/HomeRecommend'
//特点
import HomeFeature from './childComps/HomeFeature'
//三题bar
import TabControl from 'content/tabControl/TabControl'
import GoodLists from 'content/goods/GoodLists'
//scroll
import ScrollBar from 'common/scroll/Scroll'
import {getHomeMultidata,getHomeGoods} from 'network/home'
export default {
    name:"home",
    components:{
        NavBar,HomeSwiper,HomeRecommend,HomeFeature,TabControl,
        GoodLists,ScrollBar
    },
    data(){
        return {
            //轮播
             banners:[],
             //推荐
            recommends:[],
            //三题bar
            goods:{
                'pop':{page:0,list:[]},
                'new':{page:0,list:[]},
                'sell':{page:0,list:[]},
            },
            currentGood:'pop'
        }
    },
    created(){
        //轮播图和推荐
        this.getHomeMultidata()
        //三题数据
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
    },
    methods:{
        /**
         * 方法函数
         */
        tabClicks(index){
            console.log(index)
           switch(index){
               case 0:
                   this.currentGood='pop'
                   break
                case 1:
                    this.currentGood='new'
                    break
                case 2:
                    this.currentGood= 'sell'
           }
        },
        /**
         * 网络请求数据
         */
        //轮播图和推荐
        getHomeMultidata(){
            getHomeMultidata().then(res=>{
                console.log(res)
                this.banners = res.data.banner.list
                this.recommends = res.data.recommend.list
        })
        },
        //三题数据
        getHomeGoods(type){
            const page = this.goods[type].page+1
            getHomeGoods(type,page).then(res=>{
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page+1
        })
        
        }
        

    }
}
</script>

<style scoped>
.home{
    padding-top: 44px;
}
.home-nav{
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left:0;
    right:0;
    top:0;
    z-index: 99;
}
.tab-control{
    background-color: #fff;
    position:sticky;
    top: 44px;
}
.content{
    overflow: hidden;
    position: absolute;
    top:44px;
    bottom:49px;
    left: 0;
    right: 0;
}
</style>
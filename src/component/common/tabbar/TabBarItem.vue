<template>
    <div class="tabbar_item" @click="itemClick">
        <div  v-if="!isActive"><slot name = "item_icon"></slot></div>
        <div v-else><slot name = "item_icon2"></slot></div>
        <div  :class="{active:isActive}">
            <slot  name = "item_text"></slot>
        </div>
        </div>
</template>

<script>
export default {
    props:{
        path:String
    },
    data(){
    return {
    //   isActive:true,
    }
  },
    computed:{
        //通过计算属性动态绑定isActive是true还是false，看当前路由是否与当前活跃的路由的path相合
        isActive(){
            return this.$route.path.indexOf(this.path)!==-1
        }
    },
    methods:{
        itemClick(){
            this.$router.replace(this.path)
        }
    }
}
</script>

<style>
    .active{
        color: orange;
    }
    .tabbar_item{
    
    text-align: center;
    height: 49px;
    flex:1
  }
  .tabbar_item img{
      vertical-align: middle;
      margin-top: 3px;
  }
 
</style>
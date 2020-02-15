<template>
    <div class="goods">
        <goods-item  :goodsItem="item" v-for="(item,index) in goods" :key="index"/>
    </div>
</template>

<script>
import GoodsItem from 'content/goods/GoodsItem'
export default {
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        GoodsItem
    }
}
</script>

<style scoped>
.goods{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-items: auto
}
</style>
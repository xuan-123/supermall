<template>
  <swiper>
            <swiper-item v-for="item of banners" :key="item.link">
                <a href="#">
                    <img :src="item.image" alt="">
                </a>
            </swiper-item>
        </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'common/swiper/index.js'

export default {
    props:{
banners:{
    type:Array,
    default(){
        return []
    }
}
    },
    components:{
        Swiper,SwiperItem
    },
}
</script>

<style>

</style>
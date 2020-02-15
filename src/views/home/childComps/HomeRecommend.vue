<template>
    <div class="recommend">
        <div v-for='(item,index) in recommends' :key="index" class="recommendItem">
            <a href="#">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scpoed>
.recommend{
    padding: 15px;
    display: flex;
    
    border-bottom: 8px solid #f6f6f6;
}
.recommendItem{
    font-size: 12px;
    text-align: center;
    flex:1
}
.recommendItem img{
    
    margin-bottom: 10px;
    width: 70px;
    height: 70px;
}
</style>
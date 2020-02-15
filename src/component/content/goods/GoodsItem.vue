 <template>
    <div class="goodsitem">
        <img :src="goodsItem.show.img" alt="">
        <div>
            <p>{{goodsItem.title}}</p>
            <span class="price">{{goodsItem.price}}</span>
            <span class="collect">{{goodsItem.cfav}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        goodsItem:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style scoped>
.goodsitem{
    width: 48%;
    font-size: 12px;
     margin: 3px;
     margin-bottom: 10px;
}
.goodsitem img{
    border-radius: 5px;
    width: 100%;
    height: 200px;
}
.goodsitem p{
    height: 20px;
    line-height: 1.5;
    text-overflow: ellipsis;
    white-space:nowrap;
    overflow: hidden;
}
.goodsitem .price{
    color: var(--color-high-text);
    margin-right: 20px;
}
</style>
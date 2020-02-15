 <template>
  <div class="tabcontrol">
      <div v-for="(item,index) in titles" :key="item" class="tabcontrol-item" :class="{active:index===curent}" @click='itemClick(index)'>
          <span >{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            curent:0
        }
    },
    methods:{
        itemClick(index){
            this.curent = index;
            this.$emit('tabClick',index)
        }
    }
}
</script>

<style scoped>
.tabcontrol{
    display:flex;
    font-size: 15px;
}
.tabcontrol-item{
    flex:1;
    text-align: center;
    height: 40px;
    line-height: 40px;
}
.active{
    color: var(--color-high-text);
   
}
.active span{
    padding: 5px;
    border-bottom: 3px solid var(--color-high-text)
}

</style>
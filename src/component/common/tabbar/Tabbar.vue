<template>
   <div id="tab_bar">
       <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
 #tab_bar{
    
    position: fixed;
    left: 0;
    right: 0;
    bottom:0;
    box-shadow: 0 -1px 1px rgba(0,0,0,0.1);
    background-color: #f6f6f6;
    display: flex;
    font-size: 14px;
  }
</style>
<template>
    <header>
        <h1>
            <img :src="logoimg" alt="">
        </h1>
        <div class="search">
            <img :src="search" alt="">
            <span>你喜歡什麼？</span>
        </div>
        <div class="unread">
            <img :src="unread" alt="">
        </div>
    </header>
</template>

<script>
export default {

    data(){
        return{
            logoimg:require('@/assets/images/logo.png'),
            unread:require('@/assets/images/unread.png'),
            search:require('@/assets/images/search.svg')
        }
    }
}
</script>

<style scoped>

header{
    display: flex;
    justify-content: space-around;
    position: fixed;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 1.73333rem;
    background-color: #b0352f;
}

header h1{
    width: 100px;
    height: 40px;
}

header h1 img{
    width: 100%;
    height: 100%;
}

.search{
    display: flex;
    align-items: center;
    width: 246px;
    height: 0.8rem;
    background-color: #fff;
    border-radius: 12px; 
}

.search img{
    padding: 12px ;
}

.search span{
    color: #ccc;
}

.unread img{
    width:0.6rem;
    color:#fff;
    margin: 0.3rem;
}



</style>
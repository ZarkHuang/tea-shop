

<template>
    <div class="tabbar">
        <ul>
            <li v-for='(item,index) in routerList'
                :key='index'
                @click="switchTab(item.path)"
            >

            <!-- {$route.path.includes( item.path) ? item.seleted : item.acitve }} -->
            <!-- includes() 方法會判斷陣列是否包含特定的元素，並以此來回傳 true 或 false。 -->

            <img :src="$route.path.includes(item.path) ? item.selected : item.active " alt="">
            <span :class="$route.path.includes(item.path) ? 'active' : '' ">{{item.title}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            routerList:[
                {
                    title:'首頁',
                    path:'/home',
                    active:'./images/home.png',
                    selected:'./images/home-select.png'
                },
                {
                    title:'分類',
                    path:'/list',
                    active:'./images/list.png',
                    selected:'./images/list-select.png'
                },
                {
                    title:'購物車',
                    path:'/cart',
                    active:'./images/cart.png',
                    selected:'./images/cart-select.png'
                },
                {
                    title:'我的',
                    path:'/mine',
                    active:'./images/my.png',
                    selected:'./images/my-select.png'
                }
            ]
        }
        },
        methods:{
            switchTab( path ){
                //onlick函數，實現點擊跳轉
                if(this.$route.path == path) return;
                //判斷是否為通一個路由，若相同就跳。避免重複路由報錯。
                //$route當前這個路徑
                this.$router.replace( path );
                //repalce 跟router.push很像，唯一不同是，它不會向history添加新記錄，而是跟它的方法名一樣替換掉當前的history記錄。
            }  
        }
    }

</script>

<style scoped>

.tabbar{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1.6rem ; 
    z-index: 999;
    background-color: #fff;
}

.tabbar ul{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
}

.tabbar ul li{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.tabbar ul li img{
    width: 0.8266666rem;
    height:0.8266666rem;
}

.tabbar ul li span{
    font-size: 0.373333rem ;
    text-align: center;
}

.active{
    color: red;
}

</style>
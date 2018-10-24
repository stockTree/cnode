<template>
    <div id="header">
        <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg">
        <ul class="clearFix">
            <li><a href="#"></a>首页</li>
            <li><a href="#"></a>新手入门</li>
            <li><a href="#"></a>API</li>
            <li><a href="#"></a>关于</li>
            <li><a href="#"></a>登录</li>
        </ul> 

    </div>
</template>

<script>

export default {
    name:'Header'
}
</script>

<style scoped>

#header{
    background:#444;
    padding:9px 57px;
}
img{
    width:120px;
    
}
ul{
    float:right;
    list-style: none;
    margin:0;
    padding:0;
    padding-top: 5px
}
.clearFix::after{
    display: block;
    content:'';
    clear:both;
} 
ul>li{
    float:left;
    margin-left:30px;
    color:#ccc;
    font-size: 13px;
}
ul>li:last-child{
    margin-right: 15px
}
</style>



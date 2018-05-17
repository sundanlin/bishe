/**
 * Created by leeou on 2018/5/12.
 */

//顶部按钮点击方法，注册登录购物车
function clickSignInBtn(){
    // alert("点击了登录按钮");
}    
function clickSignUpBtn(){
    // alert("点击了注册按钮");
}
function goShopping() {
    window.location.href = 'order.html';
}
//导航栏点击方法
function clickNavigation(num) {
    var html = '';
    switch (num){
        case 1:
            window.location.href = 'index.html';
            break;
        case 2:
            window.location.href = 'product.html';
            break;
        case 3:
            window.location.href = 'product.html';
            break;
        case 4:
            window.location.href = 'product.html';
            break;
        case 5:
            window.location.href = 'culture.html';
            break;
        case 6:
            window.location.href = 'product.html';
            break;
    }
}

//底部按钮点击方法
/*
显示二维码
 */
function showErweima() {
    document.getElementById("erweimaDiv").style.display = 'block';
}
/*
隐藏二维码
 */
function hideErweima() {
    document.getElementById("erweimaDiv").style.display = 'none';
}
/*
新手指南
 */
function newbieGuide(num) {
    switch (num){
        case 1:
            window.alert("购物流程");
            break;
        case 2:
            window.alert("会员尊享");
            break;
        case 3:
            window.alert("常见问题");
            break;
        case 4:
            window.alert("指圈测量");
            break;
    }
}
/*
售后服务
 */
function afterService(num) {
    switch (num){
        case 1:
            window.alert("退款说明");
            break;
        case 2:
            window.alert("保养物语");
            break;
    }
}
/*
物流配送
 */
function distribution(num) {
    switch (num){
        case 1:
            window.alert("配送方式");
            break;
        case 2:
            window.alert("配送服务");
            break;
    }
}
/*
关于我们
 */
function aboutUs(num) {
    switch (num){
        case 1:
            window.alert("品牌介绍");
            break;
        case 2:
            window.alert("渠道销售");
            break;
        case 3:
            window.alert("联系我们");
            break;
        case 4:
            window.alert("加入我们");
            break;
    }
}







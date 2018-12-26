
// vue 组件
if (typeof(Vue)!=='undefined') {
    
    // 通用头部
    Vue.component('curheader',{
        template: '<div class="curHeader">'+
                    '<div class="container clearfix">'+
                        '<img class="logo" src="../images/logo.png" alt="">'+
                        '<div class="userInfo clearfix">'+
                            '<img class="icon_inform pointer" src="../images/inform.png" alt="">'+
                            '<a href="javascript:;" class="clearfix fl relative p-b-10">'+
                                '<img class="userHead" src="../images/people.png" alt="">'+
                                '<span>阿夏夏</span>'+
                                '<img class="icon_down" src="../images/a-down.png" alt="">'+
                                '<button class="pointer" @click="goOut">退出登陆</button>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>',
        methods: {
            goOut: function () {
                console.log("退出登陆")
            }
        }
    })

    // 下拉
    Vue.component('select-ui',{
        props: ['list'],
        template: '<div class="selectBox">'+
                    '<slot></slot>'+
                    '<ul>'+
                        '<li @click="changeSelect()" v-for="item in list">{{item}}</li>'+
                    '</ul>'+
                '</div>',
        methods: {
            changeSelect: function () {
                
            }
        }
    })
}
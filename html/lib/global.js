
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
        data: function(){
            return {
                option: ''
            }
        },
        props: ['list'],
        template: '<div class="selectBox">'+
                    '<input  @focus="openList($event)" @blur="closeList($event)" type="text" readonly="readonly" v-model="option" placeholder="请选择">'+
                    '<ul>'+
                        '<li @click="changeSelect(item)" v-for="item in list">{{item}}</li>'+
                    '</ul>'+
                    '<img class="icon-select" src="../images/triangle.png"/>'+
                '</div>',
        methods: {
            changeSelect: function (item) {
                this.option = item
                this.$emit('enlarge-text', item)
            },
            openList: function (e) {
                $(e.target).next('ul').fadeIn(200);
                $(e.target).parent().find('.icon-select').addClass('selected')
            },
            closeList: function(e){
                $(e.target).next('ul').fadeOut(200);
                $(e.target).parent().find('.icon-select').removeClass('selected')
            }
        }
    })
}
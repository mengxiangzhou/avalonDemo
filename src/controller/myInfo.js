/**
 * Created by Administrator on 2015/9/23.
 */
define("my",["../mocks/json","zepto"],function(data){
    var myInfo = avalon.define({
        $id: 'myInfo',
        renameFunc:function(){
            location.href='#!/rename'
        },
        changeAddress:function(){
            location.href='#!/changeAddress'
        }
    })

    return avalon.controller(function ($ctrl) {
            // 进入视图 first
            $ctrl.$onEnter = function () {

            }
            // 视图渲染后，意思是avalon.scan完成 second
            $ctrl.$onRendered = function () {

            }
            // 对应的视图销毁前
            $ctrl.$onBeforeUnload = function () {

            }
        }
    )
})

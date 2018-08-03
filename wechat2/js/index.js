$(function(){

    //加号点击右键弹出小列表
    $("#title-right-plus").click(
        function(){
            $("#title-right-menu").toggle( )

        }
    )
    //点击menu，改变颜色

    // 点击微信
    $("#message-icon").click(
        function(){
            $("#message-icon").css({"background-image":"url(../icon/message-icon-press.svg)"})
            $("#message-text").css({"color":"rgb(82,169,54)"})
            $("#namebook-icon").css({"background-image":"url(../icon/namebook-icon.svg)"})
            $("#namebook-text").css({"color":"#bebebe"})
            $("#discovery-icon").css({"background-image":"url(../icon/discovery-icon.svg)"})
            $("#discovery-text").css({"color":"#bebebe"})
            $("#me-icon").css({"background-image":"url(../icon/me-icon.svg)"})
            $("#me-text").css({"color":"#bebebe"})
        }
    )
    //点击通讯录
    $("#namebook-icon").click(
        function(){
            $("#message-icon").css({"background-image":"url(../icon/message-icon.svg)"})
            $("#message-text").css({"color":"#bebebe"})
            $("#namebook-icon").css({"background-image":"url(../icon/namebook-icon-press.svg)"})
            $("#namebook-text").css({"color":"rgb(82,169,54)"})
            $("#discovery-icon").css({"background-image":"url(../icon/discovery-icon.svg)"})
            $("#discovery-text").css({"color":"#bebebe"})
            $("#me-icon").css({"background-image":"url(../icon/me-icon.svg)"})
            $("#me-text").css({"color":"#bebebe"})
        }
    )
    //点击发现

    $("#discovery-icon").click(
        function(){
            $("#message-icon").css({"background-image":"url(../icon/message-icon.svg)"})
            $("#message-text").css({"color":"#bebebe"})
            $("#namebook-icon").css({"background-image":"url(../icon/namebook-icon.svg)"})
            $("#namebook-text").css({"color":"#bebebe"})
            $("#discovery-icon").css({"background-image":"url(../icon/discovery-icon-press.svg)"})
            $("#discovery-text").css({"color":"rgb(82,169,54)"})
            $("#me-icon").css({"background-image":"url(../icon/me-icon.svg)"})
            $("#me-text").css({"color":"#bebebe"})
        }
    )
    //点击我
    $("#me-icon").click(
        function(){
            $("#message-icon").css({"background-image":"url(../icon/message-icon.svg)"})
            $("#message-text").css({"color":"#bebebe"})
            $("#namebook-icon").css({"background-image":"url(../icon/namebook-icon.svg)"})
            $("#namebook-text").css({"color":"#bebebe"})
            $("#discovery-icon").css({"background-image":"url(../icon/discovery-icon.svg)"})
            $("#discovery-text").css({"color":"#bebebe"})
            $("#me-icon").css({"background-image":"url(../icon/me-icon-press.svg)"})
            $("#me-text").css({"color":"rgb(82,169,54)"})
        }
    )

    //-----------------end
    }
)
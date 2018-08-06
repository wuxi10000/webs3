
$(function(){
    //朋友圈，滑出来
    $("#dynamic3-item-friendcircle-div").click(
        function(){
            // $("#dynamic3-firend-cicle-box").css({"display":"block"})
            $("#dynamic3-firend-cicle-box").css({"left":"0px"})

            //切换标题栏位
            $("#title").load("title-friend-circle.html")
        }
    )
    //
    // alert(1)
    // $("#friendcircle-button").click();
    //

    //点击全文/收起时
    $(".dynamic3-text-full-button").click(
        function(){
            if($(this).text()=="收起"){
                $(this).parent().parent().children(".dynamic3-text-div").css({"-webkit-line-clamp":"6"})
                $(this).text("全文")
            }else{
                $(this).parent().parent().children(".dynamic3-text-div").css({"-webkit-line-clamp":"99"})
                $(this).text("收起")
            }
        }
    )
    //


})
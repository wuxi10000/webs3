$(function(){
    setTimeout("", 2000);

    // $("#dynamic").load("dynamic2.html")
    // $("#title").load("title2.html")
    getDate();
    setInterval(getDate ,1000);
                 //得到时间并写入div
                function getDate(){
                        //获取当前时间
                        var date = new Date();
                        //格式化为本地时间格式
                        //  var date1 = date.toLocaleString();
                    // alert(date.getHours() )
                    // alert(date.getMinutes() )
                    // alert($("#signal-center"))
                    // alert(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds())
                    $("#signal-center").text(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());


                     }
                 //使用定时器每秒向div写入当前时间

    // getDate()
    // getDate()
    //改变标签页
    function loadpage(obj){
        $("#dynamic").load(obj.data("dynamicpage"))
        $("#title").load(obj.data("titlepage"))
    }

    function setpage1(pagestat){
        if(pagestat==1){
            $("#message-icon").css({"background-image":"url(../icon/message-icon-press.svg)"})
            $("#message-text").css({"color":"rgb(82,169,54)"})
        }else{
            $("#message-icon").css({"background-image":"url(../icon/message-icon.svg)"})
            $("#message-text").css({"color":"#bebebe"})
        }
    }
    function setpage2(pagestat){
        if(pagestat==1){
            $("#namebook-icon").css({"background-image":"url(../icon/namebook-icon-press.svg)"})
            $("#namebook-text").css({"color":"rgb(82,169,54)"})
        }else{
            $("#namebook-icon").css({"background-image":"url(../icon/namebook-icon.svg)"})
            $("#namebook-text").css({"color":"#bebebe"})
        }
    }

    function setpage3(pagestat){
        if(pagestat==1){
            $("#discovery-icon").css({"background-image":"url(../icon/discovery-icon-press.svg)"})
            $("#discovery-text").css({"color":"rgb(82,169,54)"})
        }else{
            $("#discovery-icon").css({"background-image":"url(../icon/discovery-icon.svg)"})
            $("#discovery-text").css({"color":"#bebebe"})
        }
    }

    function setpage4(pagestat){
        if(pagestat==1){
            $("#me-icon").css({"background-image":"url(../icon/me-icon-press.svg)"})
            $("#me-text").css({"color":"rgb(82,169,54)"})
        }else{
            $("#me-icon").css({"background-image":"url(../icon/me-icon.svg)"})
            $("#me-text").css({"color":"#bebebe"})
        }
    }

    //点击menu，改变颜色

    // 点击微信
    $("#message-icon").click(
        function(){
            setpage1(1)
            setpage2(0)
            setpage3(0)
            setpage4(0)
            loadpage($(this))
        }
    )


    //点击通讯录
    $("#namebook-icon").click(
        function(){
            setpage1(0)
            setpage2(1)
            setpage3(0)
            setpage4(0)
            loadpage($(this))
        }
    )
    //点击发现

    $("#discovery-icon").click(
        function(){
            setpage1(0)
            setpage2(0)
            setpage3(1)
            setpage4(0)
            loadpage($(this))
        }
    )
    //点击我
    $("#me-icon").click(
        function(){
            setpage1(0)
            setpage2(0)
            setpage3(0)
            setpage4(1)
            loadpage($(this))
        }
    )

    //打开页面直接点击我
    // alert($("#namebook-icon"))
    $("#message-icon").click();

    //-----------------end
    }
)
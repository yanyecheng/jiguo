$('.btn').click(function(){
    if($(this).attr('src') == '../imgs/xinRedo.png'){
        $(this).attr('src','../imgs/xinRedh.png');
    }else{
        $(this).attr('src','../imgs/xinRedo.png')
    }
})
$('.btn2').click(function(){
    console.log($('.bshare-custom').css('display'));
    if( $('.bshare-custom').css('display')=='block'){
        $(".bshare-custom").css("display","none");
    }else{
        $(".bshare-custom").css("display","block");
    }
    if($(this).attr('src') == '../imgs/share_yj1.png'){
        $(this).attr('src','../imgs/shareh_yj1.png');
    }else{
        $(this).attr('src','../imgs/share_yj1.png')
    }
})

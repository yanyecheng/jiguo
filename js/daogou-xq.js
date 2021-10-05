$('.btn').click(function(){
    if($(this).attr('src') == '../imgs/xinRedo.png'){
        $(this).attr('src','../imgs/xinRedh.png');
    }else{
        $(this).attr('src','../imgs/xinRedo.png')
    }
    $('.tex').css('color','rgb(254,130,117)')
})
$('.btn2').click(function(){
    if($(this).attr('src') == '../imgs/share_yj1.png'){
        $(this).attr('src','../imgs/shareh_yj1.png');
    }else{
        $(this).attr('src','../imgs/share_yj1.png')
    }
    $('.tex1').css('color','rgb(254,130,117)')
})
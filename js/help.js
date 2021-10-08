var ul_ = document.getElementsByClassName('qb-box')[0].getElementsByTagName("li").length;
console.log(ul_);
function fn(){
  var oajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
  oajax.open('get','http://192.168.1.32:3000/useing/public',true)
oajax.send() ;
oajax.onreadystatechange = function(){
 if(oajax.readyState == 4 ){
   if(oajax.status == 200){
    var a = eval('('+oajax.responseText+')')
    fn(a)
   }
 }
}
function fn(a){
  $(document).ready(function(){
    $('.qb-box li').click(function() {
       var url ="./use/spxq.html";   
       window.location.href = url; 
      });
});
    var html = template('first',{
        value:a
    });
    document.getElementsByClassName('qb-box')[1].innerHTML = html
    console.log(a[0].uName);
    var list = document.getElementsByClassName('bji')
    var list1 = document.getElementsByClassName('bji1')
    var span = document.getElementsByClassName('xr-sp')
    var span_ = document.getElementsByClassName('xr-sp2') 
    console.log(a[0].info_ty);
    for(var i = 0 ; i < a.length ; i++){
        if(a[i].uName == '苏亚'){
          span[i+ul_].innerHTML = '剩余时间2天'
        }
        if(a[i].uName == '长安'){
          span[i+ul_].innerHTML = '剩余时间2天'
        }
        if(a[i].uName == '爱猫'){
          span[i+ul_].innerHTML = '报告数量：8'
          span[i+ul_].classList.add("col-h")
          list[i].classList.add('col-h')
          list1[i].classList.add('col-h')
        }
        if(a[i].uName == '楠楠'){
          span[i+ul_].innerHTML = '报告数量：8'
          span[i+ul_].classList.add("col-h")
          list[i].classList.add('col-h')
          list1[i].classList.add('col-h')
        }
        if(a[i].uName == '猫眼'){
          span[i+ul_].innerHTML = '报告数量：8'
          span[i+ul_].classList.add("col-h")
          list[i].classList.add('col-h')
          list1[i].classList.add('col-h')
        }
        if(a[i].uName == '亚亚'){
          span[i+ul_].innerHTML = '查看试用名单'
          span[i+ul_].classList.add("col-g")
          list[i].classList.add('col-g')
          list1[i].classList.add('col-g')
        }
        if(a[i].uName == '兔子'){
          span[i+ul_].innerHTML = '查看试用名单'
          span[i+ul_].classList.add("col-g")
          span[i+ul_].classList.add("col-g")
          list[i].classList.add('col-g')
          list1[i].classList.add('col-g')
        }
        if(a[i].info_ty == '体验师转享'){
          span_[i+ul_].style.background = '#fbf4ca'
          span_[i+ul_].style.color = '#bba979'
        }
    }
}
}
$('.xla').on('click',function(){
  fn()
})


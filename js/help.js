var span = document.getElementsByClassName('xr-sp')
var span_ = document.getElementsByClassName('xr-sp2')
var oajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
oajax.open('get','http://192.168.31.136:3000/useing/public',true)
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
    var html = template('first',{
        value:a
    });
    document.getElementsByClassName('qb-box')[0].innerHTML = html;
}


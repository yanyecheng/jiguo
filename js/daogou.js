function fn(){
  var oajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
  oajax.open('get','http://192.168.31.136:3000/guid/new',true)
  oajax.send() ;
  oajax.onreadystatechange = function(){
   if(oajax.readyState == 4 ){
     if(oajax.status == 200){
      var a = eval('('+oajax.responseText+')')
      console.log(a);
      fn(a)
     }
   }
  }
  function fn(a){
      var html = template('first',{
          value:a
      });
      document.getElementsByClassName('dg-box')[1].innerHTML = html;
  }
}
$('.xla').on('click',function(){
  fn()
})
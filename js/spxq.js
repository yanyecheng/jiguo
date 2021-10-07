var js = document.getElementsByClassName('sdjs')[0]
console.log(js);
var djs = setInterval(function(){
    var ray = new Date();
    var n_ray  = new Date('12 25,2021,0:0:0');
    var d = ray.getTime();
    var n = n_ray.getTime();
    var s = parseInt((n-d)/1000);
    var s_ = s%60;
    var f = parseInt(s/60);
    var f_ = f%60 ;
    var xs = parseInt(f/60);
    var xs_ = xs%24;
    var t = parseInt(xs/24);
    js.innerHTML = t+'天'+xs_+'小时'+f_+'分钟'+s_+'秒'
},0)
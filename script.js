

function add(x,y){
    var sum=x+y;
    return sum;
}
var n=2;
var m=3;
var s=add(n,m);
alert(s);
function fn(){
    var a=document.getElementById('ta').value;
    document.getElementById('par').innerHTML=a;

}
function mail(){
    var email = document.getElementById("mail").value;
    var subject = "Request to .Connecting-Reg";
    var body = "Hello I would like to connect with you";
    window.location.href = "mailto:"+encodeURIComponent(email)+"?subject="+ encodeURI(subject)+"&body="+encodeURIComponent(body)+"&cc=angelamarythomas216@gmail.com";
    }

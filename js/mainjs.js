var t = 0;

function open_menu(){
if(t % 2 == 0){
document.querySelector('.cont_icon_menu').className = 'cont_icon_menu active1';
 setTimeout(function(){
document.querySelector('.cont_icon_menu').className = 'cont_icon_menu active2';
 },400); 
 setTimeout(function(){
document.querySelector('.cont_icon_menu').className = 'cont_icon_menu active3';
 },900); 
setTimeout(function(){
document.querySelector('.cont_icon_menu').className = 'cont_icon_menu active4';
 },1200); 
  t++;
  
}else{

  document.querySelector('.cont_icon_menu').className = 'cont_icon_menu close1'; 
 setTimeout(function(){
   document.querySelector('.cont_icon_menu').className = 'cont_icon_menu active2';
 },370); 
 setTimeout(function(){
document.querySelector('.cont_icon_menu').className = 'cont_icon_menu active1';
 },500); 
 setTimeout(function(){
document.querySelector('.cont_icon_menu').className = 'cont_icon_menu';
 },1000);
   t++;
}
}
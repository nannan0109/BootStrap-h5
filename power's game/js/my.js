/**
 * Created by Administrator on 2017/2/11.
 */
window.onscroll=function () {
    var ht=document.documentElement.scrollTop||document.body.scrollTop;
    if(ht>80){
        $("nav").removeClass("nav");
        $("nav").addClass("nav1");
    }else{
        $("nav").removeClass("nav1");
        $("nav").addClass("nav");
    }

}
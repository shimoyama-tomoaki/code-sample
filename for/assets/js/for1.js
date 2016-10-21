/*js file*/
$(function(){

   $("body").append("<div class='container'></div>");
   var $container = $(".container");

   var xLine = 10;
   var yLine = 8;
   var line_arr = [];
   var scale = 70;

   for(var i=0; i<yLine; i++){
     for(var n=0; n<xLine; n++){

       $container.append("<div class='box box"+i+"_"+n+"'></div");
       var $box =$(".box"+i+"_"+n)
       $box.css({
         "width": scale,
         "height": scale,
         "top": i * scale,
         "left": n * scale,
         "background-color":"#ccc",
         "position": "absolute",
         "border": "solid 1px #fefefe",
         "text-align": "center",
         "font-size": "12px",
         "line-height": scale+"px"
        });

       line_arr.push({ y:i * scale, x:n * scale });
       $box.text((i+1)+"_"+(n+1)); 

       var $random = [ i * scale , n * scale ];
       var $randomNum = Math.floor( Math.random() * $box.length );

       console.log(line_arr[$randomNum]);

     }
   }





})//end function

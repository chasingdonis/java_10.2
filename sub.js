$(document).ready(function (){
//$('.content h2').clone().appendTo('.content h1'); 
//$('.content h1 h2').css("font-size","-=3pt");

var citylist = $('.content h2');
var list = $("<ul id='anchor'>");

var cAnchorCount = 0;

citylist.each(function(indx, elem) {
$(this).html("<a name='anchor" + cAnchorCount + "'></a>" + $(this).html());
list.append($("<li><a href='#anchor" + cAnchorCount++ + "'> " + $(this).text() + "</a></li>"));
        });

        $(".content h1").after(list);
     });






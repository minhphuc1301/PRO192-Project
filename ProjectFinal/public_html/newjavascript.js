/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var b =
        ["a.jpg", "b.jpg", "c.jpg", "slider.png"];
var i = 0;

t=setInterval("right()",5000);
function right()
{
    i++;
    var t = document.getElementById("slide");
    if (i > b.length - 1) {
            i = 0;
        }

        t.src = b[i];

    }



    function left(){
            i-- ;
    var t = document.getElementById("slide");

    if (i < 0)
    {
        i = (b.length - 1);

    }
    t.src = b[i];

    }






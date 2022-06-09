

var get = document.getElementById("result_box");
var result;

var min = document.getElementById("minimum").value;
var max = document.getElementById("maximum").value;




function generate()
{

    result =Math.floor(Math.random() * max), min;
    console.log("generation complete");
    get.setAttribute("value",result);
}
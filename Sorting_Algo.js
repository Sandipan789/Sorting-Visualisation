

var ar_sz=document.getElementById("arr_size");
var ar_len=ar_sz.value;
var ar_gn=document.getElementById("arr_generate");
var ar_sp=document.getElementById("arr_speed");

var div_size=[];
var divi=[];
var container=document.getElementById("container_arr");
var all_buttons=document.querySelectorAll(".algo button");


container.style="flex-direction:row";

ar_gn.addEventListener("click",generate_array);
ar_sz.addEventListener("input",update_array_size);

var margin_size;

function generate_array(){
     
	container.innerHTML="";
	for(var i=0;i<ar_len;i++){
		div_size[i]=Math.floor(Math.random()*0.8*(ar_sz.max-ar_sz.min))+5;
		divi[i]=document.createElement("div");
		margin_size=0.1;
        divi[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/ar_len-(2*margin_size)) + "%; height:" + (div_size[i]) + "%;";
        
        container.appendChild(divi[i]);
	}
}

function update_array_size()
{
    ar_len=ar_sz.value;
    generate_array();
}

window.onload=update_array_size();

for(var i=0;i<all_buttons.length;i++){
	all_buttons[i].addEventListener("click",algorithm_run);
}


function disableBut(){

    for(var i=0;i<all_buttons.length;i++){

	    all_buttons[i].disabled=true;
	    ar_sz.disabled=true;
	    ar_gn.disabled=true;
	    ar_sp.disabled=true;
    }
}

var speed=1000;
ar_sp.addEventListener("input",update_speed);


function update_speed(){
	var temp=ar_sp.value;
	switch(parseInt(temp)){
		case 1: speed=1;
                break;
        case 2: speed=10;
                break;
        case 3: speed=100;
                break;
        case 4: speed=1000;
                break;
        case 5: speed=10000;
                break;
	}
	set_delay=10000/(Math.floor(ar_len/10)*speed); 
}


var delay_time=0;
var set_delay=10000/(Math.floor(ar_len/10)*speed);

function update_cur_div(cont,height,color)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/ar_len-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },delay_time+=set_delay);
    //console.log(delay_time);
}

function enableBut(){

	window.setTimeout(function(){
		for(var i=0;i<all_buttons.length;i++){

			all_buttons[i].disabled=false;
			ar_sz.disabled=false;
			ar_gn.disabled=false;
			ar_sp.disabled=false;
		}
	},delay_time+=set_delay);
}


function algorithm_run(){

	disableBut();

	switch(this.innerHTML)
    {
        case "Bubble":Bubble();
                        break;
        case "Selection":Selection();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();
                        break;
        case "Quick":Quick();
                        break;
    }
}
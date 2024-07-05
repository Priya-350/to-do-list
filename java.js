const txt=document.getElementById("txt");
const bt=document.getElementById("bt");
const ul=document.getElementById("ul");

function clk(){
    if(ul.classList.contains("checked")){
        ul.classList.remove("checked");
    }
 if(txt.value === ''){
    alert("Please write some task!!");
 }
 else{
    let li=document.createElement("li");
    li.innerHTML=txt.value;
    ul.appendChild(li);
    let cross=document.createElement("span");
    cross.innerHTML="\u00d7";
    li.appendChild(cross);
 }
 txt.value="";
   savedata();
}
ul.addEventListener('click',function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);
function savedata(){
    localStorage.setItem("data",ul.innerHTML);
}
function showtask(){
    ul.innerHTML=localStorage.getItem("data");
}
showtask();
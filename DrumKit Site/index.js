const btn=document.querySelectorAll("button");

for(let i=0;i<btn.length;i++)
{
    btn[i].addEventListener("click",handleClick);
}
function handleClick(){
    alert("I have been clicked")
}




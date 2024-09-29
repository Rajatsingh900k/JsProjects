const value=document.getElementById(fullName);
value.addEventListener('click',(e)=>{
    if(e.target.value==='1' || isNaN(e.target.value)){
        alert('Please enter a valid name.')
    }
})
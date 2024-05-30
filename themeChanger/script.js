const buttons =document.querySelectorAll('.themes');
const body= document.querySelector("body");

buttons.forEach(function(divi)
{
    const button=divi.querySelector('.color-button')
    button.addEventListener('click', function(event){
        if(event.target.id==='grey')
            {
                body.style.backgroundColor=event.target.id;
            }
        else if(event.target.id==='white')
            {
                body.style.backgroundColor=event.target.id;
            }
        else if(event.target.id==='blue')
            {
                body.style.backgroundColor=event.target.id;
            }
        else if(event.target.id==='yellow')
            {
                body.style.backgroundColor=event.target.id;
            }
    })
});

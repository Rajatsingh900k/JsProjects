const form=document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);

    const result=document.querySelector('#results');

    if(height==='' || height<0 || isNaN(height))
    {
        result.innerHTML=`Please give a valid height  `;
    }
    else if(weight==='' || weight<0 || isNaN(weight))
        {
            result.innerHTML=`Please give a valid weight `;
        }
    else
    {
        const bmi=(weight/((height**2)/10000)).toFixed(2);
        result.innerHTML=`<span>${bmi} </span>`;
    }

    if(result<18.6)
    {
        result.append(`: Under Weight.`);
    }
    else if(result>=18.6 && result<=24.9)
    {
        result.append(`: Normal Weight.`);
    }
    else
    {
        result.append(`: Over Weight.`);
    }
})
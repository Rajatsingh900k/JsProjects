function extractValue(){
    const inputValue = document.querySelector('#arrayInput').value;
    if(inputValue === ''){
        alert('Enter the Array');
        return null;
    } else {
        return inputValue;
    }
}
function swap(arr, index1, index2) {
       const x= arr[index1];
        arr[index1]=arr[index2];
        arr[index2]=x;
        return;
    }

function sorter(newArray){
    for(let i in newArray){
        for(let j = 0; j < newArray.length - i - 1; j++)
        {
            if(newArray[j]>newArray[j+1])
                swap(newArray,j,j+1);
        }
    }
    return newArray;
}
const btn = document.querySelector('button');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    const elements = extractValue();
    if (elements) { 
        const newArray = elements.split(",").map((i) => i.trim());
        const ans=sorter(newArray);
        let output = document.getElementById('output');
        output.innerText = 'Array: ' + JSON.stringify(ans);
    }
});
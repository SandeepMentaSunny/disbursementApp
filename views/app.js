let uploadText = document.querySelector('.uploadText');
let removeButton = document.querySelector('.remove-button');
let uploadedFile = document.querySelector('#uploadedFile');
let inputField = document.querySelector('.input');
let currencyExchangeRates = {};
let dataListOptions = document.querySelector('#currencies');

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.exchangeratesapi.io/latest?base=USD').then(res => {
        if(res.status !== 200){
            console.error('Looks like there was a problem. Status Code: ' + response.status);
            return;
        }
        res.json().then(data => {
            currencyExchangeRates = data[`rates`] || {};
            generateDatalist();
        }).catch(err => console.error(err));
    }).catch(err => console.error(err));
});

function generateDatalist(){
    let options = '';
    for(let key in currencyExchangeRates){
        options += '<option value="'+key + ' - ' + currencyExchangeRates[key]+'">'
    }
    dataListOptions.innerHTML = options;
}

function getFileData(file){
    let files = file.files[0];
    let fileName = files.name;
    uploadText.innerHTML = fileName;
    if(fileName !== 'Upload csv file'){
        removeButton.classList.remove('remove-button')
    }
    if(fileName.lastIndexOf('.csv') === -1){
        alert('Please upload a valid csv file');
        uploadedFile.value = '';
    }
}

function removeFileData(){
    uploadText.innerHTML = 'Upload csv file';
    removeButton.classList.add('remove-button');
    uploadedFile.value = '';
}

// let counter = 0;
// const getCurrency = () => {
    
// }

// const debounce = function(fn, delay){
//     let timer;
//     return function(){
//         let context = this, args = arguments;
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             getCurrency.apply(context, args);
//         }, delay)
//     }
// }

// const callDebounce = debounce(getCurrency, 300);

function submitForm(){
    
}
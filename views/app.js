let uploadText = document.querySelector('.uploadText');
let removeButton = document.querySelector('.remove-button');
let uploadedFile = document.querySelector('#uploadedFile');

function getFileData(file){
    let files = file.files[0];
    let fileName = files.name;
    uploadText.innerHTML = fileName;
    if(fileName !== 'Upload csv file'){
        removeButton.classList.remove('remove-button')
    }
}

function removeFileData(){
    uploadText.innerHTML = 'Upload csv file';
    removeButton.classList.add('remove-button');
    uploadedFile.value = '';
}
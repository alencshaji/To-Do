let  kitchenInput =document.getElementById ("kitchen-input")
let  addBtn=document.getElementById ("add-btn")
let  kitchenItemsList=document.getElementById ("kitchen-item-list")
let  kitchenInputDataArray =[]
let  kitchenInputData
function setLocalStorage() {
    localStorage.setItem('kitchenInput',JSON.stringify(kitchenInputDataArray));

} 
function getLocalStorage() {
    if(localStorage.getItem('kitchenInput')) {
    kitchenInputDataArray =JSON.parse(localStorage.getItem('kitchenInput')) ;
    buildUI()
    }
}
function buildUI()
{   kitchenItemsList.innerHTML=''
    kitchenInputDataArray.forEach ((item) => {
        let li =document.createElement('li');
        let span1= document.createElement('span')
        li.appendChild(span1)
        span1.innerText= item;
        kitchenItemsList.appendChild(li)
        li.style.cssText='animation-name: slidein;';
        kitchenInput.value="";
        kitchenInput.focus();
    /////trash button
        let trashBtn= document.createElement('i');
        trashBtn.classList.add('fa-solid','fa-trash')
        li.appendChild(trashBtn);
    //////edit button
        let  editBtn= document.createElement('i');
        editBtn.classList.add('fa-solid','fa-pen-to-square')
        li.appendChild(editBtn);
    });
    
    
}

function addKitchenItem(){
    kitchenInputData = kitchenInput.value;
    kitchenInputDataArray.push(kitchenInputData)
    ////local storage
    setLocalStorage();
    getLocalStorage();
  
}
function deleteKitchenItem(e){
    if(e.target.classList[1] === 'fa-trash'){
        let item =e.target.parentElement;
        item.classList.add('slideout');
        item.addEventListener('transitionend',function() {
            item.remove()
        })
       
    }
}
function editKitchenItem(e) {
    if (e.target.classList[1]==='fa-pen-to-square' ) {
        let item=e.target.parentElement;
        let editedvalue=prompt('edited value');
        let span1=item.querySelector('span')
        span1.innerText=editedvalue
    }
    
}
addBtn.addEventListener("click",addKitchenItem)
kitchenItemsList.addEventListener('click',deleteKitchenItem)
kitchenItemsList.addEventListener('click',editKitchenItem)
getLocalStorage();
addBtn.addEventListener('keyup', function addKitchen (e) {
    if(e.keyCode=='Enter'){
        addKitchenItem();
    }
})






console.log('helloo');
function remove(id) {
    console.log(id);
}



const removeButtons = document.querySelectorAll(".remove")
removeButtons.forEach(button =>{
    button.addEventListener("click", ()=>{
        remove(button.dataset.id)
    })
})
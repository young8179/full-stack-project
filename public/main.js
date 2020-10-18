
function remove(id) {
    axios
        .delete(`/main/expense/${id}`)
        .then((res) => {
            
            const element = document.getElementById(id)
            element.parentNode.removeChild(element)
           
            

            
        })
        .catch((error) => {
            console.log(error)
            alert('could not delete expense');
        });
    }
    
    
    
    
    

const removeButtons = document.querySelectorAll(".remove")
removeButtons.forEach(button =>{
    button.addEventListener("click", ()=>{
        remove(button.dataset.id)
        // render()
        const location = document.getElementById("render")
        window.location.reload(true)
    })
})


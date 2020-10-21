
async function remove(id) {
    await axios
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
    button.addEventListener("click", async ()=>{
        await remove(button.dataset.id)
        document.location.reload(true)
        
    })
})


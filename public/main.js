
console.log('helloo');
function remove(id) {
    console.log(id);
}

function render(){
    axios
        .get(`/main`)
        .then((res)=>{
            res.render("main")
        })
        .catch((e)=>{
            console.log("something wrong")
        })
}

function remove(id) {
    axios
        .delete(`/main/expense/${id}`)
        .then((res) => {
            // res.send("we got it")
            const element = document.getElementById(id)
            element.parentNode.removeChild(element)

            // const result = document.getElementById("result")
            // const render = document.getElementById("render")
            // result.innerHTML = render
            // render.parentNode.removeChild(render)
            

            
        })
        .catch((error) => {
            
            alert('could not delete expense');
        });
    }
    
    
    
    
    

const removeButtons = document.querySelectorAll(".remove")
removeButtons.forEach(button =>{
    button.addEventListener("click", ()=>{
        remove(button.dataset.id)
        render()
    })
})


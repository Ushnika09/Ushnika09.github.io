let add=document.getElementById('btn1');
let container=document.querySelector('.container');
let toAdd=document.getElementById("inp")


add.addEventListener("click",addTask)

function addTask(){
    let newDiv = document.createElement("div");
    newDiv.style.cssText=` height:2.5rem;
                           width:30rem;
                           border-radius:10px;
                           box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.3);
                           padding:1rem 2rem;
                           margin:1.5rem auto;
                           display:flex;
                           background-color:white;
                           justify-content:space-between;
                           align-items:center;
                           color:#1e1e2f;`
    
    let innerDiv=document.createElement('div')
    innerDiv.style.cssText=` height:2.5rem;
                           width:4rem;                          
                           display:flex;
                           justify-content:space-between;
                           align-items:center;`

    let task=toAdd.value.trim()
    if(!task) return
    let newP=document.createElement("p")
    newP.innerHTML=task
    toAdd.value=''


    let check=document.createElement("input")
    check.type='checkbox'
    check.addEventListener("change",()=>{
        if(check.checked){
            newP.style.textDecoration="line-through"
        } else{
            newP.style.textDecoration="none"
        }
    })

    let del=document.createElement("img")
    del.src="delete.png"
    del.style.cssText=` height:1.5rem;
                        width:1.5rem;
                        cursor:pointer`

    del.onclick=()=>{
        newDiv.remove()
    }

    newDiv.append(newP,innerDiv)
    innerDiv.append(check,del)
    container.append(newDiv)
}



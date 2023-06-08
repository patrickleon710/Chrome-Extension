let myLeads = []


let inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")
let inputBtn = document.getElementById("input-btn")
let deleteBtn = document.getElementById("delete-btn")



// use parameters
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    render()
    inputEl.value = ""
})

function render() {
    let listContents = ""
    for (let i = 0; i < myLeads.length; i++) {
        listContents += `
            <li>
                <a target="_blank" href="${myLeads[i]}"> 
                    ${myLeads[i]} 
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listContents
}

deleteBtn.addEventListener("dblclick", function() {
    
    
})

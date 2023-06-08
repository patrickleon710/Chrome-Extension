let myLeads = []


let inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")
let inputBtn = document.getElementById("input-btn")
let tabBtn = document.getElementById("tab-btn")
let deleteBtn = document.getElementById("delete-btn")

let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// use parameters
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)    
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

function render(arr) {
    let listContents = ""
    for (let i = 0; i < arr.length; i++) {
        listContents += `
            <li>
                <a target="_blank" href="${arr[i]}"> 
                    ${arr[i]} 
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listContents
}

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
    
})

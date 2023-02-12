let myLeads = []
const inputEl = document.getElementById("input-el")

const inputBtn = document.getElementById("input-btn")

const ulEl = document.getElementById("ul-el")

const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()

}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    renderLeads()
})

tabBtn.addEventListener("click" , function() {
    //console.log(tabs[0].url)
    chrome.tabs.query({active:true , currentWindow: true} , function(tabs) {

    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLeads(myLeads)

        //let activeTab = tabs[0]
        //let activeTabId = activeTab.id
    })

    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
})

inputBtn.addEventListener("click" ,function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""

    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLeads(myLeads)
    renderLeads()
    //console.log(myLeads)
} )
function renderLeads() {
let listItems =""
for (let i =0; i<myLeads.length ; i++) {
    listItems += "<li><a target = '_blank' href = '" +myLeads[i] + "'>" + myLeads[i] + "</a></ li>"
}

ulEl.innerHTML = listItems
}
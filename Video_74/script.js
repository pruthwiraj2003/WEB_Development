let button = document .getElementById("btn")
button.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML = "<b> you were clicked </b> Enjoy your click!"
})
button.addEventListener("contentmenu",()=>{
    alert("Dont hack us byb right click please ")
})

document.addEventListener("keydown",(e)=>{
    console.log(e)
})
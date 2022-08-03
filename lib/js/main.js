let submitBtn= document.getElementsByClassName("adlib")


submitBtn.onclick= function(event){
    event.preventDefault()
    let responseBox= document.getElementById("submit")
    console.log(responseBox)
    let responseValue= responseBox.value
    console.log(responseValue)
    alert(responseValue)
    responseBox.value=""
}
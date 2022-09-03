let formElement = document.getElementById('form')
let balanceElement = document.getElementById('balance')
let depositElement = document.getElementById('deposit')
let balanceAmount = Number(localStorage.getItem('balance'))
let depositAmount = 0

balanceElement.innerHTML = balanceAmount.toFixed(2)

formElement.addEventListener("submit", function(event){
    event.preventDefault()
    depositAmount = Number(document.getElementById("deposit").value)
    balanceAmount = balanceAmount + depositAmount
    localStorage.setItem('balance',balanceAmount)
    balanceElement.innerHTML = balanceAmount.toFixed(2)
    })

function goBack(){
        window.location.href = '../dashboard/dashboard.html'
    }


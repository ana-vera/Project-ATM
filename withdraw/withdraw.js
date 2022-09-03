let formElement = document.getElementById('form')
let balanceElement = document.getElementById('balance')
let withdrawElement = document.getElementById('withdraw')
let balanceAmount = Number(localStorage.getItem('balance'))
let withdrawAmount = 0

balanceElement.innerHTML = balanceAmount.toFixed(2)

formElement.addEventListener("submit", function(event){
    event.preventDefault()
    withdrawAmount = Number(document.getElementById("withdraw").value)
    
    if(withdrawAmount>balanceAmount){document.getElementById("notEnoughMoney").className = 'display-below'}
    else{
        document.getElementById("notEnoughMoney").className = 'hide'
        balanceAmount = balanceAmount - withdrawAmount
        balanceElement.innerHTML = balanceAmount.toFixed(2)
        localStorage.setItem('balance', balanceAmount)
        document.getElementById("span-retrieve").className = 'display-below'
        setTimeout(function (){
            document.getElementById("span-retrieve").className = 'hide'
        },2000)
        }
    })

function goBack(){
        window.location.href = '../dashboard/dashboard.html'
    }


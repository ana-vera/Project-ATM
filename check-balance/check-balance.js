let balanceElement = document.getElementById("balance")
let balance = Number(localStorage.getItem('balance'))

balanceElement.innerHTML = "$ "+balance.toFixed(2)
let printId = document.getElementById('print')

function printReceipt(){
    printId.className = 'display'
    let printText = ['Printing','Printing.','Printing..','Printing...','Please take your receipt']
    let j = 0; z=0;
    
    const loading = (i) => {
        if (j<=4){
            setTimeout(function(){
                printId.innerHTML = printText[j]
                j++
                z++
            },800*i)
        }
    }

    for (i=0; i<=4;i++){
        loading(i)
        j=0
    }
}

function goBack(){
    window.location.href = '../dashboard/dashboard.html'
}
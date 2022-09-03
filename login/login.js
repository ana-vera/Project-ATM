localStorage.setItem('balance', 1000)

const form = document.getElementById('form')
const debug = {user:'user', pwd:'pwd'}

const validate = (user, pwd) => {
    
    const check = (theInput , fieldType, dbg) =>{

        const error = (errorType) => {
            let element = document.getElementById(`${fieldType}${errorType}`)
            element.className = 'display-error'
            return false}

        if (theInput == dbg) { return true }
        else if (theInput == ""){ return error('Blank') }
        else { return error('NotFound') }
    }

    let userMatch = false, pwdMatch = false

    userMatch = check(user,'user', debug.user)
    if(userMatch){ pwdMatch = check(pwd,'pwd', debug.pwd) }

    if (userMatch && pwdMatch){console.log("correct"); return true;}
}

const resetMessages= () => {
    document.getElementById('userBlank').className = 'hide'
    document.getElementById('userNotFound').className = 'hide'
    document.getElementById('pwdBlank').className = 'hide'
    document.getElementById('pwdNotFound').className = 'hide'
}
    

form.addEventListener("submit", function(event){
    resetMessages()
    event.preventDefault()
    let input = {user:"", pwd:""}
    input.user = document.getElementById("user").value
    input.pwd = document.getElementById("pwd").value
    console.log(input.user+" "+input.pwd)
    let isCorrect = false;
    isCorrect = validate(input.user, input.pwd)
    if(isCorrect){window.location.href = './dashboard/dashboard.html'}
    })
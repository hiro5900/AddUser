document.getElementById('btn').addEventListener('click', ()=>{
     let userName = document.getElementsByClassName('user-name')[0].value
     let userEmail = document.getElementsByClassName('user-email')[0].value

     localStorage.setItem(userName, userEmail)
})
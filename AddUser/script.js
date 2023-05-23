document.getElementById('btn').addEventListener('click', ()=>{
     let userName = document.getElementsByClassName('user-name')[0].value.trim()
     let userEmail = document.getElementsByClassName('user-email')[0].value

     let info = {
          Name: userName,
          Email: userEmail
     }

     let userInfo = JSON.stringify(info)

     localStorage.setItem(userName, userInfo)
})
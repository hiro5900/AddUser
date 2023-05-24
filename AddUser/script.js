document.getElementById('btn').addEventListener('click', ()=>{
     let userName = document.getElementsByClassName('user-name')[0].value.trim()
     let userEmail = document.getElementsByClassName('user-email')[0].value
     let userPhone = document.getElementsByClassName('user-phone')[0].value

     let info = {
          Name: userName,
          Email: userEmail,
          Phone: userPhone
     }

     let userInfo = JSON.stringify(info)

     localStorage.setItem(userEmail, userInfo)
})
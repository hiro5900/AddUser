document.getElementById('btn').addEventListener('click', () => {
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

     let user = document.createElement('li')
     let deleteBtn = document.createElement('button')
     deleteBtn.textContent = 'X'
     deleteBtn.style.borderRadius = '5px'
     deleteBtn.style.backgroundColor = '#f94a4a'
     deleteBtn.style.cursor = 'pointer'
     deleteBtn.className = 'delete-btn'

     user.textContent = userName + (' ') + userEmail + (' ') + userPhone
     user.appendChild(deleteBtn)

     let users = document.getElementsByClassName('users')[0]
     users.appendChild(user)

     deleteBtn.addEventListener('click', () => {
          users.removeChild(user)
          localStorage.removeItem(userEmail)
     })
})
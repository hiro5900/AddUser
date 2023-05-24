
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

     // store in localStorage
     localStorage.setItem(userEmail, userInfo)


     // new list item 
     let user = document.createElement('li')
     // delete button
     let deleteBtn = document.createElement('button')
     deleteBtn.textContent = 'X'
     deleteBtn.style.borderRadius = '5px'
     deleteBtn.style.backgroundColor = '#f94a4a'
     deleteBtn.style.cursor = 'pointer'
     deleteBtn.className = 'delete-btn'

     // edit button
     let editBtn = document.createElement('button')
     editBtn.textContent = 'Edit'
     editBtn.style.borderRadius = '5px'
     editBtn.style.cursor = 'pointer'
     editBtn.className = 'edit-btn'

     // append in users 
     user.textContent = userName + (' ') + userEmail + (' ') + userPhone
     user.appendChild(editBtn)
     user.appendChild(deleteBtn)

     let users = document.getElementsByClassName('users')[0]
     users.appendChild(user)

     deleteBtn.addEventListener('click', () => {
          users.removeChild(user)
          localStorage.removeItem(userEmail)
     })

     editBtn.addEventListener('click', () => {
          users.removeChild(user)
          localStorage.removeItem(userEmail)

          document.getElementsByClassName('user-name')[0].value = info.Name
          document.getElementsByClassName('user-email')[0].value = info.Email
          document.getElementsByClassName('user-phone')[0].value = info.Phone
     })

     // clear input fields after submit
     document.getElementsByClassName('user-name')[0].value = '';
     document.getElementsByClassName('user-email')[0].value = '';
     document.getElementsByClassName('user-phone')[0].value = '';
})
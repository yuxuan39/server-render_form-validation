let userId = document.getElementById('user-id')
let userName = document.getElementById('user-username')
let userEmail = document.getElementById('user-email')
let userPhone = document.getElementById('user-phone')
let userBirth = document.getElementById('user-birth')
const signOutBtn = document.getElementById('sign-out-btn')

const token = sessionStorage.getItem('userdata')
let url = new URL('https://free-gce.akiya.com.tw/users/me')
url.searchParams.append('access_token', token)
console.log(url.href)

const getData = () => {
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  })
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data)
      const id = data.data['_id']
      const username = data.data['username']
      const email = data.data['email']
      const phone = data.data['phone']
      const birth = data.data['birthday']
      userId.innerText = id
      userName.innerText = username
      userEmail.innerText = email
      userPhone.innerText = phone
      userBirth.innerText = birth
    })
    .catch(err => {
      console.log(err)
      alert('Oops!')
    })
}
getData()

signOutBtn.addEventListener('click', function(evt) {
  signInBtn.style.boxShadow = 'none'
  signInBtn.style.top = '3px'
  signInBtn.style.borderBottom = '3px solid #231C7B'
  signOut()
})

const HOST = 'http://free-gce.akiya.com.tw/auth/logout'
const signOut = evt => {
  fetch(HOST, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => console.log(res), alert('Signed out'))
    .catch(err => {
      console.log(err)
    })
}

const username = document.getElementById('username')
const password = document.getElementById('password')
const signUpBtn = document.getElementById('sign-up-btn')
const signInBtn = document.getElementById('sign-in-btn')

signUpBtn.addEventListener('click', evt => {
  signUpBtn.style.boxShadow = 'none'
  signUpBtn.style.top = '3px'
  signUpBtn.style.borderBottom = '3px solid #0B7619'
  setTimeout(() => {
    signUpBtn.style.top = '0'
    signUpBtn.style.borderBottom = 'none'
    signUpBtn.style.boxShadow = '0px 6px 0px #0B7619'
  }, 100)
})

signInBtn.addEventListener('click', function(evt) {
  signInBtn.style.boxShadow = 'none'
  signInBtn.style.top = '3px'
  signInBtn.style.borderBottom = '3px solid #C26600'
  setTimeout(() => {
    signInBtn.style.top = '0'
    signInBtn.style.borderBottom = 'none'
    signInBtn.style.boxShadow = '0px 6px 0px #C26600'
  }, 100)
  const data = {
    username: username.value,
    password: password.value
  }
  sentData(data)
})

const HOST = 'https://free-gce.akiya.com.tw/auth/login'

const sentData = data => {
  fetch(HOST, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => {
      if (res.status === 400) {
        alert('Please fill the form out')
      }
      if (res.status === 401) {
        alert('Your username or password is incorrect')
      }
      return res.json()
    })
    .then(data => {
      sessionStorage.userdata = data.data.token
      location.href = './html/userdata.html'
    })
    .catch(err => {
      console.log(err)
    })
}

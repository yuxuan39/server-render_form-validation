const username = document.getElementById('username')
const password = document.getElementById('password')
const signInBtn = document.getElementById('sign-in-btn')

signInBtn.addEventListener('click', function(evt) {
  signInBtn.style.boxShadow = 'none'
  signInBtn.style.top = '3px'
  signInBtn.style.borderBottom = '3px solid #C26600'
  const data = {
    username: username.value,
    password: password.value
  }
  console.log(data)
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
      location.href = 'userdata.html'
    })
    .catch(err => {
      console.log(err)
    })
}

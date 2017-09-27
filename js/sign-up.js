const usernameDd = document.getElementById('username-dd')
const phoneDd = document.getElementById('phone-dd')
const emailDd = document.getElementById('email-dd')
const username = document.getElementById('username')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const birth = document.getElementById('birth')
const password = document.getElementById('password')
const signUpBtn = document.getElementById('sign-up-btn')

const phoneRegex = /^09\d{2}-?\d{3}-?\d{3}$/
const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})*$/

const warnUsername = document.createElement('p')
warnUsername.classList = 'warn'
warnUsername.innerText = 'Username is already taken'

const warnPhone = document.createElement('p')
warnPhone.classList = 'warn'
warnPhone.innerText = 'Invaild phone number'

const warnEmail = document.createElement('p')
warnEmail.classList = 'warn'
warnEmail.innerText = 'Invaild email'

phone.addEventListener('blur', evt => {
  if (phoneRegex.test(phone.value) === false) {
    phoneDd.appendChild(warnPhone)
  }
  if (phoneRegex.test(phone.value) === true) {
    if (warnPhone) {
      phoneDd.removeChild(warnPhone)
    }
  }
})

email.addEventListener('blur', evt => {
  if (emailRegex.test(email.value) === false) {
    emailDd.appendChild(warnEmail)
  }
  if (emailRegex.test(email.value) === true) {
    if (warnEmail) {
      emailDd.removeChild(warnEmail)
    }
  }
})

signUpBtn.addEventListener('click', evt => {
  signUpBtn.style.boxShadow = 'none'
  signUpBtn.style.top = '3px'
  signUpBtn.style.borderBottom = '3px solid #0B7619'
  const data = {
    username: username.value,
    password: password.value,
    email: email.value,
    phone: phone.value,
    birthday: birth.value
  }
  sentData(data)
})

const HOST = 'https://free-gce.akiya.com.tw/auth/register'

const sentData = data => {
  fetch(HOST, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    // mode: 'no-cors',
    body: JSON.stringify(data)
  })
    .then(res => {
      console.log(res.status)
      if (res.status === 409) {
        usernameDd.appendChild(warnUsername)
      } else if (res.status === 400) {
        alert('Please fill the form out')
      } else {
        console.log(res)
        alert('Sign Up Completed')
        location.href = 'sign-in.html'
      }
    })
    .catch(err => {
      debugger
      console.log(err)
      alert('Registration failed')
    })
}

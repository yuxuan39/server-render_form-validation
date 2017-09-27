const usernameDd = document.getElementById('username-dd')
const phoneDd = document.getElementById('phone-dd')
const emailDd = document.getElementById('email-dd')
const username = document.getElementById('username')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const birth = document.getElementById('birth')
const password = document.getElementById('password')
const signUpBtn = document.getElementById('sign-up-btn')
const signInBtn = document.getElementById('sign-in-btn')

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

signInBtn.addEventListener('click', function(evt) {
  signInBtn.style.boxShadow = 'none'
  signInBtn.style.top = '3px'
  signInBtn.style.borderBottom = '3px solid #C26600'
  setTimeout(() => {
    signInBtn.style.top = '0'
    signInBtn.style.borderBottom = 'none'
    signInBtn.style.boxShadow = '0px 6px 0px #C26600'
  }, 100)
})

phone.addEventListener('blur', evt => {
  if (!phoneRegex.test(phone.value)) {
    return phoneDd.appendChild(warnPhone)
  }

  const warn = phoneDd.querySelector('p')
  if (warn) {
    phoneDd.removeChild(warn)
  }
})

email.addEventListener('blur', evt => {
  if (!emailRegex.test(email.value)) {
    return emailDd.appendChild(warnEmail)
  }

  const warn = emailDd.querySelector('p')
  if (warn) {
    emailDd.removeChild(warn)
  }
})

signUpBtn.addEventListener('click', evt => {
  signUpBtn.style.boxShadow = 'none'
  signUpBtn.style.top = '3px'
  signUpBtn.style.borderBottom = '3px solid #0B7619'
  setTimeout(() => {
    signUpBtn.style.top = '0'
    signUpBtn.style.borderBottom = 'none'
    signUpBtn.style.boxShadow = '0px 6px 0px #0B7619'
  }, 100)
  const data = {
    username: username.value,
    password: password.value,
    email: email.value,
    phone: phone.value,
    birthday: birth.value
  }
  sentData(data)
    .then(status => {
      if (status === 409) {
        return usernameDd.appendChild(warnUsername)
      }
      if (status === 400) {
        return alert('Please fill the form out')
      }

      alert('Sign Up Completed')
      location.href = 'sign-in.html'
    })
    .catch(err => {
      console.log(err)
      alert('Registration failed')
    })
})

const HOST = 'https://free-gce.akiya.com.tw'

const sentData = data => {
  return fetch(`${HOST}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    // mode: 'no-cors',
    body: JSON.stringify(data)
  }).then(res => res.status)
}

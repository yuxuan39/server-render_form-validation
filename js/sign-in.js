const username = document.getElementById('username')
const password = document.getElementById('password')
const signInBtn = document.getElementById('sign-in-btn')

signInBtn.addEventListener('click', function (evt) {
    const data = {
        "username": username.value,
        "password": password.value
    }
    console.log(data)
    sentData(data)
})

const HOST = 'http://free-gce.akiya.com.tw:4000/auth/login'


const sentData = (data) => {
    fetch(HOST, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => {
        alert('Sign In Completed')
        return res.json()
    }).then(data => {
        sessionStorage.userdata = data.data.token
        location.href = 'userdata.html'
    })
    .catch(err => {
        console.log(err)
        alert('Oops!')
    })
    
}
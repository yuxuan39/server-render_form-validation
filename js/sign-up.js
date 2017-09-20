const username = document.getElementById('username')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const birth = document.getElementById('birth')
const password = document.getElementById('password')
const signUpBtn = document.getElementById('sign-up-btn')


signUpBtn.addEventListener('click', function (evt) {
    const data = {
        "username": username.value,
        "password": password.value,
        "email": email.value,
        "phone": phone.value,
        "birthday": '1990/01/01'
    }
    console.log(data)
    sentData(data)
    location.href = 'sign-in.html'
})

const HOST = 'http://free-gce.akiya.com.tw:4000/auth/register'


const sentData = (data) => {
    fetch(HOST, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res =>
        console.log(res),
        alert('Sign Up Completed')
        ).catch(err =>{
            console.log(err)
            alert('Oops!')
        })
        
}


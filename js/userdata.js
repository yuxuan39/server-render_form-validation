let userId = document.getElementById('user-id')
let userName = document.getElementById('user-username')
let userEmail = document.getElementById('user-email')
let userPhone = document.getElementById('user-phone')
let userBirth = document.getElementById('user-birth')

const token = sessionStorage.getItem('userdata')
let url = new URL("http://free-gce.akiya.com.tw:4000/users/me")
url.searchParams.append('access_token', token)
console.log(url.href)


const getData = () => {
    fetch(url, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    }).then(res => {
        alert('got it!')
        return res.json()
    }).then(data => {
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
    }).catch(err => {
        console.log(err)
        alert('Oops!')
    })
}
getData()


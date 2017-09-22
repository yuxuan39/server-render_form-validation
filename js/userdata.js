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
        alert('get Completed')
        return res.json()
    }).then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
        alert('Oops!')
    })
}
getData()
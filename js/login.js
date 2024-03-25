console.log('javascript is connected');
document.getElementById('loginForm').addEventListener('submit',function(event){
    event.preventDefault();
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    //hardcode
    const validUsername = 'admin@gmail.com';
    const validPpassword = 'password@gmail.com';

    if(username === validUsername && password === validPpassword){
window.location.href='dashboard.html'
    }


    const message = document.getElementById('message');
    message.innerHTML = `<div> You are  logged in </div>`

    //reset form 
    document.getElementById('loginForm').reset();


})
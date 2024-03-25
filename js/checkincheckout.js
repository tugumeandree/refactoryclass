console.log('javascript is connected');
document.getElementById('sitterForm').addEventListener('submit',function(event){
    event.preventDefault();
    const name = document.getElementById('name').value
    const location = document.getElementById('location').value


    const message = document.getElementById('message');
    message.innerHTML = `<div> Sitter Registered </div>`

    //reset form 
    document.getElementById('sitterForm').reset();


})
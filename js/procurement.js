console.log('javascript is connected');
document.getElementById('procurementForm').addEventListener('submit',function(event){
    event.preventDefault();
    const itemName = document.getElementById('itemName').value
    const quantity = document.getElementById('quantity').value


    const message = document.getElementById('message');
    message.innerHTML = `<div> Sitter Registered </div>`

    //reset form 
    document.getElementById('sitterForm').reset();


})


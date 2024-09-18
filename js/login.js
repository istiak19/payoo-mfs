document.getElementById('button-login').addEventListener('click',function(event){
    event.preventDefault();
   
    const phoneNumber=document.getElementById('phone-number').value 
    const pinNumber=document.getElementById('pin-number').value
    if(phoneNumber==='6'&&pinNumber==='1234'){
        console.log('login')
        window.location.href='./home.html';
    }
    else{
        alert('Wrong Pin')
    }
})
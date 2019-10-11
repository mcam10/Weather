const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')
const message3 = document.querySelector('#message-3')

// add event listener when this form is submitted

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const destination = search.value;

    message.textContent = 'loading...'
    message2.textContent = ''

    fetch('weather?address='+destination).then((response)=>{
    response.json().then((data)=>{
        if (data.error){
            message3.textContent = data.error
        }else{
        message.textContent = data.location;
        message2.textContent = data.forecast;
        }
    })
})
})


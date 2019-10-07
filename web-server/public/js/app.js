const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

// add event listener when this form is submitted

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const destination = search.value;

    fetch('http://localhost:3000/weather?address='+destination).then((response)=>{
    response.json().then((data)=>{
        if (data.error){
            console.log("this is not a valid search, please try again")
        }
        console.log(data.location)
        console.log(data.forecast)
    })
})
})


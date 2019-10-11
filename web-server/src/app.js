const express = require('express')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const request = require('request')
const path = require('path')
const hbs = require('hbs')
const app = express()
// setting up env variable value
const port = process.env.PORT || 3000

// Express configuration
const publicPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname,'../templates/partials')

// Setup handle bars funtionaility and views location
app.use(express.static(publicPath))
app.set('view engine', 'hbs');
app.set('views', viewsPath)
hbs.registerPartials(partialPath)



app.get('',(req,res) => {
    res.render('weather',{
        title: 'The Weather App',
        name: 'Malik Cameron'
    })
}) 


app.get('/about', (req,res) =>{
    res.render('index',{
        title: 'About Me',
        name: 'malik cameron'
    })
})


app.get('/help', (req,res) =>{
    res.render('help',{
        title: 'Help page',
        name: 'malik cameron',
        message: 'if require assistance, please contact this number 888-888-8888'
    })
})




app.get('/help/*',(req,res) =>{
    res.render('404',{
        message: "Help article not found?"
    })
})

app.get('/weather',(req,res)=>{
    if (!req.query.address){
       return res.send({
            error: 'You Must Provide a City to Search'
        })
    }

    geocode(req.query.address,(error, {latitude, longitude, location} = {}) =>{
        if ( error){
            return res.send({error})
        }
        forecast(latitude,longitude,(error, forecastData) => {
            if (error){
                return res.send({error})
            }
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
 })
})
        

app.get('*',(req,res) =>{   // setting up 404 page, 
    res.render('404',{
        message: "Page Not Found"
    })
})

 app.listen(port, () => {
     console.log(`server is running on port ${port}`) // this will display like logs... not to the user
 })//listen on a specific port


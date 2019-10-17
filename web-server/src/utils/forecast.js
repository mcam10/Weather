const request = require('request')


const forecast = ( latitude,longitude,callback) => {
    const url = 'https://api.darksky.net/forecast/063629cfb1c8ac33dfcd8be7e2cb3df3/'+latitude + ',' + longitude 
    request({ url, json: true}, (error,{body}) =>{
	    if ( error){
		    callback("Unable to connect to Weather Service!",undefined)
	    } else if (body.error){
			
		    callback('Unable to find location, Please Try Again',undefined)
		}
		try {
			callback(undefined, `${body.minutely.summary} It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain.
			  The High for the day is ${body.daily.data[0].temperatureHigh} degrees. The low is ${body.daily.data[0].temperatureLow} degrees.`)

		}
	    catch(TypeError) {
			callback("Unable to find location, Please Try Again")
        }

    })

}
module.exports = forecast;

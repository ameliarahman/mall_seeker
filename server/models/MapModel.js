require('dotenv').config()
const geocoder = require('google-geocoder')
const googlekey = process.env.GEO_KEY

const geo = geocoder({
  key: googlekey
})

const getDataLocation = (location) => {
  return new Promise((resolve, reject) => {
    geo.find(location, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res[0].location)
      }
    })
  })
} 

module.exports = {
  getDataLocation
}
const FB = require('fb')

const getData = (token) => {
  return new Promise( (resolve, reject) => {
    FB.api('/me', { fields: ['id', 'name', 'email'], access_token: token }, function (res) {
      if (!res || res.error ) {
        console.log('kalo gagal ',res);
        reject(res.error)
      } else {
        console.log('kalo berhasil ', res);
        resolve(res)
      }
    })
  })
}

module.exports = {
  getData
}
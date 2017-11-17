function statusChangeCallback(response) {
  console.log('statusChangeCallback');
  console.log(response);

  if (response.status === 'connected') {
    axios.post('http://localhost:3000/users',{}, {
      headers:{
        token: response.authResponse.accessToken
      }
    })
    .then(({data}) => {
      console.log('datanya nih');
      console.log(data)
      localStorage.setItem('token', data)
      setTimeout(() => {
        $('#header_detail').show()
      }, 1000);
    })
    .catch(err => {
      console.log(err)
    })
  } else {
    localStorage.removeItem('token')
    localStorage.removeItem('locationLat')
    localStorage.removeItem('locationLong')
    localStorage.removeItem('locationRad')
    setTimeout(() => {
      $('#header_detail').hide()
    }, 1000);
  }
}

function checkLoginState() {
  FB.getLoginStatus(function (response) {
    console.log(response);
    statusChangeCallback(response);
  });
}

window.fbAsyncInit = function () {
  FB.init({
    appId: 1625576800795940,
    cookie: true, 
    xfbml: true, 
    version: 'v2.10' 
  });

  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  }, { scope: 'id,name,email' });

};

// Load the SDK asynchronously
(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
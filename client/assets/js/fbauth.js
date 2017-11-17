function statusChangeCallback(response) {
  console.log('statusChangeCallback');
  console.log(response);

  if (response.status === 'connected') {
    console.log('status change callback ',response);
    // localStorage.setItem('facebook_token', response.authResponse.accessToken)
    // var fbtoken = localStorage.getItem('facebook_token')
    // console.log(fbtoken);
    axios.post('http://localhost:3000/users',{}, {
      headers:{
        token: response.authResponse.accessToken
      }
    })
    .then(({data}) => {
      console.log('datanya nih');
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
  } else {
    // The person is not logged into your app or we are unable to tell.
    document.getElementById('status').innerHTML = 'Please log ' +
      'into this app.';
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
    cookie: true,  // enable cookies to allow the server to access 
    xfbml: true,  // parse social plugins on this page
    version: 'v2.10' // use graph api version 2.8
  });

  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  }, { scope: 'id,name,email,user_location' });

};

// Load the SDK asynchronously
(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
function currentUserLocation() {

    $(document).ready(function () {
        if ("geolocation" in navigator) { //check geolocation available 
            //try to get user current location using getCurrentPosition() method
            navigator.geolocation.getCurrentPosition(function (position) {
                $(".latlong").html(position.coords.latitude + " </br>" + position.coords.longitude);
            });
        } else {
            console.log("Browser doesn't support geolocation!");
        }
    });
}



currentUserLocation()
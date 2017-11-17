
function myFunction() {
    let radius = document.getElementById('radius').value
    let latlong = document.getElementsByClassName('latlong')[0].innerText.split(" ")
    var rad = radius
    var lat = latlong[0]
    var ln = latlong[1]
    localStorage.setItem('locationRad', rad)
    localStorage.setItem('locationLat', lat)
    localStorage.setItem('locationLong', ln)
}

function initMap() {
    let rad = localStorage.getItem('locationRad')
    let latitude = Number(localStorage.getItem('locationLat'))
    let longitude = Number(localStorage.getItem('locationLong'))
    //console.log(rad, "tesssssssssss", typeof (latitude), typeof (longitude))

    var pyrmont = { lat: latitude, lng: longitude };

    map = new google.maps.Map(document.getElementById('map'), {
        center: pyrmont,
        zoom: 15
    });

    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
        location: pyrmont,
        radius: rad,
        type: ['shopping_mall']
    }, callback);
}

function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
}

function createMarker(place) {
    $('#namePlace').append(
        `<br> <span class="place"><a href="trafi.html">${place.name}</a> </span> </br>`
    )

    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(place.name);
        infowindow.open(map, this);

    });

}

$(document).ready(function () {
    $(this).on("click", "span", function () {
        let dataLocation = $(this).text()
        console.log($(this).text())
        axios.post('http://localhost:3000/users', {
            dataLocation: dataLocation
        })
            .then(function ({ data }) {
                let locate = JSON.stringify(data)
                localStorage.setItem('location', locate)
                console.log(data)
            })
            .catch(function (err) {
                console.log(err)
            })



    })

})


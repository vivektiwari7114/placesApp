import React from 'react'

export default React.createClass({



     init() {

          window.pyrmont = {lat: 28.7041, lng: 77.1025};
          window.map = new google.maps.Map(document.getElementById('map'), {
                center: pyrmont,
                zoom: 12
          });

        var infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
          location: window.pyrmont,
          radius: 1500,
          type: ['restaurant']
        }, this.callback);
      },



      callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            this.createMarker(results[i]);
          }
        }
      },

      createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          position: placeLoc,
        });
        console.log(window.map);

        marker.setMap(window.map);


      },

  render() {
    return (
        <button onClick ={this.init}> Click ME</button>
        )
  }
})

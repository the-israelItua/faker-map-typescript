interface Place {
  location: {
    lat: number;
    lng: number;
  };
  markerContent: string;
}

export class Map {
  private googleMap: google.maps.Map;

  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(place: Place): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: place.location.lat,
        lng: place.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: place.markerContent,
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}

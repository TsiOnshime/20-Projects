
const scrollLocation = (position) => {
    const { latitude, longitude } = position.coords
    document.getElementById("location").textContent = `Your location is at latitude ${latitude} and longitude ${longitude}`
    document.getElementById("map").innerHTML=`<iframe width="700" height="300" src="https://maps.google.com/maps?q=${latitude},${longitude}&amp;z=15&amp;output=embed"</iframe>`
    
 
}

const errorCallback = (error) => {
    const { code } = error
    switch (code) {
        case GeolocationPositionError.TIMEOUT:
            return "We couldn't find your location in time refresh the page"

        case GeolocationPositionError.PERMISSION_DENIED:
            return "Give us you location first"
        
        case GeolocationPositionError.POSITION_UNAVAILABLE:
            return "This may seem odd but your location is not available"
        default:
            alert("here")
    }
}

const watchId = navigator.geolocation.watchPosition(
  scrollLocation,
  errorCallback,
  { timeout: 10_000 }
);
// ...existing code...

document.getElementById("stop-btn")?.addEventListener("click", () => {
  navigator.geolocation.clearWatch(watchId);
});
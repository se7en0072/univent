/**
 * Created by Hamid on 5/7/2017 AD.
 */
<!-- Add Google Maps -->
// <div id="googleMap"></div> -->
    function myMap() {
        var myCenter = new google.maps.LatLng(41.878114, -87.629798);
        var mapProp = {center:myCenter, zoom:12, scrollwheel:false, draggable:false, mapTypeId:google.maps.MapTypeId.ROADMAP};
        var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
        var marker = new google.maps.Marker({position:myCenter});
        marker.setMap(map);
    }
   // <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8841836736046!2d51.41892921509948!3d35.67985363765526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e01f27917eb6b%3A0xe953925ee5058ce!2sGolestan+Palace!5e0!3m2!1sen!2sir!4v1494135301135" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>

   // To use this code on your website, get a free API key from Google.
   // Read more at: https://www.w3schools.com/graphics/google_maps_basic.asp


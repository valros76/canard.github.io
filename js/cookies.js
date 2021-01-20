function setCookie(cname, cvalue, exdays) {
   var d = new Date();
   d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
   var expires = "expires=" + d.toUTCString();
   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
} function getCookie(cname) {
   var name = cname + "=";
   var decodedCookie = decodeURIComponent(document.cookie);
   var ca = decodedCookie.split(';');
   for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
         c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
         return c.substring(name.length, c.length);
      }
   }
   return "";
}
if (getCookie("cookie_consentement") === "") {
   let header_container = document.querySelector(".header")
   let header_container_id = document.getElementById("header")
   let main_container = document.querySelector(".container")
   let main_content
   let header
   if(main_container){
      main_content = main_container
   }else{
      main_content = document.querySelector("main")
   }
   if(header_container){
      header = header_container
   }else if(header_container_id){
      header = document.querySelector("#header")
   }else{
      header = document.querySelector("header")
   }
   let body = document.body
   let cookies_band = document.createElement("div")
   cookies_band.setAttribute("class", "cookies-container")
   body.appendChild(cookies_band)
   let cookies_title = document.createElement("h2")
   cookies_title.textContent = "Cookies et données personnelles"
   cookies_band.appendChild(cookies_title)
   let cookies_para = document.createElement("p")
   cookies_para.innerHTML = `Univers du Canard utilise des outils tiers déposant des cookies sur votre ordinateur dans un but statistique. Pour toute question sur l'utilisation de vos données, veuillez consulter <a href="mentions.html" target="_blank">les mentions légales</a> de notre site.`
   cookies_band.appendChild(cookies_para)
   let cookies_cta_line = document.createElement('div')
   cookies_cta_line.setAttribute("class", "cookies-cta-line")
   cookies_band.appendChild(cookies_cta_line)
   let cookies_cta = document.createElement("button")
   cookies_cta.setAttribute("id", "cookies-cta")
   cookies_cta.textContent = "J'accepte les conditions"
   cookies_cta_line.appendChild(cookies_cta)
   let cookies_cta_refuse = document.createElement("button")
   cookies_cta_refuse.setAttribute("id", "cookies-cta-refuse")
   cookies_cta_refuse.textContent = "Je refuse"
   cookies_cta_line.appendChild(cookies_cta_refuse)
   header.style.filter = "grayscale(1)"
   main_content.style.filter = "grayscale(1)"
   body.style.pointerEvents = "none"
   cookies_band.style.pointerEvents = "auto"
   body.style.overflow = "hidden"
   let deleteCookiesBand = () => {
      body.removeChild(cookies_band)
   }
   cookies_cta.addEventListener("click", () => {
      if (getCookie("cookie_consentement") != "") {
         deleteCookiesBand()
      } else {
         setCookie("cookie_consentement", true, 60)
         deleteCookiesBand()
      }
      header.style.filter = "grayscale(0)"
      main_content.style.filter = "grayscale(0)"
      body.style.pointerEvents = "auto"
      cookies_band.style.pointerEvents = "none"
      body.style.overflow = "auto"
   })
   cookies_cta_refuse.addEventListener("click", () => {
      if (getCookie("cookie_consentement") != "") {
         deleteCookiesBand()
      } else {
         deleteCookiesBand()
      }
      header.style.filter = "grayscale(0)"
      main_content.style.filter = "grayscale(0)"
      body.style.pointerEvents = "auto"
      cookies_band.style.pointerEvents = "none"
      body.style.overflow = "auto"
   })
}
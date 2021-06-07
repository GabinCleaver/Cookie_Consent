const cookieBox = document.querySelector(".wrapper"),
acceptBtn = cookieBox.querySelector("button");
acceptBtn.onclick = ()=>{
  document.cookie = "CookieBy=Gabin; max-age="+60*60*24*30;
  if(document.cookie){
    cookieBox.classList.add("hide");
  }else{ 
    alert("Le cookie ne peut pas être défini ! Veuillez débloquer ce site du paramétrage des cookies de votre navigateur.");
  }
}
let checkCookie = document.cookie.indexOf("CookieBy=Gabin");
checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");
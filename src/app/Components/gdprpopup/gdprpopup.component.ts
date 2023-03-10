import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gdprpopup',
  templateUrl: './gdprpopup.component.html',
  styleUrls: ['./gdprpopup.component.css']
})
export class GdprpopupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var popUp = document.getElementById("cookiePopup");
    //When user clicks the accept button
    document.getElementById("acceptCookie")?.addEventListener("click", () => {
      //Create date object
      let d = new Date();
      //Increment the current time by 1 minute (cookie will expire after 1 minute)
      d.setMinutes(2 + d.getMinutes());
      //Create Cookie withname = myCookieName, value = thisIsMyCookie and expiry time=1 minute
      console.log(d)
      document.cookie = "myCookieName=thisIsMyCookie; expires = " + d + ";";
      console.log(document.cookie)
      //Hide the popup
      popUp?.classList.add("hide");
      popUp?.classList.remove("show");
    });

    //Check if cookie is already present
    const checkCookie = () => {
      //Read the cookie and split on "="
      let input = document.cookie.split("=");
      //Check for our cookie
      if (input[0] == "myCookieName") {
        //Hide the popup
        popUp?.classList.add("hide");
        popUp?.classList.remove("show");
      } else {
        //Show the popup
        popUp?.classList.add("show");
        popUp?.classList.remove("hide");
      }
    };
    //Check if cookie exists when page loads
    setTimeout(() => {
      checkCookie();
    }, 2000);


  }

}


import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";


@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    document.getElementById("menu-toggle").addEventListener("click", () => {
      document.getElementById("sidebar-wrapper").classList.add("active");
    });

    document.getElementById("menu-close").addEventListener("click", () => {
      document.getElementById("sidebar-wrapper").classList.remove("active");
    });
    $(".links").click(function() {
      var destino = $(this.hash);
      if (destino.length == 0) {
        destino = $('a[name="' + this.hash.substr(1) + '"]');
      }
      if (destino.length == 0) {
        destino = $("#sidebar-wrapper");
      }
      $("html, body").animate(
        { scrollTop: destino.offset().top },
        500,
        function() {
          $("#sidebar-wrapper").removeClass("active");
        }
      );
      return false;
    });

  }
}

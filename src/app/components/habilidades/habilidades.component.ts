import { Component, OnInit } from "@angular/core";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-habilidades",
  templateUrl: "./habilidades.component.html",
  styleUrls: ["./habilidades.component.scss"]
})
export class HabilidadesComponent implements OnInit {
  images =  [
    'https://firebasestorage.googleapis.com/v0/b/inovix-fc770.appspot.com/o/img%2Faptitudes%2F4.jpg?alt=media&token=763caf62-d032-4aa4-b5e7-824da9a6f97f',
    'https://firebasestorage.googleapis.com/v0/b/inovix-fc770.appspot.com/o/img%2Faptitudes%2F5.jpg?alt=media&token=eb2333db-08af-4bbe-91c3-a88d91ce71f9',
    'https://firebasestorage.googleapis.com/v0/b/inovix-fc770.appspot.com/o/img%2Faptitudes%2F2.jpg?alt=media&token=e4041579-8a34-4498-bf8e-ffd4c01eeaf9',
    'https://firebasestorage.googleapis.com/v0/b/inovix-fc770.appspot.com/o/img%2Faptitudes%2F6.jpg?alt=media&token=9126fea7-bbab-45a0-8047-db9790a233fb',
    'https://firebasestorage.googleapis.com/v0/b/inovix-fc770.appspot.com/o/img%2Faptitudes%2F7.jpg?alt=media&token=3a224137-83e8-4898-a457-dcb960261464',
    'https://firebasestorage.googleapis.com/v0/b/inovix-fc770.appspot.com/o/img%2Faptitudes%2F1.jpg?alt=media&token=d82e917c-82b1-4330-b989-63ca7ea8bfdf',
    'https://firebasestorage.googleapis.com/v0/b/inovix-fc770.appspot.com/o/img%2Faptitudes%2F3.jpg?alt=media&token=fc79c81e-d14f-40fe-8d7e-5b1953b2dae2',
    'https://firebasestorage.googleapis.com/v0/b/inovix-fc770.appspot.com/o/img%2Faptitudes%2F8.jpg?alt=media&token=3bcdb490-88af-4a89-bb5a-5f1121a3f653',
    'https://firebasestorage.googleapis.com/v0/b/inovix-fc770.appspot.com/o/img%2Faptitudes%2F9.jpg?alt=media&token=96ac7446-fa90-4655-b901-1676028002dc',
    'https://firebasestorage.googleapis.com/v0/b/inovix-fc770.appspot.com/o/img%2Faptitudes%2F10.jpg?alt=media&token=f8dcf06a-4d96-496a-a578-e88b2e3aa4f8',
    'https://firebasestorage.googleapis.com/v0/b/inovix-fc770.appspot.com/o/img%2Faptitudes%2F11.jpg?alt=media&token=2f2cdb10-9154-40b0-b5dc-1052460411bb',
    'https://firebasestorage.googleapis.com/v0/b/inovix-fc770.appspot.com/o/img%2Faptitudes%2F12.jpg?alt=media&token=7c0e8595-6e87-4b1a-8e2c-dc10bf6cb0fc',
    'https://firebasestorage.googleapis.com/v0/b/inovix-fc770.appspot.com/o/img%2Faptitudes%2F13.jpg?alt=media&token=b0eb280e-6f8e-4448-8f87-f62442d251ad',
    'https://firebasestorage.googleapis.com/v0/b/inovix-fc770.appspot.com/o/img%2Faptitudes%2F14.jpg?alt=media&token=dfbbc43b-67bf-4e14-bd51-466ea806e827',
    'https://firebasestorage.googleapis.com/v0/b/inovix-fc770.appspot.com/o/img%2Faptitudes%2F15.jpg?alt=media&token=cca016e5-4fa7-45c8-843b-92d96c671be2'
  ];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = false;
  }

  ngOnInit() {}
}

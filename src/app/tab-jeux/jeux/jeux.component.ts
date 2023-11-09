import { Component } from '@angular/core';

@Component({
  selector: 'gara-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.scss']
})
export class JeuxComponent {
  jeuxVedette = [
    {
      image:"image1.png",
      avatar:"avatar1.png",
      title:"PAKO Forever",
      description:"Des courses poursuites épiques!",
      downloadUrl:"downloadUrl"
    },
    {
      image:"image2.png",
      avatar:"avatar2.png",
      title:"Two dots",
      description:"Attention jeu très addictif! ",
      downloadUrl:"downloadUrl"
    },
    {
      image:"image3.jpg",
      avatar:"avatar3.png",
      title:"Tetragon",
      description:"Tetragon",
      downloadUrl:"downloadUrl"
    }
  ]

  swipe(b){
    console.log(b)
  }
}

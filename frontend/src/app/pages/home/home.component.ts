import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild('full_image_box') full_image_box: any;
  @ViewChild('full_image') full_image: any;
  
  title: string = 'Home';


  constructor() { }


  openImg(img: string) {
    this.full_image_box.nativeElement.style.display = 'flex';
    this.full_image.nativeElement.src = img;
    console.log('open');
  }
  closeImg() {
    this.full_image_box.nativeElement.style.display = 'none';
    console.log('close');
  }

}

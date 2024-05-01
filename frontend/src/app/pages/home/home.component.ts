import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('full_image_box') full_image_box: any;
  @ViewChild('full_image') full_image: any;
  
  title: string = 'Home';

  constructor() { }

  ngAfterViewInit(): void {
    this.full_image_box.nativeElement.style.display = 'none'; 
  }

  openImg(img: string) {
    this.full_image_box.nativeElement.style.display = 'flex';
    this.full_image.nativeElement.src = img;
  }
  closeImg() {
    this.full_image_box.nativeElement.style.display = 'none';
  }

}

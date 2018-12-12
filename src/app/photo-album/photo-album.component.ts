import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.scss']
})
export class PhotoAlbumComponent implements OnInit {
  images: any[] = [];
  minWidth = 200;
  maxWidth = 300;
  minHeight = 200;
  maxHeight = 300;
  baseUrl = 'https://picsum.photos';

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      this.images.push({
        url: `${this.baseUrl}/${this.generateRandomWidth()}/${this.generateRandomHeight()}`,
        class: this.getRandomClass()
      });
    }
  }

  generateRandomWidth() {
    return Math.floor(Math.random() * (this.maxWidth - this.minWidth) + this.minWidth);
  }

  generateRandomHeight() {
    return  Math.floor(Math.random() * (this.maxHeight - this.minHeight) + this.minHeight);
  }

  getRandomClass() {
    const num = Math.floor(Math.random() * 3);
    switch (num) {
      case 0:
        return 'horizontal';
      case 1:
        return 'vertical';
      case 2:
        return 'big';
      default:
        break;
    }
  }
}

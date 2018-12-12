import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

interface IImage {
  url: string;
  class: string;
}

@Component({
  selector: 'app-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.scss']
})
export class PhotoAlbumComponent implements OnInit {
  // array to store images
  images: IImage[] = [];

  // dimensions initial boundary values
  minWidth = 200;
  maxWidth = 300;
  minHeight = 200;
  maxHeight = 300;

  // Url to fetch random images from picsum photos
  baseUrl = 'https://picsum.photos';
  previewImage: string;

  constructor(public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
    // Loading 100 images initially
    this.addImages(100);
  }

  /**
   * generateRandomWidth
   * To regenate random width for image to get from picsum photos
   */
  generateRandomWidth() {
    return Math.floor(Math.random() * (this.maxWidth - this.minWidth) + this.minWidth);
  }

  /**
   * generateRandomHeight
   * To regenate random height for image to get from picsum photos
   */
  generateRandomHeight() {
    return  Math.floor(Math.random() * (this.maxHeight - this.minHeight) + this.minHeight);
  }

  /**
   * onScroll
   * listening to scroll event and adding images to images array
   */
  onScroll() {
    this.addImages();
  }

  /**
   * addImages
   * method to add images to images array
   */
  addImages(length = 10) {
    for (let i = 0; i < length; i++) {
      this.images.push({
        url: `${this.baseUrl}/${this.generateRandomWidth()}/${this.generateRandomHeight()}`,
        class: this.getRandomClass()
      });
    }
  }

  showPreview(image: IImage) {
    this.previewImage = image.url;
    this.ngxSmartModalService.getModal('myModal').open();
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

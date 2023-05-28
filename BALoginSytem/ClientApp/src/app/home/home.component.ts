import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  listStatus = [true, true, true, true];
  slideIndex = 1;

  showSlides(n: any) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      console.log(slides[i])
      this.listStatus[i] = true;
      /*slides[i].className += " dp-none";*/
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    this.listStatus[this.slideIndex - 1] = true;
    //slides[this.slideIndex - 1].className += " dp-block";
    dots[this.slideIndex - 1].className += " active";
  }
// Next/previous controls
 plusSlides(n:any) {
  this.showSlides(this.slideIndex += n);
}

// Thumbnail image controls
 currentSlide(n:any) {
  this.showSlides(this.slideIndex = n);
  };
  constructor() {
   //var slideIndex = 1;
   // function currentSlide(n: any) {
   //   showSlides(slideIndex = n);
   // };

   // function showSlides(n: any) {
   //   let i;
   //   let slides = document.getElementsByClassName("mySlides");
   //   let dots = document.getElementsByClassName("dot");
   //   if (n > slides.length) { slideIndex = 1 }
   //   if (n < 1) { slideIndex = slides.length }
   //   for (i = 0; i < slides.length; i++) {
   //     slides[i].className += " dp-none";
   //   }
   //   for (i = 0; i < dots.length; i++) {
   //     dots[i].className = dots[i].className.replace(" active", "");
   //   }
   //   slides[slideIndex - 1].className += " dp-block";
   //   dots[slideIndex - 1].className += " active";
   // }

  }

  ngOnInit() {
    this.showSlides(this.slideIndex);
  }
 
  

}

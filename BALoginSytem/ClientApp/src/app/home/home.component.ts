import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  listBanner = [
    {
      linkTopic: "https://bagps.vn/an-toan-tien-ich-va-ket-noi-dinh-vi-o-to-4g-dem-lai-loi-ich-to-lon-cho-xe-o-to-dien-d2412",
      title: "AN TOÀN, TIỆN ÍCH VÀ KẾT NỐI: ĐỊNH VỊ Ô TÔ 4G ĐEM LẠI LỢI ÍCH TO LỚN CHO XE Ô TÔ ĐIỆN",
      description: "Tìm hiểu lợi ích to lớn mà công nghệ định vị ô tô 4G mang lại cho xe ô tô điện, từ theo dõi vị trí chính xác đến quản lý hiệu suất và tiết kiệm năng lượng.",
      linkImg:"https://bagps.vn/public/media/san-pham/thanh/thang_5/an_toan,_ti%E1%BB%87n_ich_va_k%E1%BA%BFt_n%E1%BB%91i_%C4%90%E1%BB%8Bnh_v%E1%BB%8Bo_to_4g_%C4%91em_l%E1%BA%A1i_l%E1%BB%A3i_ich_to_l%E1%BB%9Bn_cho_xe_o_to_%C4%91i%E1%BB%87n..jpg"
    },
    {
      linkTopic: "https://bagps.vn/bo-sung-kien-thuc-ve-camera-xe-container-la-can-thiet-d2422",
      title: "BỔ SUNG KIẾN THỨC VỀ CAMERA XE CONTAINER LÀ CẦN THIẾT",
      description: "Những kiến thức về camera xe container là quá quan trọng các đơn vị vận tải cần nắm bắt được và liên tục cập nhật những thông tin mới.",
      linkImg: "https://bagps.vn/public/media/seo_2022/bo-sung-kien-thuc-ve-camera-xe-container-la-can-thiet_(2).jpg"
    },
    {
      linkTopic: "https://bagps.vn/lien-tuc-cap-nhat-nhung-thong-tin-ve-camera-xe-dau-keo-d2425",
      title: "LIÊN TỤC CẬP NHẬT NHỮNG THÔNG TIN VỀ CAMERA XE ĐẦU KÉO",
      description: "Những thông tin mới nhất về camera xe đầu kéo cần được những doanh nghiệp kinh doanh phương tiện này cập nhật thường xuyên.",
      linkImg: "https://bagps.vn/public/media/seo_2022/lien-tuc-cap-nhat-nhung-thong-tin-ve-camera-xe-dau-keo_(2).jpg"
    }
  ];
  listBranch = [
    {
      title: "TRỤ SỞ HÀ NỘI",
      address:"Trụ sở Hà Nội: Lô 14 Nguyễn Cảnh Dị, P. Đại Kim, Q. Hoàng Mai, TP. Hà Nội."
    },
    {
      title: "HẢI PHÒNG",
      address: "Căn BH 01- 47 Khu đô thị Vinhomes Imperia, Đ. Bạch Đằng, P. Thượng Lý, Q. Hồng Bàng, TP. Hải Phòng."
    }
  ]
  slideIndex = 1;


  showSlidesNoTimeout(n: any) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      //console.log(slides[i])
      //this.listStatus[i] = true;

      slides[i].className = slides[i].className.replace(" dp-none", "");
      slides[i].className = slides[i].className.replace(" dp-block", "");

      slides[i].className += " dp-none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    //this.listStatus[this.slideIndex - 1] = true;
    slides[this.slideIndex - 1].className = slides[this.slideIndex - 1].className.replace(" dp-none", "");
    slides[this.slideIndex - 1].className += " dp-block";
    dots[this.slideIndex - 1].className += " active";
    //setTimeout(() => {
    //  this.showSlides(this.slideIndex += 1)
    //}, 5000)

    //(this.showSlides(), 1000); // Change image every 5 seconds
  }

  showSlides(n: any) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      //console.log(slides[i])
      //this.listStatus[i] = true;

      slides[i].className = slides[i].className.replace(" dp-none", "");
      slides[i].className = slides[i].className.replace(" dp-block", "");

      slides[i].className += " dp-none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    //this.listStatus[this.slideIndex - 1] = true;
    slides[this.slideIndex - 1].className = slides[this.slideIndex - 1].className.replace(" dp-none", "");
    slides[this.slideIndex - 1].className += " dp-block";
    dots[this.slideIndex - 1].className += " active";
    setTimeout(() => {
      this.showSlides(this.slideIndex += 1)
    }, 5000)

      //(this.showSlides(), 1000); // Change image every 5 seconds
  }
// Next/previous controls
 plusSlides(n:any) {
  this.showSlidesNoTimeout(this.slideIndex += n);
}

// Thumbnail image controls
 currentSlide(n:any) {
  this.showSlidesNoTimeout(this.slideIndex = n);
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
    //this.showSlides(this.slideIndex);
  }
 
  ngAfterViewInit() {
    //this.showSlides(this.slideIndex);
  }

}

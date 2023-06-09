import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
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
    },
     {
       linkTopic: "https://bagps.vn/doanh-nghiep-van-tai-hanh-khach-chuyen-nghiep-hon-khi-lap-dat-camera-xe-khach-35-cho-d2438",
       title: "DOANH NGHIỆP VẬN TẢI HÀNH KHÁCH CHUYÊN NGHIỆP HƠN KHI LẮP ĐẶT CAMERA XE KHÁCH 35 CHỖ",
       description: "Việc lắp đặt camera trong xe khách 35 chỗ là một biện pháp quan trọng giúp nâng cao mức độ an ninh và giám sát trong lĩnh vực vận tải hành khách. Nhờ vào công nghệ camera hiện đại, các doanh nghiệp vận tải có thể tận dụng những lợi ích quan trọng mà nó mang lại.",
       linkImg: "https://bagps.vn/public/media/seo_2022/doanh-nghiep-van-tai-hanh-khach-chuyen-nghiep-hon-khi-lap-dat-camera-xe-khach-35-cho_(2).jpg"
    },
    {
      linkTopic: "https://bagps.vn/hien-dai-hoa-quan-ly-van-tai-voi-giam-sat-hanh-trinh-4g-buoc-dot-pha-trong-cong-nghe-van-chuyen-d2432",
      title: "HIỆN ĐẠI HÓA QUẢN LÝ VẬN TẢI VỚI GIÁM SÁT HÀNH TRÌNH 4G: BƯỚC ĐỘT PHÁ TRONG CÔNG NGHỆ VẬN CHUYỂN",
      description: "Giám sát hành trình 4G Hiện đại hóa quản lý vận tải với định vị. Tận dụng công nghệ 4G để nâng cao hiệu suất và đảm bảo an toàn trong quản lý đội xe.",
      linkImg: "https://bagps.vn/public/media/san-pham/thanh/thang_5/hiện_đại_hoa_quản_ly_vận_tải_với_giam_sat_hanh_trinh_4g_bước_đột_pha_trong_cong_nghệ_vận_chuyển.jpg"
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
    },
    {
      title: "CHI NHÁNH MIỀN TRUNG",
      address: "Số B5-15, ngõ 26, Đ. Nguyễn Thái Học, TP. Vinh, Nghệ An.\nSố 402, Đ.Trần Phú, X.Thạch Trung, TP.Hà Tĩnh, Hà Tĩnh."
    },
    {
      title: "ĐÀ NẴNG",
      address: "Lô 1 Khu B2-19, KĐT Biệt thự sinh thái, Công Viên Văn Hóa Làng Quê và Quần thể Du lịch sông nước, P. Hòa Quý, Ngũ Hành Sơn, TP. Đà Nẵng."
    },
    {
      title: "TP. HỒ CHÍ MINH",
      address: "Số 9, Đường 37, KĐT Vạn Phúc, P. Hiệp Bình Phước, TP. Thủ Đức, TP. Hồ Chí Minh."
    }
  ]
  slideIndex = 1;
  username = "";
  pass = "";
  notis = "";
  showMes = false;

  showSlidesNoTimeout(n: any) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      
      slides[i].className = slides[i].className.replace(" dp-none", "");
      slides[i].className = slides[i].className.replace(" dp-block", "");

      slides[i].className += " dp-none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
     
    slides[this.slideIndex - 1].className = slides[this.slideIndex - 1].className.replace(" dp-none", "");
    slides[this.slideIndex - 1].className += " dp-block";
    dots[this.slideIndex - 1].className += " active";
    
  }

  showPass() {
    let password = document.querySelector('#exampleInputPassword1');
    if (password) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type);
    }
  }

  showSlides(n: any) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
       
      slides[i].className = slides[i].className.replace(" dp-none", "");
      slides[i].className = slides[i].className.replace(" dp-block", "");

      slides[i].className += " dp-none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
     
    slides[this.slideIndex - 1].className = slides[this.slideIndex - 1].className.replace(" dp-none", "");
    slides[this.slideIndex - 1].className += " dp-block";
    dots[this.slideIndex - 1].className += " active";
    setTimeout(() => {
      this.showSlides(this.slideIndex += 1)
    }, 5000)

       
  }
 
 plusSlides(n:any) {
  this.showSlidesNoTimeout(this.slideIndex += n);
}

// Thumbnail image controls
 currentSlide(n:any) {
  this.showSlidesNoTimeout(this.slideIndex = n);
  };
  constructor(private appComponent: AppComponent, private translate: TranslateService) {
   

  }

  login() {
    if (this.username == 'admin' && this.pass == 'admin') {
   
      this.translate
        .get('not_login')
        .subscribe((successMessage: string) => {
           
          this.notis = successMessage;
          this.showMes = true;
        });

    } else {
      
      this.translate
        .get('wrong_acc')
        .subscribe((successMessage: string) => {
           
          this.notis = successMessage;
          this.showMes = true;
        });
      
       
    }
  }

  ngOnInit() {
     
  }
 
  ngAfterViewInit() {
    this.showSlides(this.slideIndex);
  }

}

import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Home } from './Models/homepage';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://halogen-live.onrender.com';
  private bookUrl =
    'https://dev-halobiz-identity-dev-halobiz-mail.azurewebsites.net/Mail/WebsiteServiceAutoReply';
  constructor(private http: HttpClient) {}

  bookService(formData: any) {
    try {
      return this.http.post(this.bookUrl, formData, httpOptions);
    } catch (error: any) {
      return error.message;
    }
  }
  getHomePage() {
    return this.http
      .get<Home[]>(
        `${this.apiUrl}/api/pages?fields=name,businessSectionHeader,businessSectionSubHeader,reviewHeader&populate[banners][populate][0]=bannerImage,reviewHeader&populate[fybrights][populate][0]=solutionName&populate[fyblefts][populate][0]=solutionName`
      )
      .pipe(
        map((res: any) => {
          return res.data[0];
        })
      );
  }
  getNavBar() {
    return this.http.get(`${this.apiUrl}/api/navbars?populate=*`).pipe(
      map((res: any) => {
        return res.data[0];
      })
    );
  }

  getProductPage(id: any) {
    return this.http
      .get(
        `${this.apiUrl}/api/product-pages/${id}?populate[2]=product-pages&populate[0]=products.productImage&populate[1]=product_banners.name`
      )
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }
  getProducts() {
    return this.http.get(`${this.apiUrl}/api/products?`).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }
  getReports(page: any) {
    const limit = 10; // Number of items per page
    const start = (page - 1) * limit; // Calculate the start index

    return this.http
      .get(
        `${this.apiUrl}/api/security-reports?pagination[start]=${start}&pagination[limit]=${limit}&sort=createdAt:desc&populate=*`
      )
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }
  getCareerReports(page: any) {
    const limit = 10; // Number of items per page
    const start = (page - 1) * limit; // Calculate the start index

    return this.http
      .get(
        `${this.apiUrl}/api/career-reports?pagination[start]=${start}&pagination[limit]=${limit}&sort=createdAt:desc&populate=*`
      )
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }
  getProductImage(id: any) {
    return this.http
      .get(`${this.apiUrl}/api/product-pages/${id}?populate=*`)
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }

  getContact() {
    return this.http.get(`${this.apiUrl}/api/contact-pages?populate=*`).pipe(
      map((res: any) => {
        return res.data[0];
      })
    );
  }

  getAboutPage() {
    return this.http
      .get(
        `${this.apiUrl}/api/about-pages?popluate[1]=about-pages&populate[0]=management_teams.image`
      )
      .pipe(
        map((res: any) => {
          return res.data[0];
        })
      );
  }

  getAboutPageImage() {
    return this.http.get(`${this.apiUrl}/api/about-pages?populate=*`).pipe(
      map((res: any) => {
        return res.data[0];
      })
    );
  }
  getWhyHalogenPage() {
    return this.http
      .get(
        `${this.apiUrl}/api/why-halogens?populate[1]=why-halogen&populate[0]=faqs&populate[2]=solution_carousels.image&populate[4]=why_uses.image`
      )
      .pipe(
        map((res: any) => {
          return res.data[0];
        })
      );
  }

  getWhyHalogenImage() {
    return this.http.get(`${this.apiUrl}/api/why-halogens?populate=*`).pipe(
      map((res: any) => {
        return res.data[0];
      })
    );
  }

  getClientPage() {
    return this.http
      .get(
        `${this.apiUrl}/api/client-pages?populate[1]=contact-pages&populate[0]=client_images.clientImage`
      )
      .pipe(
        map((res: any) => {
          return res.data[0];
        })
      );
  }
  getNewsandEvents() {
    return this.http
      .get(`${this.apiUrl}/api/news-posts?sort[0]=createdAt:desc&populate=*`)
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }
  getBlogPosts() {
    return this.http
      .get(`${this.apiUrl}/api/news-and-events?populate[0]=blogposts.mainImage`)
      .pipe(
        map((res: any) => {
          return res.data[0];
        })
      );
  }
  getOneNewsPost(id: any) {
    return this.http
      .get(`${this.apiUrl}/api/news-posts/${id}/?populate=*`)
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }
  getOneBlogPost(id: any) {
    return this.http.get(`${this.apiUrl}/api/blogposts/${id}/?populate=*`).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  getGalleryPhotos() {
    return this.http.get(`${this.apiUrl}/api/photo-galleries/?populate=*`).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }
  getOneGalleryPhotos(id: any) {
    return this.http
      .get(`${this.apiUrl}/api/photo-galleries/${id}/?populate=*`)
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }
  getGalleryVideos() {
    return this.http.get(`${this.apiUrl}/api/video-galleries/?populate=*`).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }
  getOneGalleryVideos(id: any) {
    return this.http
      .get(`${this.apiUrl}/api/video-galleries/${id}/?populate=*`)
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }
}

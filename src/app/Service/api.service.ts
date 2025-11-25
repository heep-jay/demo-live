import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Home } from './Models/homepage';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

const httpOption = {
  headers: new HttpHeaders({
    'Cache-Control': 'max-age=7200',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // private apiUrl = 'http://localhost:1337';
  private apiUrl = 'https://halogen-live.onrender.com';
  private bookUrl =
    'https://dev-mail.halobizapps.com/Mail/WebsiteServiceAutoReply';
  constructor(private http: HttpClient) {}

  searchServices(query: string): Observable<any[]> {
    const url = `${this.apiUrl}/api/product-pages?filters[productName][$containsi]=${query}&populate=*`; // Partial match with 'contains'
    return this.http.get<any[]>(url);
  }
  bookService(formData: any): Observable<any> {
    try {
      return this.http.post(this.bookUrl, formData, httpOptions).pipe(
        map((res: any) => {
          return res;
        })
      );
    } catch (error: any) {
      return error.message;
    }
  }
  getHomePage() {
    const customHeaders = new HttpHeaders().set(
      'Cache-Control',
      'max-age=7200'
    ); // Add Cache-Control header for 2 hours (7200 seconds)

    const requestOptions = {
      headers: customHeaders,
    };
    return this.http
      .get<Home[]>(
        `${this.apiUrl}/api/pages?fields=name,businessSectionHeader,businessSectionSubHeader,reviewHeader&populate[banners][populate][0]=bannerImage,reviewHeader&populate[fybrights][populate][0]=solutionName&populate[fyblefts][populate][0]=solutionName`,
        requestOptions
      )
      .pipe(
        map((res: any) => {
          return res.data[0];
        })
      );
  }
  getNavBar(): Observable<any> {
    const customHeaders = new HttpHeaders().set(
      'Cache-Control',
      'max-age=7200'
    ); // Add Cache-Control header for 2 hours (7200 seconds)

    const requestOptions = {
      headers: customHeaders,
    };

    return this.http
      .get(`${this.apiUrl}/api/navbars?populate=*`, requestOptions)
      .pipe(
        map((res: any) => {
          return res.data[0];
        })
      );
  }

  getProductPage(id: any) {
    return this.http
      .get(
        `${this.apiUrl}/api/product-pages/${id}?populate[2]=product-pages&populate[0]=products.productImage&populate[1]=product_banners.name`,
        httpOption
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
        `${this.apiUrl}/api/security-reports?pagination[start]=0&pagination[limit]=-1&sort=createdAt:desc&populate=*`
      )
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }

  getItems(page: number, pageSize: number): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/api/security-reports?_start=${
        (page - 1) * pageSize
      }&_limit=${pageSize}`
    );
  }

  getTotalItems(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/security-reports/count`);
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
    const customHeaders = new HttpHeaders().set(
      'Cache-Control',
      'max-age=7200'
    ); // Add Cache-Control header for 2 hours (7200 seconds)

    const requestOptions = {
      headers: customHeaders,
    };
    return this.http
      .get(
        `${this.apiUrl}/api/news-posts?sort[0]=createdAt:desc&populate=*`,
        requestOptions
      )
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }
  getBlogPosts() {
    const customHeaders = new HttpHeaders().set(
      'Cache-Control',
      'max-age=7200'
    ); // Add Cache-Control header for 2 hours (7200 seconds)

    const requestOptions = {
      headers: customHeaders,
    };
    return this.http
      .get(
        `${this.apiUrl}/api/news-and-events?populate[0]=blogposts.mainImage&sort[0]=createdAt:desc`,
        requestOptions
      )
      .pipe(
        map((res: any) => {
          return res.data[0];
        })
      );
  }
  getLeadershipPosts() {
    return this.http
      .get(
        `${this.apiUrl}/api/halogen-thought-leadership-posts?sort[0]=createdAt:desc&populate=*`
      )
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }
  getOneHaloPost(id: any) {
    return this.http
      .get(
        `${this.apiUrl}/api/halogen-thought-leadership-posts/${id}/?populate=*`
      )
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }

  getRecentHaloPost() {
    return this.http
      .get(
        `${this.apiUrl}/api/halogen-thought-leadership-posts?sort=createdAt:desc&pagination[start]=0&pagination[limit]=1&populate=*`
      )
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
    return this.http
      .get(`${this.apiUrl}/api/photo-galleries/?sort=createdAt:desc&populate=*`)
      .pipe(
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

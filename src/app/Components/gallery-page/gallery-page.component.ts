import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/Service/api.service';
interface Item {
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css'],
})
export class GalleryPageComponent implements OnInit {
  postId: string | number | null = null;
  fdata: any;
  pix: any;
  caption: string = '';
  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.postId = this.route.snapshot.paramMap.get('id');
    this.canonicalUrl();
    this.api.getOneGalleryPhotos(this.postId).subscribe((data: any) => {
      this.caption = data.attributes.caption;
      // this.photos = data.attributes.photos
      this.pix = data.attributes.photos.data;
    });
  }
  canonicalUrl(): string {
    // Get the current route
    const currentRoute = this.router.url;
    // Construct the canonical URL based on the current route
    return `https://halogen-group.com${currentRoute}`;
  }
}

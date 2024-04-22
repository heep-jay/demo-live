import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/Service/api.service';

@Component({
  selector: 'app-videopage',
  templateUrl: './videopage.component.html',
  styleUrls: ['./videopage.component.css'],
})
export class VideopageComponent implements OnInit {
  postId: string | number | null = null;
  fdata: any;
  pix: any;
  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.canonicalUrl();
    this.postId = this.route.snapshot.paramMap.get('id');
    this.api.getOneGalleryVideos(this.postId).subscribe((data: any) => {
      this.pix = data.attributes.videos.data;
    });
  }
  canonicalUrl(): string {
    // Get the current route
    const currentRoute = this.router.url;
    // Construct the canonical URL based on the current route
    return `https://halogen-group.com${currentRoute}`;
  }
}

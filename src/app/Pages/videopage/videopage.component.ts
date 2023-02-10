import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/Service/api.service';


@Component({
  selector: 'app-videopage',
  templateUrl: './videopage.component.html',
  styleUrls: ['./videopage.component.css']
})
export class VideopageComponent implements OnInit {

  postId: string | number | null = null
  fdata: any;
  pix: any
  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    this.postId = this.route.snapshot
      .paramMap.get('id');
    console.log(this.postId)
    this.api.getOneGalleryVideos(this.postId).subscribe((data: any) => {
      // this.data = data
      // this.photos = data.attributes.photos
      this.pix = data.attributes.videos.data
      console.log(this.pix)

    })
  }

}

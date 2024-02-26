import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/Service/api.service';

@Component({
  selector: 'app-halodigest',
  templateUrl: './halodigest.component.html',
  styleUrls: ['./halodigest.component.css'],
})
export class HalodigestComponent implements OnInit {
  posts: any = [];
  constructor(private api: ApiService, private titleService: Title) {}

  ngOnInit(): void {
    const pageTitle = 'Halogen | Halodigest';
    this.setPageTitle(pageTitle);

    this.api.getLeadershipPosts().subscribe((data: any) => {
      this.posts = data;
      console.log(this.posts);
    });
  }
  setPageTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}

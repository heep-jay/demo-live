import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/Service/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent implements OnInit {
  isLoading$ = this.loadingService.isLoading$;

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {}
}

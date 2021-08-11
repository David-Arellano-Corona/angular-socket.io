import { Component, OnInit } from '@angular/core';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  publications:any[] = []
  constructor(
    private homeService:HomeService
  ) { }

  ngOnInit(): void {
    this.homeService.getPublications().subscribe(data =>{
      this.publications = data.data.publication
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  info: any = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getInfoApi();
  }

  getInfoApi(){
    this.apiService.getInfoApi().subscribe(res =>{
      console.log(res);
      this.info = res;
    });
  }
}

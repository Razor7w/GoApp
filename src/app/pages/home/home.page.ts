import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  info: any = [];
  datocodificado: any;
  datoscaneado: {};
  constructor(private apiService: ApiService, private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
    //this.getInfoApi();
  }

  getInfoApi(){
    this.apiService.getInfoApi().subscribe(res =>{
      console.log(res);
      this.info = res;
    });
  }

  leerCode(){
    this.barcodeScanner.scan().then(barcodeData =>{
      this.datoscaneado = barcodeData;
    })
    .catch(err => {
      console.log('Error: ', err);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  orders : any = [];
  pivot : boolean = false;
  keyArray : any = []

  constructor(
    private api : ApiServiceService
  ){

  }

  async ngOnInit(){
    window.scrollTo(0, 0);
    this.pivot = false
    this.orders = await this.getData()
  }

  async getData(){
    return new Promise ((resolve,reject)=>{
      this.api.getData().subscribe((data:any) =>{
        resolve(data)
      })
    })
  }

  async pivotData(){
    window.scrollTo(0, 0);
    this.pivot = true
    this.orders = await this.getDataPivot()
    this.keyArray = Object.keys(this.orders[0])
  }

  async getDataPivot(){
    return new Promise ((resolve,reject)=>{
      this.api.getDataPivot().subscribe((data:any) =>{
        resolve(data)
      })
    })
  }

}

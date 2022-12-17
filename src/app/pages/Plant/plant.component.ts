import { HttpBackend, HttpClient } from "@angular/common/http";
import {Component, OnInit} from "@angular/core";
import { map } from "rxjs/operators";
import { Plants } from './../model/plants';
import { ActivatedRoute } from "@angular/router";
import { AnimateTimings } from "@angular/animations";

@Component({
  selector:"plant-page",
  templateUrl: "./plant.component.html",
  styleUrls: ["./plant.component.scss"]
})

export class PlantPage  implements OnInit{


  constructor(private route: ActivatedRoute,private http: HttpClient) {
  }
  id:any;
  Plant: any;
  ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')
    })
    this.getPlantById(this.id)

  }
  getPlantById(id: any){
    this.http.get(`htps://api.petiteweb.dev/plants/${id}`).subscribe((res) => {
      this.Plant = res
    })
  }
  onDeletePlant(id: string){
    this.http.delete(`htps://api.petiteweb.dev/plants/${id}`)
      .subscribe()
  }



}

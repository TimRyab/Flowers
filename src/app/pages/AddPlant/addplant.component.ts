import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Component} from "@angular/core";

@Component({
  selector:"add-plant-page",
  templateUrl: "./addplant.component.html",
  styleUrls: ["./addplant.component.scss"]
})

export class AddPlant {
 plants : {name: string, description: string, images: string, category: string, sunlight: number, watering: string, temperature: string }[] = []
  constructor(private http: HttpClient){
  }

  addPlant(plants){
    this.http.post<{name: string}>('https://api.petiteweb.dev/plants', plants)
      .subscribe((res) =>{
        console.log(res)

      })
  }
}

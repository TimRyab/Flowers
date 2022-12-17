import { HttpBackend, HttpClient } from "@angular/common/http";
import {Component, OnInit} from "@angular/core";
import { map } from "rxjs/operators";
import { Plants } from "../model/plants";

@Component({
  selector:"category-page",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"]
})

export class CategoryPage  implements OnInit{
  category: string[] = ["Домашние", "Уличные", "Садовые"]
  allPlants: Plants[] = []


  constructor(private http: HttpClient){

  }
  reloadCurrentPage() {
    window.location.reload();
  }

  ngOnInit() {
    this.fetchPlants()
  }

  onPlantCreate(plants: {name: string, description: string, images: string[], category: string, sunlight: number, watering:number, temperature: number}){
    console.log(plants)
    this.http.post<{name: string}>('https://api.petiteweb.dev/plants', plants)
      .subscribe((res) =>{
        console.log(res)
        alert("Ваше растение было добавлено")
        this.reloadCurrentPage()
      })
  }
  private fetchPlants(){
    this.http.get<{[key: string]: Plants}>('https://api.petiteweb.dev/plants')
      .pipe(map((res) => {
        const plants = []
        for(const key in res){
          if(res.hasOwnProperty(key)){
            plants.push({...res[key], id: key})
            console.log(res)
          }

        }
        return plants;
      }))
      .subscribe((plants)=>{
        console.log(plants)
        this.allPlants = plants;
      })
  }
}

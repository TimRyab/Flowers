import {Component} from "@angular/core";
import data from "../../../assets/data.json";

@Component({
  selector: "home-page",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})

export class HomePage{
  title = "Plants";
  word: string = "растений";
  setWord($event: any){
    this.word = $event;
  }
}

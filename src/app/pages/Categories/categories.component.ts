import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: "categories-page",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"]
})
export class CategoriesPage{
  category: string[] = ["Все цветы"]
}

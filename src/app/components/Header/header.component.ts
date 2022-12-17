import {Component} from "@angular/core";

@Component({
  selector: "main-header",
  templateUrl: "./header.component.html",
  styles: [
    `
    * {
    margin: 0;
    padding: 0;
}

    header{
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      font-size: 20px;
      
    }
        
    .logo{
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      font-size: 25px;
    }
    
    .active{
      color: purple;
    }

  li{
      display: inline;
      margin-left: 25px;
      cursor: pointer;
      transition: opacity 500ms ease;
      
      opacity: 0.5;
  }
    `
  ]
})

export class HeaderComponent{

}

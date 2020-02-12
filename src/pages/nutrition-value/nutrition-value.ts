import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx'; 
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'page-nutrition-value',
  templateUrl: 'nutrition-value.html'
})
export class NutritionValuesPage {

  private link: string = "https://trackapi.nutritionix.com/v2/natural/nutrients";
  private link2: string= "https://trackapi.nutritionix.com/v2/search/instant";

  data: Observable<any>;
  items:any = new Array<any>();
  constructor(public navCtrl: NavController, private http: HttpClient) {

  }

  getValue() {
// post request for apple nutrition values will be changed
    this.data = this.http.post(this.link, {query: "apple"}, {headers:{"x-app-id":"7832794a", "x-app-key":"eb702b0c07264c290926d6d8c3c2d998","x-remote-user-id":"0"}});
    this.data.subscribe(data =>{
      console.log(data);
      this.items=data.foods[0];
      console.log("Veri "+this.items.food_name);
    });

  }

  public getToDoList(){
    this.http.get('http://localhost/services/service.php').subscribe((response) => {
       this.items=response;
   }); 
  }

}

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
  private link2: string= "https://trackapi.nutritionix.com/v2/search/instant?query=";

  data: Observable<any>;
  items:any = new Array<any>();
  result:any = new Array<any>();
  results:any = new Array<any>();
  i: any;
  search: any = "";
  outsearch:any;
  constructor(public navCtrl: NavController, private http: HttpClient) {
    //this.getToDoList();
    this.i=0;
    this.outsearch=true;
  }

  getValue(name) {
    this.outsearch=true;
// post request for apple nutrition values will be changed
    this.data = this.http.post(this.link, {query: name}, {headers:{"x-app-id":"7832794a", "x-app-key":"eb702b0c07264c290926d6d8c3c2d998","x-remote-user-id":"0"}});
    this.data.subscribe(data =>{
      console.log(data);
      this.items=data.foods[0];
      console.log("Veri "+this.items.food_name);
    });

  }

  public getResults(search){
    this.http.get(this.link2+search, {headers:{"x-app-id":"7832794a", "x-app-key":"eb702b0c07264c290926d6d8c3c2d998"}} ).subscribe((response) => {
       this.result=response;
       console.log(this.result.common);
       console.log("liste uzunluğu "+this.result.common.length);
       console.log("COMMON 0 "+this.result.common[0]);
      this.results=this.result.common;
   }); 
  }

  onInput(event) {
    this.outsearch=false;
    if (this.search.length > 2) {
      console.log(this.outsearch);
      
      this.getResults(this.search);
    }
    else
      this.results = [];
  }


}

import { Component } from '@angular/core';

import { NutritionValuesPage } from '../nutrition-value/nutrition-value';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NutritionValuesPage;
  tab3Root = ContactPage;

  constructor() {

  }
}

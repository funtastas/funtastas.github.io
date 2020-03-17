import { Component } from '@angular/core';
import { categories } from './header/categories.mock';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ], 
})
export class AppComponent  {
  categories: any[] = categories;
}

import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title: 'Hello';

  ngDoCheck(): void {
    console.log('AppComponent DoCheck');
  }
  // tslint:disable-next-line:member-ordering
  movies = [{ title: 'm1' }, { title: 'm2' }, { title: 'm3' }];

  constructor() {
    setTimeout(() => {}, 3000);
  }

  onClick() {
    // this.movies[0].title = 'UPDATE';
    this.movies[0] = { title : 'UPDATE' };
  }
}

import { Component, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements DoCheck {

  @Input() movies: any;

  ngDoCheck(): void {
    console.log('MoviesComponent DoCheck');
  }

}

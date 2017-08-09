import { Component, Input, DoCheck, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieComponent implements DoCheck {

  @Input() movie: any;

  ngDoCheck(): void {
    console.log('MovieComponent DoCheck');
  }
}

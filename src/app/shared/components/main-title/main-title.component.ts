import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-title',
  imports: [],
  templateUrl: './main-title.component.html',
  styleUrl: './main-title.component.scss'
})
export class MainTitleComponent {

  @Input() title: string = '';

}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {NgxTypedJsModule} from 'ngx-typed-js';


@Component({
  selector: 'app-slider',
  imports: [RouterLink , NgxTypedJsModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {

}

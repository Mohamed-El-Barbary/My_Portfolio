import { Component } from '@angular/core';
import { HeroSectionComponent } from "../../shared/components/hero-section/hero-section.component";
import { SliderComponent } from "../../shared/components/slider/slider.component";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [HeroSectionComponent, SliderComponent , RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

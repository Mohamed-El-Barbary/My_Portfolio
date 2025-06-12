import { Component } from '@angular/core';
import { MainTitleComponent } from "../../shared/components/main-title/main-title.component";
import { ScrollPanelModule } from 'primeng/scrollpanel';

@Component({
  selector: 'app-about',
  imports: [MainTitleComponent,ScrollPanelModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
   .then(() => {
    const splash = document.getElementById('splash-screen');
    if (splash) {
      
      setTimeout(() => {
        splash.style.opacity = '0';
        setTimeout(() => splash.remove(), 400);
      }, 2500); 
    }
  })
  .catch((err) => console.error(err));

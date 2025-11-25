import { Component } from '@angular/core';
import { MainTitleComponent } from "../../shared/components/main-title/main-title.component";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact',
  imports: [MainTitleComponent ,CommonModule, FormsModule ], 
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  formData = {
    fullName: '',
    email: '',
    message: ''
  };

  statusMessage: string = '';
  statusType: 'success' | 'error' | '' = '';

  private formspreeEndpoint = 'https://formspree.io/f/xzzqvqww';

  constructor(private http: HttpClient) {}

  sendEmail() {
    const headers = new HttpHeaders({ 'Accept': 'application/json' });

    this.http.post(this.formspreeEndpoint, this.formData, { headers })
      .subscribe({
        next: () => {
          this.statusType = 'success';
          this.statusMessage = 'Your message has been sent successfully!';

          this.formData = { fullName: '', email: '', message: '' };

          setTimeout(() => this.statusMessage = '', 4000);
        },
        error: () => {
          this.statusType = 'error';
          this.statusMessage = 'Failed to send your message. Please try again.';

          setTimeout(() => this.statusMessage = '', 4000);
        }
      });
    }

}

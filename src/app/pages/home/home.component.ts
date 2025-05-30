import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { UrlRequestDTO } from '../../interfaces/urlRequestDTO';
import { UrlService } from '../../services/url.service';
import { UrlResponseDTO } from '../../interfaces/urlResponseDTO';

@Component({
  selector: 'app-home',
    imports: [
      FormsModule, 
      ClipboardModule, 
      CommonModule,
      ReactiveFormsModule
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  shortnerForm: FormGroup;
  textToCopy: string = '';
  expiresAt: string = '';

  constructor(
    private urlService: UrlService,
    private fb: FormBuilder
  ) {
    this.shortnerForm = this.fb.group({
      url: ['', [Validators.required, Validators.pattern('https?://.+')]]
    });
  }

  getShortenedUrl() {
    if( this.shortnerForm.valid) {
      const requestDto: UrlRequestDTO = {
        url: this.shortnerForm.value.url
      }
      this.urlService
        .getShortenedUrl(requestDto)
        .subscribe({
          next: (response: UrlResponseDTO) => {
            this.textToCopy = response.url;
            this.expiresAt = response.expiresAt;
          },
          error: (error) => {
            console.error('Error shortening URL:', error);
          }
        });
    }
  }
}

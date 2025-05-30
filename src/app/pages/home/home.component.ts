import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';

@Component({
  selector: 'app-home',
    imports: [FormsModule, ClipboardModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  textToCopy: string = 'ewrwerwerwerw';

  copyHeroName() {
  }
}

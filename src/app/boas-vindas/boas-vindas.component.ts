import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-boas-vindas',
  standalone: true,
  imports: [LoginComponent, CommonModule, MatButtonModule, MatIconModule  ],
  templateUrl: './boas-vindas.component.html',
  styleUrl: './boas-vindas.component.css'
})
export class BoasVindasComponent {
  constructor(private router: Router) {}

  irParaLogin() {
    this.router.navigate(['/login']);}


}

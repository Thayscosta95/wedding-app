import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-boas-vindas',
  standalone: true,
  imports: [LoginComponent, CommonModule],
  templateUrl: './boas-vindas.component.html',
  styleUrl: './boas-vindas.component.css'
})
export class BoasVindasComponent {
  constructor(private router: Router) {}

  irParaLogin() {
    this.router.navigate(['/login']);}


}

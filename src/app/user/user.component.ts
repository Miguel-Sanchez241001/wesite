import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,GamesComponent,CardModule,ButtonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  
    name = "Miguel Ivan Sanchez Sanchez";
    job = "Dev Backend with Java";



}

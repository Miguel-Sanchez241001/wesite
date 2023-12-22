import { Component } from '@angular/core';
@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  games = [
    {
      id: 1,
      name: "juan",
    },
    {
      id: 2,
      name: "oche",
    },
    {
      id: 4,
      name: "luis",
    }
  ]
}

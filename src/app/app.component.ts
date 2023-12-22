import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import {SidebarModule} from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatListModule,MatIconModule,
       CommonModule, RouterOutlet,UserComponent,SidebarModule,ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'angular17-web-site';
  display = false;
  typesOfShoes: string[] = ['Miguel', 'about', 'skill','workes',];

  
   
 
    closeSidebar(){
      this.display = false;
    }

    openSidebar(){
      this.display = true;
    }
}

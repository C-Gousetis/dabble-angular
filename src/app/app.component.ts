import { Component, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeMessageComponent } from './home-message/home-message.component';
import { ListResultComponent } from './list-result/list-result.component';
import {HttpClientModule} from '@angular/common/http';
import {NamesService} from './names.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, HomeMessageComponent, ListResultComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'CF Project';

}

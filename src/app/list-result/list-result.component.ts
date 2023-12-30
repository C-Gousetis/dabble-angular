import { Component, Inject, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NamesService} from '../names.service';

@Component({
  selector: 'app-list-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-result.component.html',
  styleUrls: ['./list-result.component.css']
})
export class ListResultComponent {

  data: any;
  constructor(@Optional() public name: NamesService) {

    this.name.getData().subscribe(data => {
      console.warn(data);
      this.data = data;
    })
  }

}

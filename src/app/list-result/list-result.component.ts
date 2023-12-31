import { Component, Inject, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NamesService} from '../names.service';
import { MaleNamesService } from '../male-names.service';

@Component({
  selector: 'app-list-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-result.component.html',
  styleUrls: ['./list-result.component.css']
})
export class ListResultComponent {


  data: any;
  constructor(@Optional() public female: NamesService, public male : MaleNamesService) {

    this.female.getData().subscribe(data => {
      console.warn(data);
      this.data = data;
    })

    this.male.getData().subscribe(data => {
      console.warn(data);
      this.data = data;
    })
  }

  

  isVisible = false;
  apiFetchData(genderId : boolean) {
    this.isVisible = true;
    if (genderId == false) {
      this.female.getData();  
    } else {
      this.male.getData();
    }
  }

}

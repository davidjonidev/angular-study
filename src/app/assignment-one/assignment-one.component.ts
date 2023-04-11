import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment-one',
  templateUrl: './assignment-one.component.html',
  styleUrls: ['./assignment-one.component.scss']
})
export class AssignmentOneComponent {

  username = '';

  resetUsername() {
    this.username = '';
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css'],
})
export class PersonInputComponent {
  /**
   * onCreatePerson(personName) is used to create new user
   */
  public onCreatePerson(personName: string) {
    console.log(personName);
  }
}

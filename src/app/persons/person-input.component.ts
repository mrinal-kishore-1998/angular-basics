import { Component } from '@angular/core';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css'],
})
export class PersonInputComponent {
  enteredPersonName: string = '';

  /**
   * onCreatePerson(personName) is used to create new user
   */
  public onCreatePerson() {
    console.log('Created a new persons: ' + this.enteredPersonName);
    this.enteredPersonName = '';
  }
}

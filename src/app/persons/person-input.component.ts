import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css'],
})
export class PersonInputComponent {
  @Output() personCreated = new EventEmitter<string>();
  enteredPersonName: string = '';

  /**
   * onCreatePerson() is used to create new user
   */
  public onCreatePerson() {
    this.personCreated.emit(this.enteredPersonName);
    this.enteredPersonName = '';
  }
}

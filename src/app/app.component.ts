import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  persons: string[] = ['Max', 'Manual', 'Anna'];

  /**
   * onPersonCreated() is used to update the new user created in persons[]
   */
  public onPersonCreated(newPersons: string) {
    if (newPersons !== '') {
      this.persons.push(newPersons);
    }
  }
}

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PersonsService {
  persons: string[] = ['Max', 'Manual', 'Anna'];

  /**
   * addPerson() is used to update the new user created in persons[]
   */
  public addPerson(name: string) {
    if (name !== '') {
      this.persons.push(name);
      console.log(name);
    }
  }
}

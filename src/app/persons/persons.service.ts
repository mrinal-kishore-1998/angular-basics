import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PersonsService {
  persons: string[] = ['Max', 'Manual', 'Anna'];

  /**
   * addPerson(name) is used to update the new user created in persons[]
   */
  public addPerson(name: string) {
    if (name !== '') {
      this.persons.push(name);
      console.log(name);
    }
  }

  /**
   * removePerson(name) is used to delete the user
   */
  public removePerson(name: string) {
    this.persons = this.persons.filter((person) => {
      return person !== name;
    });

    console.log(this.persons);
  }
}

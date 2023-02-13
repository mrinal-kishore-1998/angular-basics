import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PersonsService {
  personsChanged = new Subject<string[]>();
  persons: string[] = ['Max', 'Manual', 'Anna'];

  /**
   * addPerson(name) is used to update the new user created in persons[]
   */
  public addPerson(name: string) {
    if (name !== '') {
      this.persons.push(name);
      this.personsChanged.next(this.persons);
    }
  }

  /**
   * removePerson(name) is used to delete the user
   */
  public removePerson(name: string) {
    this.persons = this.persons.filter((person) => {
      return person !== name;
    });
    this.personsChanged.next(this.persons);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PersonsService {
  personsChanged = new Subject<string[]>();
  persons: string[] = [];

  constructor(private http: HttpClient) {}

  /**
   * fetchPersons() is used to fetch the persons from the Swapi api
   */
  public fetchPersons() {
    this.http
      .get<any>('https://swapi.dev/api/people/')
      .pipe(
        map((resData) => {
          return resData.results.map((character) => character.name);
        })
      )
      .subscribe((resData) => {
        // resData is of type JavaScript object {}
        console.log(resData);
        this.personsChanged.next(resData);
      });
  }

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

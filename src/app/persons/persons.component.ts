import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
})
export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[];
  isFetching = false;
  private personListSubs: Subscription;

  constructor(private personService: PersonsService) {}

  ngOnInit(): void {
    // this.personList = this.personService.persons;
    this.personListSubs = this.personService.personsChanged.subscribe(
      (persons) => {
        this.personList = persons;
        this.isFetching = false;
      }
    );
    this.isFetching = true;
    this.personService.fetchPersons();
  }

  /**
   * onRemovePerson(person) is used to get the repective person that is going to be removed
   */
  public onRemovePerson(person: string) {
    this.personService.removePerson(person);
  }

  ngOnDestroy(): void {
    this.personListSubs.unsubscribe();
  }
}

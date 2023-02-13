import { Component, OnInit } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
})
export class PersonsComponent implements OnInit {
  personList: string[];

  constructor(private personService: PersonsService) {
    // this.personList = personService.persons;
  }

  ngOnInit(): void {
    this.personList = this.personService.persons;
    this.personService.personsChanged.subscribe((persons) => {
      this.personList = persons;
    });
  }

  /**
   * onRemovePerson(person) is used to get the repective person that is going to be removed
   */
  public onRemovePerson(person: string) {
    this.personService.removePerson(person);
  }
}

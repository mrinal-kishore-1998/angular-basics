import { Component, Input, OnInit } from '@angular/core';
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
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  private employees = require('./employees.json');

  rows = this.employees.map((row: { [x: string]: any; }) => ({
    name: row['firstName'],
    lastName: row['lastName'],
    jobTitleName: row['jobTitleName'],
    emailAddress: row['emailAddress'],
    phoneNumber: row['phoneNumber']
  }))
  columns = [
    {
      prop: 'name',
      name: 'First Name'
    },
    {
      prop: 'lastName',
      name: 'Last Name'
    },
    {
      prop: 'jobTitleName',
      name: 'Job Title'
    },
    {
      prop: 'emailAddress',
      name: 'Email'
    },
    {
      prop: 'phoneNumber',
      name: 'Phone'
    },

  ];

}
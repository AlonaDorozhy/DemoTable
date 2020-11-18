import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
//   template: `
//   <!-- <div>
//     <ngx-datatable [rows]="rows" [columns]="columns"> </ngx-datatable>
//   </div> -->
// `,
  styleUrls: ['./app.component.sass']
})
// export class AppComponent {
//   title = 'datatable';
// }
export class AppComponent {
  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' }
  ];
  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];
}
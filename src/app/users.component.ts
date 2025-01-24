// users.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  template: `
    <div class="container mt-4">
      <h2 class="mb-4">Users</h2>

      <div class="row">
        <div class="col-md-8">
          <div class="card">
            <div class="card-body">
              <div *ngIf="loading" class="text-center">
                <div class="spinner-border text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>

              <div *ngIf="error" class="alert alert-danger">
                {{ error }}
              </div>

              <table *ngIf="users.length && !loading" class="table table-hover">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr *ngFor="let user of users">
                    <td>{{ user.id }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.companyName }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class UsersComponent implements OnInit {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  private http = inject(HttpClient);
  users: any[] = [];
  loading = false;
  error = '';

  ngOnInit() {
    this.loading = true;

    this.http.get<any[]>(this.apiUrl).subscribe();
  }
}

interface User {
  id: number;
  email: string;
  companyName: string;
}

/* response example
{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
*/

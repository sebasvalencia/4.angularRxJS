import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularRxJS';
  url = 'https://jsonplaceholder.typicode.com/todos/1';

  constructor(private http: HttpClient) {
    const observable = this.http.get(this.url);
    observable.subscribe(console.log);
  }


}

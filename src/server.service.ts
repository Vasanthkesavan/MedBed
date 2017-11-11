import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class ServerService {
  constructor(private http: Http) {}

  getAllPatients() {
    return this.http.get('/api/getAllPatients');
  }

  toggleUrls(count: Number) {
    return this.http.post('api/toggleUrls', [count]);
  }
}


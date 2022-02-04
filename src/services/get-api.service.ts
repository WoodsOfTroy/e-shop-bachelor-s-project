import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GetApiService {
  constructor(private http: HttpClient) {}
  getGoods() {
    return this.http
      .get<any>(
        'https://f8eb6d17-c80d-47d1-a489-7d6fbf528951.mock.pstmn.io/goods'
      )
      .pipe(
        map((result: any) => {
          return result;
        })
      );
  }
}

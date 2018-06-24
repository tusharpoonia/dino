import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CallerService {

  constructor(private http: HttpClient) { }

  callApi(apiUrl) {
    return this.http.get(apiUrl);
  }

  // assignData(apiUrl, _data){
  //   this.callApi(apiUrl).subscribe(
  //     data =>{
  //       _data = data;
  //       console.log(_data);
  //     }
  //   )
  // }

}

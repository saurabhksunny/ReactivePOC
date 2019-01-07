import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class PanServiceService {
  constructor(private http: HttpClient) { }

  configUrl = 'assets/karza_pan_sandbox_collectionjson.json';

  getConfig() {
    return this.http.get(this.configUrl);
  }
}

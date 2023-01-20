import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HierarchiesDetailsModule } from '../hierarchies-details.module';

@Injectable()
export class HierarchiesDetailsService {
constructor(private http:HttpClient){}

// subordinates.php
getSubordinates(){
  const url: string = environment.baseUrl + 'subordinates.php';
    return this.http.post(url,{});
}


}

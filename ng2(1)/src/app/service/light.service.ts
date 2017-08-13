import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { BASE_URI } from '../common/const';
import { Observable } from 'rxjs';

@Injectable()
export class LightService {
  lightUrl: string = BASE_URI + '/light';

  constructor(private http:Http) { }

  /*
   根据所属房间查找灯
   */
  getLightByBelongs(index):Observable<any>{
    return this.http.get(this.lightUrl+'/find/'+index);
  }

  /*postSuperior(index):Observable<any>{
   return this.http.get(this.accountUrl+'/superior/'+index);
   }*/

  /*
   * 新增灯
   * */
  addLight(data):Observable<any>{
    return this.http.post(this.lightUrl+'/saveOrUpdate/',data);
  }

}

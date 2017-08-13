import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { BASE_URI } from '../common/const';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {
  accountUrl: string = BASE_URI + '/account';

  constructor(private http:Http) { }

  /*
    根据登录名查找人员
   */
  getAccount(index): Observable<any> {
    var tmp=this.accountUrl+'/find/'+ index;
    console.log(tmp);
    return this.http.get(this.accountUrl+'/find/'+ index);
  }

  /*postSuperior(index):Observable<any>{
    return this.http.get(this.accountUrl+'/superior/'+index);
  }*/

  /*
   * 新增人员
   * */
  addAccount(data):Observable<any>{
    return this.http.post(this.accountUrl+'/saveOrUpdate/',data);
  }


}

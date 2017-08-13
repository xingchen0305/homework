import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { BASE_URI } from '../common/const';
import { Observable } from 'rxjs';

@Injectable()
export class RoomService {

  roomUrl: string = BASE_URI + '/room';

  constructor(private http:Http) { }


  getAllRoom(): Observable<any> {
    return this.http.get(this.roomUrl+'/find/');
  }
  /*
 根据所属者查找房间
 */
  getRoomByBelongs(index):Observable<any>{
   return this.http.get(this.roomUrl+'/find/'+index);
   }

  /*
   * 新增房间
   * */
  addRooom(data):Observable<any>{
    return this.http.post(this.roomUrl+'/saveOrUpdate/',data);
  }

}

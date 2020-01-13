import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Streams } from './streams';

@Injectable({
  providedIn: 'root'
})
export class StreamsService {

  constructor(private http: HttpClient) { }

  public getStreams(): Observable<Streams[]> {

    return this.http.get<Streams[]>('api/stream/All');

  }

}

import { Inject, Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpParamsOptions,
} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DraftPickDto, DraftTableDto } from '../models';

@Injectable()
export class DraftService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getDraftTable(draftYear: number): Observable<DraftTableDto[]> {
    const httpParams: HttpParamsOptions = {
      fromObject: {
        draft_year: draftYear.toString(),
      },
    };

    const options = {
      params: new HttpParams(httpParams),
    };

    return this._http
      .get(`${this.apiUrl}/v2/draft-table`, options)
      .pipe(map((result: any) => result['result']));
  }

  getDraftPicks(): Observable<DraftPickDto[]> {
    return this._http
      .get(`${this.apiUrl}/v2/draft/ordered`)
      .pipe(map((result: any) => result['result']));
  }
}

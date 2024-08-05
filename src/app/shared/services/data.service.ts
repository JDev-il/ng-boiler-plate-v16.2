import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { RxService } from './rx.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private rxService: RxService, private apiService: ApiService) {
  }
}

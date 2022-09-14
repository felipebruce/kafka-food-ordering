import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderRequestInterface } from 'src/app/shared/interfaces/order-request.interface';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root'
})

export class OrderFoodService {

  private readonly API_URL = Constants.BACKEND_CONFIG.ENDPOINT + Constants.BACKEND_CONFIG.ROUTES.ORDER;

  constructor(private http: HttpClient) { }

  makeOrder(orders: OrderRequestInterface[]): Observable<void> {
    return this.http.post<void>(this.API_URL, {orders});
  }
}

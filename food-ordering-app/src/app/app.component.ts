import { Component } from '@angular/core';
import { OrderFoodService } from './core/services/order-food.service';
import { MenuItemInterface } from './shared/interfaces/menu-item.interface';
import { OrderRequestInterface } from './shared/interfaces/order-request.interface';
import { SnackbarService } from './core/services/snack-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'food-ordering-app';

  public menuItemsList: MenuItemInterface[] = [
    {
      name: 'Hamburguer',
      price: 15.5,
      quantity: 0,
      iconPath: '../assets/hamburger.svg'
    },
    {
      name: 'Beer',
      price: 3.75,
      quantity: 0,
      iconPath: '../assets/beer.svg'
    },
    {
      name: 'Orange juice',
      price: 2,
      quantity: 0,
      iconPath: '../assets/orange-juice.svg'
    }
  ];

  public value = 0;

  constructor(private readonly orderFoodService: OrderFoodService, private readonly snackbar: SnackbarService) { }

  handleMinus(menuItem: MenuItemInterface) {
    menuItem.quantity === 0 ? menuItem.quantity = 0 : menuItem.quantity--;
  }

  handlePlus(menuItem: MenuItemInterface) {
    menuItem.quantity++;
  }

  onOrderAction(): void {
    const orderRequest: OrderRequestInterface[] = [];
    this.menuItemsList.forEach(item => {
      orderRequest.push({
        itemName: item.name,
        price: item.price,
        quantity: item.quantity
      });
    });

    this.orderFoodService.makeOrder(orderRequest).subscribe(() => {
      this.snackbar.open('Order requested with succes!');
    });
  }
}

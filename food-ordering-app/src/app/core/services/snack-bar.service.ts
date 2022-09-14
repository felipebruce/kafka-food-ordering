import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

    constructor(
      public snackBar: MatSnackBar
    ) {}

    public open(message: string, action = 'Close', duration = 1000) {
      this.snackBar.open(message, action, {
        duration,
        panelClass: ['green-snackbar', 'login-snackbar'],
        verticalPosition: 'top',
      });
    }
}

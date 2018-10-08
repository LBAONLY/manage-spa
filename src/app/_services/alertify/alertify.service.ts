import { Injectable } from '@angular/core';
declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  confirm(message: string, okCallbaack: () => any) {
    alertify.confirm(message, function(e) {
      if (e) {
        okCallbaack();
      } else {}
    });
  }

  success(message: string) {
    alertify.success(message);
  }

  error(message: string) {
    alertify.set('notifier', 'position', 'top-right');
    alertify.error(message);
  }

  warning(message: string) {
    alertify.warning(message);
  }

  message(message: string) {
    const msg = `<div id="alertify-bot">
          <div id="bot-icon">
            <img src="../../../assets/icons/icon-96x96.png" class="img-fluid">
          </div>
          <div id="bot-message">${message}</div></div>`;
    alertify.set('notifier', 'position', 'top-right');
    const displaymsg = alertify.message(msg);
  }

}

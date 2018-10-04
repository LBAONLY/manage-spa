import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor() { }

  AjaxModule(httpMethod: string, url: string, sendData: string) {

    return new Promise(function (resolve, reject) {

        const xhr: any = new XMLHttpRequest();

        xhr.open(httpMethod, url);
        xhr.setRequestHeader( 'Content-type' , 'application/json');
        xhr.send(sendData);
        xhr.onload = function () {
            if (200 <= xhr.status && xhr.status <= 299) {
                resolve(xhr.responseText);
            } else {
                reject(Error(xhr.statusText));
            }
        };
        xhr.onerror = function () {
            reject(Error('Network error.'));
        };
    });
  }

  getAsync(url: string) {
    return this.AjaxModule('get', url, null);
  }

  postAsync(url: string, postData: object) {
    return this.AjaxModule('post', url , JSON.stringify(postData));
  }

}

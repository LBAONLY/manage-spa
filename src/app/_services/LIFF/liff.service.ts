import { Injectable } from '@angular/core';
declare var liff: any;

@Injectable({
  providedIn: 'root'
})

export class LiffService {

  data: any;

  constructor() {
    liff.init(function (data) {
      console.log(data);
      this.data = data;
    });
  }

  liff_getUserId(): string {
    if (this.data) {
      return this.data.context.userId;
    }
    return 'not on line app1';
  }

  liff_getUserName(): any {
    if (this.data) {
      liff.getProfile().then(function (profile) {
          return profile.displayName;
      }).catch(function (error) {
          window.alert('Error getting profile: ' + error);
      });
    }
    return 'not on line app2';
  }
}


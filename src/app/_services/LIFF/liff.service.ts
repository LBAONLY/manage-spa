import { Injectable } from '@angular/core';
declare var liff: any;

@Injectable({
  providedIn: 'root'
})

export class LiffService {

  data: any;

  constructor() {
    liff.init(function (data) {
      alert('sid=' + data.context.userId);
    });
  }

  liff_getUserId(): any {
    liff.init((data) => {
      alert('uid=' + data.context.userId);
      return 'uid=' + data.context.userId;
    });
  }

  liff_getUserName(): any {

    liff.init((data) => {
      liff.getProfile().then(function (profile) {
        return profile.displayName;
      }).catch(function (error) {
          window.alert('Error getting profile: ' + error);
      });
    });
  }
}


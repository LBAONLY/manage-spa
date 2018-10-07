import { Component, OnInit } from '@angular/core';
import { trigger, transition, group, query, style, animate } from '@angular/animations';
import { LiffService } from './_services/LIFF/liff.service';
import { AlertifyService } from './_services/alertify/alertify.service';
declare var liff: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimation', [
        transition('1 => 2, 2 => 3',
          // [
          //     style({ height: '!' , 'z-index': '-5' }),
          //     query(':enter', style({ transform: 'translateX(100%)' })),
          //     query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
          //     // animate the leave page away
          //     group([
          //         query(':leave', [
          //             animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(-100%)' })),
          //         ]),
          //         // and now reveal the enter
          //         query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
          //     ]),
          // ]
          [
            style({ height: '!' , 'z-index': '-5'}),
            query(':enter', style({ transform: 'translateX(-100%)' })),
            query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
            // animate the leave page away
            group([
                query(':leave', [
                    animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(100%)', 'z-index': '-5'  })),
                ]),
                // and now reveal the enter
                query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' , 'z-index': '-5'  }))),
            ]),
          ]
        ),
        transition('3 => 2, 2 => 1',
          [
              style({ height: '!' , 'z-index': '-5'}),
              query(':enter', style({ transform: 'translateX(-100%)' })),
              query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
              // animate the leave page away
              group([
                  query(':leave', [
                      animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(100%)', 'z-index': '-5'  })),
                  ]),
                  // and now reveal the enter
                  query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' , 'z-index': '-5'  }))),
              ]),
          ]
        ),
    ])
]
})
export class AppComponent implements OnInit {
  title = 'Liff-Queue-SPA';

  constructor(private alertify: AlertifyService) {
  }
  ngOnInit() {
    // alert(this.liff.liff_getUserId());
    // alert(this.liff.liff_getUserName());
    liff.init(function (data) {

      // alert('sid=' + data.context.userId);
      localStorage.setItem('liffId', data.context.userId);
      liff.getProfile().then(function (profile) {
        alert('profile.displayName=' + profile.displayName);
        localStorage.setItem('displayName', profile.displayName);
      }).catch(function (error) {
          window.alert('Error getting profile: ' + error);
      });

    });
    $(document).on('click', '#jqclick', function(event) {
      alert('jqclick');
    });
  }
  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
  }
}

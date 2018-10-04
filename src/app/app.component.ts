import { Component, OnInit } from '@angular/core';
import { trigger, transition, group, query, style, animate } from '@angular/animations';
import { LiffService } from './_services/LIFF/liff.service';


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

  constructor(private liff: LiffService) {

  }
  ngOnInit() {
    alert(this.liff.liff_getUserId());
    alert(this.liff.liff_getUserName());
    $(document).on('click', '#jqclick', function(event) {
      alert('jqclick');
    });
  }
  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
  }
}

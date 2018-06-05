import { Component } from '@angular/core';
import {DataServiceService} from './data-service.service'
import {trigger, state, style, transition, animate,keyframes} from '@angular/animations';

@Component({
  selector: 'app-root',
  template:`<p>{{property}}</p>
   <p [@MyFirstanimations] ='state' (click)="animateMe()">I will animate</p>
   `,

    styles :[`
    h1
   {
     text-decoration:underline; 
   }

   .red-title
   {
     color :red;
   }

   .large-size
   {
     font-size :4em;
   }

   p
   {
     width : 300px ; 
     background:lightblue; 
     font-size:1.2sem;
     padding : 50px;
     margin : 100px ,
     text-align: center;
     font-size:1.5em;

   }
   `],

    animations :[
      trigger('MyFirstanimations',[state('small',style({transform:'Scale(1)'})),
      state('large',style({transform:'Scale(1.2)'
    })), transition('small <=>large',animate('300ms ease-in',keyframes([
      style({opacity:0,transform:'transalteY(-75%)',offset:0}),
      style({opacity:0,transform:'transalteY(75px)',offset:0.5}),
      style({opacity:0,transform:'transalteY(0)',offset:1})
    ])
  
  )),
    ]) 
    ]

    })
   
   export class AppComponent {

    state:string ='small'

       constructor (private dataservice:DataServiceService)
      {
    
      }
        property:string ='';

        ngOnInit()
        {
          console.log(this.dataservice.fruits);
          this.property =this.dataservice.myFunc();
        }

        animateMe()
        {
          this.state =(this.state =='small'?'large':'small');
        }

    }


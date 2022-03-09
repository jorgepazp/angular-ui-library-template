import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, ContentChildren, Input, NgModule, OnInit, QueryList, TemplateRef } from '@angular/core';
import { TemplateDirective } from 'libui/api';

@Component({
  selector: 'lib-card',
  template: `
    <div class="p-card-content">
                    <ng-content></ng-content>
                    <ng-container *ngIf="contentTemplate">
                    <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                    </ng-container>
                    
                </div>
  `,
  styleUrls: ['./card.component.css']
})
export class CardComponent implements AfterContentInit {

  @Input() subheader: string;
  @ContentChildren(TemplateDirective) templates: QueryList<any>;
  contentTemplate:TemplateRef<any>;
  constructor() { }

  ngAfterContentInit(): void {
    console.log(this.templates)
    this.templates.forEach(x=>{
      console.log(x);
      console.log(x.getType())
      if(x.getType()==='contents'){
        this.contentTemplate = x.template;
      }
    })
  }

  ngOnInit(): void {
    console.log("lib card")
  }

}



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardComponent
  ]
})
export class CardModule { }

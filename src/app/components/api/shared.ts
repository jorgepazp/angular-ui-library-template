import { CommonModule } from "@angular/common";
import { Directive, Input, NgModule, TemplateRef } from "@angular/core";

@Directive({
    selector: '[uitemplate]',
    host: {
    }
})
export class TemplateDirective {
    
    @Input() type: string;
    
    @Input('uitemplate') name: string;
    
    constructor(public template: TemplateRef<any>) {}
    
    getType(): string {
        return this.name;
    }
}

@NgModule({
    imports:[CommonModule],
    exports: [TemplateDirective],
    declarations:[TemplateDirective]
})
export class SharedModule {}
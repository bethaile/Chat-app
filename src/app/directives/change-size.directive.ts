import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({selector: '[changeColor]'})
export class ChangeSizeDirective implements OnInit
{
    @Input() changeColor: String;

    constructor(public el: ElementRef)
    {
        
    }

    ngOnInit()
    {
        console.log("this.changeColor: "+this.changeColor);
        this.el.nativeElement.style.backgroundColor = this.changeColor;
    }
}
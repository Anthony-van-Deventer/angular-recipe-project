import { Directive, ElementRef, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    
    @HostBinding('class.open') isOpen = false;
    // @Input('appDropdown') set toggleDropdown(status: boolean){
    //     if (status){
    //         this.elRef.nativeElement.classList.add("open");
    //     }
    //     else{
    //         this.elRef.nativeElement.classList.remove("open");
    //     }
    // };

    // constructor(private elRef: ElementRef){}

    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }

}
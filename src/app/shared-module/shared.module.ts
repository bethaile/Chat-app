import { NgModule } from '@angular/core';

import { ChangeColorDirective } from '../directives/change-color.directive';
import {ContactCountPipeDirective} from '../directives/contact-count-pipe.directive';

@NgModule({
    declarations: [
        ChangeColorDirective,
        ContactCountPipeDirective
    ],
    exports: [
        ChangeColorDirective,
        ContactCountPipeDirective
    ]
})
export class SharedModule{}
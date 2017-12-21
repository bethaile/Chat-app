import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'countAll'
})
export class ContactCountPipeDirective
{
    count: number = 0;

    transform(value: any) 
    {
        
        if (!value) 
        {
            return null;
        }

        for(let val of value)
        {
            this.count++;
        }
        return this.count;
    }
}

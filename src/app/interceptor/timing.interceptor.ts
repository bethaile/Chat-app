import 'rxjs/add/operator/do';
import {Observable} from 'rxjs/Rx';
import {Injectable} from '@angular/core';
//import {OnInit} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import {TimeGetRequestService} from '../services/time-get-request.service'

@Injectable()
export class TimingInterceptor implements HttpInterceptor //, OnInit 
{
    //gettingTime: string;

    constructor(public timeGetRequestService: TimeGetRequestService)
    {

    }

    /*ngOnInit()
    {
        //this.timeGetRequestService
    }
    */

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
    {

        const started = Date.now(); 
        return next
        .handle(req).do(event => {
            if (event instanceof HttpResponse) 
            {
                const elapsed = Date.now() - started;
                this.timeGetRequestService.getTime = `Request for ${req.urlWithParams} took ${elapsed} ms.`;
                console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
            } 
        });
    } 
}
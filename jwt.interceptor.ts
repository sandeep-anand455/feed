import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwdkBlcGFtLmNvbSIsImV4cCI6MTU3ODkyNTMzNSwiaWF0IjoxNTc4ODk2NTM1fQ.bAamdAxUrcSoO_2-5Bbv6aJYqzb9TkQt_thwTbbGnLXsGZyzoKJEY6UXbYaN_84QIJtih9j2Me0asTstN-_1yQ';
        console.log('intercepting');
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
           }
            });
        console.log(request.headers);
        return next.handle(request);
    }
}

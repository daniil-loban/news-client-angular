import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  intercept (req: HttpRequest<any>,
             next: HttpHandler): Observable<HttpEvent<any>> {
    const idToken = '66b8cc914e9e45539b937e6934653281';
    if (idToken) {
      const cloned = req.clone({
        headers: req.headers.set("Authorization",
        "Bearer " + idToken)
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}

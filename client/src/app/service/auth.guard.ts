// import { Injectable } from "@angular/core";
// import { CanActivate, Router } from '@angular/router';
// import { AuthService } from '../main/auth/auth.service';


// @Injectable()
// export class AuthGuard implements CanActivate {

//     constructor(
//         private authService: AuthService,
//         private router: Router
//     ) { }
//     canActivate() {
//         if (this.authService.getToken() != null) {
//             return true;

//         }
//         else {
//             this.router.navigate(['auth/login'])
//             return false;
//         }
//     }
// }
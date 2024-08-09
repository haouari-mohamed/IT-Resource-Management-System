import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.login(this.username, this.password).subscribe(response => {
      this.authService.saveToken(response.token);
      this.authService.saveRole(response.role);
      console.log(response);

    
      if (response.role === 'TECHNICIAN') {
        this.router.navigate(['/technician']); 
        console.log("hada tech")
      }  if (response.role === 'USER') {
        this.router.navigate(['/user']); 
        console.log("hada user")
      } if (response.role === 'ADMIN')  {
        this.router.navigate(['/dashboard']);
        console.log("hada admin ")
      }
    });
  }
}

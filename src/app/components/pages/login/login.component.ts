import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;

  constructor(private router:Router) {}

  ngOnInit(): void {}

  LoginUser() {
    if (this.username == 'admin' && this.password == '12345') {
     this.router.navigateByUrl("\home")
      console.log('Logged In Successfully');
    } else {
      console.log('Logged In Unsuccessfull');
    }
  }
}

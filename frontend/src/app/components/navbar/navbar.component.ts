import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  data = JSON.parse(localStorage.getItem('user') || '[]');


  constructor(private router: Router) {}
  showname: string = '';
  toggleLogin: boolean = false;

  ngOnInit(): void {
    this.showname = this.showName();
    this.toggleLogin = this.data && this.data.name ? true : false;
    console.log(this.toggleLogin);
  }

  showName(): string {
    if (this.data && this.data.name) {
      console.log(this.data.name);
      return this.data.name;
    }
    return '';
  }

  rigisterRoute() {
    if (this.data.length == 0) {
      this.router.navigate(['/login']);
    }
  }

  logout(): void {
    localStorage.clear()
    this.showname = '';
    this.toggleLogin = false;
    Swal.fire({
      'icon':'success',
      'title':'Logout Successful',
      'text':'You have logout succesfully'
    })
    window.location.reload();
  }


}

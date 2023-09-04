import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instnavbar',
  templateUrl: './instnavbar.component.html',
  styleUrls: ['./instnavbar.component.css']
})
export class InstnavbarComponent {
  constructor(private router:Router){}
  HandleClick(){
    localStorage.clear()
    this.router.navigate(['/']).then(()=>{
      window.location.reload()
    })

  }
}

import { CanActivateFn,Router } from '@angular/router';

export const authguardGuard: CanActivateFn = (route, state) => {
  const token:string=localStorage.getItem("token")||""
  const router=new Router()
  if(token){
    return true
  }else{
    router.navigate(['/'])
    return false
  }
};

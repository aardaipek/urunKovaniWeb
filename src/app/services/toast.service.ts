import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr: ToastrService) { }

    // Toast Karşılıkları
    // ******************
    // error: 'toast-error',
    // info: 'toast-info',
    // success: 'toast-success',
    // warning: 'toast-warning',
  

  succesProcess(title?:string) {
    this.toastr.success(title);
  }

  errorProcess(title?:string) {
    this.toastr.error(title);
  }

}

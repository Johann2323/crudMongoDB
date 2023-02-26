import { TokenService } from './../services/token.service';
import { Router } from '@angular/router';
import { MessageService } from './../services/message.service';
import { Product } from './../model/product';
import Swal from 'sweetalert2';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: Product[] = [];

  isAdmin: boolean = false;

  constructor(
    private productService: ProductService,
    private toast: ToastrService,
    private messageService: MessageService,
    private router: Router,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.getProducts();
    this.isAdmin = this.tokenService.isAdmin();
  }

  getProducts(): void {
    this.productService.list().subscribe(
      data => {
        this.products = data;
      },
      err => {
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center' });
      }
    );
  }

  onDelete(id: number): void {
    Swal.fire({
      title: '¿Esta seguro?',
      text: 'No puedes deshacerlo',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.productService.delete(id).subscribe(
          data => {
            this.toast.success(data.message, 'OK', { timeOut: 3000, positionClass: 'toast-top-center' });
            this.getProducts();
          },
          err => {
            this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center' });
          }
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'cancelado',
          'producto no eliminado',
          'error'
        )
      }
    });
  }

  sendProduct(product: Product): void {
    this.messageService.sendMessage(product);
    this.router.navigate(['/update']);
  }

}

import { Product } from './../model/product';
import { ProductService } from './../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  name!: string;
  price!: number;
  titulo!: string;
  autor!: string;
  editorial!: string;
  precio!: number;
  stock!: number;
  descripcion!: string;
  categoria!: string;
  imagenPhat!: string;
  imagenURL!: string;


  constructor(
    private productService: ProductService,
    private toast: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const product = new Product(this.name, this.price,this.titulo,
      this.autor,this.editorial,
      this.precio,
      this.stock,
      this.descripcion,
      this.categoria,
      this.imagenPhat,
      this.imagenURL);
    this.productService.create(product).subscribe(
      data => {
        this.toast.success(data.message, 'OK', { timeOut: 3000, positionClass: 'toast-top-center'});
        this.router.navigate(['']);
      },
      err => {
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center'});
      }
    );
  }

}

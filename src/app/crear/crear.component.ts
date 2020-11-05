import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioService } from './../servicios/servicio.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  itemForm: FormGroup;
  idPedido: String;

  constructor(private fb: FormBuilder, private servicioService: ServicioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
    this.route.paramMap.subscribe((param) => {
      this.idPedido = param.get('id');

      if (this.idPedido !== 'new'){
        this.getPedidoById(this.idPedido);
      }
    });
  }

  getPedidoById(idPedido: String){
    this.servicioService.getPedidoById(idPedido).subscribe((data) =>{
      let PedidoId = data;

      this.itemForm.patchValue(PedidoId);
    });
  }

  initForm(){
    this.itemForm = this.fb.group({
      nombre: [ '' ],
      direccion: [ '' ],
      pedido: [ '' ],
      fecha: [ '' ]
    });
  }

  submit() {
    if (this.idPedido !== 'new'){
      this.servicioService.editarPedido(this.idPedido, this.itemForm.value).subscribe((pedido) => {
      });
    } else {
      this.servicioService.guardarPedido(this.itemForm.value).subscribe((pedido) => {
        let pedidoNuevo = pedido;
      });
    }
    this.router.navigate(['/mostrarPedidos']);
  }
}



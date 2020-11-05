import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  displayedColumns: string[] = [ 'nombre', 'direccion', 'pedido', 'fecha', 'editar', 'borrar' ];
  dataSource: any[] = [];
  idPedido: any;

  constructor( private servicioService: ServicioService, private router: Router ) { }

  ngOnInit(): void {
    this.getPedidos();
  }

  getPedidos(){
    this.servicioService.getPedidos().subscribe(( data:any ) => { 
      this.dataSource = data;
    });
  }

  editarPedido(idPedido){
    this.router.navigate(["/crearPedido/" + idPedido]);
  }

  borrarPedido(idPedido){
    this.idPedido = idPedido;
    this.servicioService.borrarPedido(this.idPedido).subscribe((data: any) => {
      let pedidoBorrado = idPedido;
    });
    location.reload();
  }

}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private pedidoUrl = 'http://localhost:3002/api/modules/pedidos/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor( private httpClient: HttpClient ) {}

  getPedidos(){
    return this.httpClient.get(this.pedidoUrl + 'pedidos');
  }

  getPedidoById( idPedido: String ){
    return this.httpClient.get(this.pedidoUrl + 'pedidoId/' + idPedido)
  }

  guardarPedido( pedido: any ){
    return this.httpClient.post(this.pedidoUrl + 'pedido', JSON.stringify(pedido), this.httpOptions);
  }

  editarPedido( idPedido, pedido ){
    return this.httpClient.put(this.pedidoUrl + 'pedido/' + idPedido, JSON.stringify(pedido),this.httpOptions);
  }

  borrarPedido( idPedido ){
    return this.httpClient.delete(this.pedidoUrl + 'pedido/' + idPedido, this.httpOptions);
  }

}


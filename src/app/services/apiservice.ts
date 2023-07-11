import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {LoginModel} from "../model/loginModel";
import {RespuestaModel} from "../model/respuestaModel";
import * as url from "url";


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlproductos='https://6113-38-25-18-121.ngrok-free.app/productos'
  private urlaccesorios='https://6113-38-25-18-121.ngrok-free.app/Accesorios'
  private urlvendidos='https://6113-38-25-18-121.ngrok-free.app/masvendidos'
  private urlLogin='https://6113-38-25-18-121.ngrok-free.app/login'
  private urlRegister='https://6113-38-25-18-121.ngrok-free.app/registrar'

  logeadoUser=new BehaviorSubject(false);
  $obsLogeado=this.logeadoUser.asObservable();

  nombreUser:BehaviorSubject<any>=new BehaviorSubject(null);
  $obsNombre=this.nombreUser.asObservable();

  constructor(private http: HttpClient) { }
  postData(data:LoginModel):Observable<RespuestaModel>{
    return this.http.post<RespuestaModel>(this.urlLogin,data);
  }
public getData():Observable<any>{
    return this.http.get<any>(this.urlproductos)

}
  public getAccesorios():Observable<any>{
    return this.http.get<any>(this.urlaccesorios)

  }

public getVendidos():Observable<any>{
    return this.http.get<any>(this.urlvendidos)
}

public registrar(data:any):Observable<any>{


    return this.http.post(this.urlRegister,data);
}
public detalleProducto(id:any){
    return this.http.get<any>(this.urlproductos+"/"+id);
}
  public detalleAccesorios(id:any){
    return this.http.get<any>(this.urlaccesorios+"/"+id);
  }

}


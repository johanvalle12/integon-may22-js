import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../usuarios.service';
import { Usuario } from '../../shared/interfaces/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string = "";
  password:string = "";
  constructor(private usuariosService:UsuariosService, private router:Router) { }

  ngOnInit(): void {
  }

  verificarUsuario() {
    if(this.email == "" || this.password == "")
      return alert("Faltan campos por llenar");
    let usuario:Usuario = {
      name: "",
      email:this.email,
      password: this.password
    };
    this.usuariosService.getUsuario(usuario).subscribe(data => {
      console.log(data);
      if(data != false){
        this.email = "";
        this.password = "";
        this.router.navigate(['/dashboard']);
      }
      else{
        return alert('Las credenciales son incorrectas.');
      }
    });

  }
}

import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../shared/interfaces/usuario';
import { UsuariosService } from '../../usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name:string = "";
  email:string = "";
  password:string = "";
  confirmPassword:string = "";
  constructor(private usuariosService:UsuariosService, private router:Router) { }

  ngOnInit(): void {
  }

  agregarUsuario() {
    if(this.name == "" || this.email == "" || this.password == "" || this.confirmPassword == "")
      return alert("Faltan campos por llenar para agregar el usuario.");
    if( this.password != this.confirmPassword)
      return alert("La contraseña no coincide, intente de nuevo.");
    let usuario:Usuario = {
      name : this.name,
      email : this.email,
      password : this.password
    };
    this.usuariosService.agregarUsuario(usuario).subscribe(usuario => {
      console.log(usuario);
      alert('Usuario registrado con exito.');
      this.router.navigate(['login']);
    });
    this.name = "";
    this.email = "";
    this.password = "";
    this.confirmPassword = "";
  }

}

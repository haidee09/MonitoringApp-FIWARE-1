import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderfooterModule } from '../headerfooter/headerfooter.module';
import { ForgotpasswordComponent } from './forgotpassword.component';
import { RouterModule, Router } from '@angular/router';
//import { UsuarioModule } from '../usuario/usuario.module';
//import { AdministradorModule} from '../administrador/administrador.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeaderfooterModule,
    RouterModule
    //UsuarioModule,
    //AdministradorModule
  ],
  declarations: [
    ForgotpasswordComponent
  ],
  exports:[
    ForgotpasswordComponent
  ]
  //providers: [AuthService]
})
export class ForgotpasswordModule { }
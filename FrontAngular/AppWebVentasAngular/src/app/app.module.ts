import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { DialogClienteComponent } from './cliente/dialog/dialogcliente.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSidenavModule} from '@angular/material/sidenav';//Material
import { MatTableModule } from '@angular/material/table';//Material
import { MatDialogModule} from '@angular/material/dialog';//Material
import { MatButtonModule } from '@angular/material/button';//Material
import { MatInputModule } from '@angular/material/input';//Material
import { MatSnackBarModule } from '@angular/material/snack-bar';//Material
import { MatCardModule } from '@angular/material/card';//Material
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DialogDeleteComponent } from './common/delete/dialog.delete.component';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './security/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClienteComponent,
    DialogClienteComponent,
    DialogDeleteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule, //Material
    MatTableModule,//Material
    MatDialogModule,//Material
    MatButtonModule,//Material
    MatInputModule,//Material
    MatSnackBarModule,//Material
    MatCardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

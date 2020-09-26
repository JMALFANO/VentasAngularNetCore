import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { DialogClienteComponent } from './cliente/dialog/dialogcliente.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule} from '@angular/material/sidenav';//Material
import { MatTableModule } from '@angular/material/table';//Material
import { MatDialogModule} from '@angular/material/dialog';//Material
import { MatButtonModule } from '@angular/material/button';//Material
import { MatInputModule } from '@angular/material/input';//Material
import { MatSnackBarModule } from '@angular/material/snack-bar';//Material
import { FormsModule} from '@angular/forms';
import { DialogDeleteComponent } from './common/delete/dialog.delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClienteComponent,
    DialogClienteComponent,
    DialogDeleteComponent
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
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

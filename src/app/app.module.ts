import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulos
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Environment
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IngresoEgresoComponent } from './ingreso-egreso/ingreso-egreso.component';
import { EstadisticaComponent } from './ingreso-egreso/estadistica/estadistica.component';
import { DetalleComponent } from './ingreso-egreso/detalle/detalle.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		RegisterComponent,
		DashboardComponent,
		IngresoEgresoComponent,
		EstadisticaComponent,
		DetalleComponent,
		FooterComponent,
		NavbarComponent,
		SidebarComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		AngularFireModule.initializeApp(environment.firebase), // 'my-app-name'), // imports firebase/app needed for everything
		AngularFirestoreModule, // imports firebase/firestore, only needed for database features
		AngularFireAuthModule // imports firebase/auth, only needed for auth features
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}

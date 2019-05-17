import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulos
import { AppRoutingModule } from './app-routing.module';
// import { ReactiveFormsModule } from '@angular/forms';
// import { IngresoEgresoModule } from './ingreso-egreso/ingreso-egreso.module';

// NgRx
import { StoreModule } from '@ngrx/store';
import { appReducers } from './app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireAuthModule } from '@angular/fire/auth';

// Modulos personalizados
import { AuthModule } from './auth/auth.module';
// import { SharedModule } from './shared/shared.module';

// Graficas
// import { ChartsModule } from 'ng2-charts';

// Environment
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
		// LoginComponent,
		// RegisterComponent,
		// DashboardComponent,
		/// IngresoEgresoComponent,
		// EstadisticaComponent,
		// DetalleComponent,
		// FooterComponent,
		// NavbarComponent,
		// SidebarComponent,
		// OrdenIngresoEgresoPipe
	],
	imports: [
		BrowserModule,
		AuthModule,
		// SharedModule,
		// IngresoEgresoModule,
		AppRoutingModule,
		// FormsModule,
		// ReactiveFormsModule,
		AngularFireModule.initializeApp(environment.firebase), // 'my-app-name'), // imports firebase/app needed for everything
		AngularFirestoreModule, // imports firebase/firestore, only needed for database features
		/// AngularFireAuthModule, // imports firebase/auth, only needed for auth features
		// ChartsModule,
		StoreModule.forRoot(appReducers),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: environment.production
		})
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}

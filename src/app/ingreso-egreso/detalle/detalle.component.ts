import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
// import { AppState } from 'src/app/app.reducer';
import * as fromIngresoEgreso from '../ingreso-egreso.reducer';
import { IngresoEgreso } from '../ingreso-egreso.model';
import { Subscription } from 'rxjs';
import { IngresoEgresoService } from '../ingreso-egreso.service';

import Swal from 'sweetalert2';

@Component({
	selector: 'app-detalle',
	templateUrl: './detalle.component.html',
	styles: []
})
export class DetalleComponent implements OnInit, OnDestroy {
	items: IngresoEgreso[];
	subscription: Subscription = new Subscription();

	constructor(private store: Store<fromIngresoEgreso.AppState>, public ingresoEgresoService: IngresoEgresoService) {}

	ngOnInit() {
		this.subscription = this.store.select('ingresoEgreso').subscribe((ingresoEgreso) => {
			// console.log(ingresoEgreso.items);
			this.items = ingresoEgreso.items;
		});
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	borrarItem(item: IngresoEgreso) {
		this.ingresoEgresoService
			.borrarIngresoEgreso(item.uid)
			.then(() => {
				Swal.fire('Borrado', item.descripcion, 'success');
			})
			.catch((err) => console.error(err));
	}
}

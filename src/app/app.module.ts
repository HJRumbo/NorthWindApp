import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacturasComponent } from './pages/facturas/facturas.component';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { RegistrarFacturaComponent } from './pages/registrar-factura/registrar-factura.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule} from '@angular/material/sort';
import { MatTableModule} from '@angular/material/table';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { MatButtonModule} from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { MatProgressBarModule } from '@angular/material/progress-bar';
@NgModule({
  declarations: [
    AppComponent,
    FacturasComponent,
    DetallesComponent,
    RegistrarFacturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule, 
    MatSortModule, 
    MatPaginatorModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule
  ],
  exports:[
    MatFormFieldModule, 
    MatSortModule, 
    MatPaginatorModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

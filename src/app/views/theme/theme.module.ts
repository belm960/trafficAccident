import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule, GridModule, NavModule, UtilitiesModule, TabsModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { ColorsComponent, ThemeColorComponent } from './colors.component';
import { TypographyComponent } from './typography.component';

// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';
import { AccidentdetailComponent } from './accidentdetail/accidentdetail.component';
import { AccidentlistComponent } from './accidentlist/accidentlist.component';
import { AlldetailsComponent } from './alldetails/alldetails.component';
import { EditmotoristComponent } from './editmotorist/editmotorist.component';
import { EditpedastrianComponent } from './editpedastrian/editpedastrian.component';
import { EditpersoninvehicleComponent } from './editpersoninvehicle/editpersoninvehicle.component';
import { EditvehicleComponent } from './editvehicle/editvehicle.component';
import { ImageComponent } from './image/image.component';
import { MotoristdetailComponent } from './motoristdetail/motoristdetail.component';
import { PedastrianComponent } from './pedastrian/pedastrian.component';
import { UpdateComponent } from './update/update.component';
import { UploadComponent } from './upload/upload.component';
import { UsersComponent } from './users/users.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehiclelistComponent } from './vehiclelist/vehiclelist.component';
import { AccidentComponent } from './accident/accident.component';
import { MotoristComponent } from './motorist/motorist.component';
import { PersoninvehicleComponent } from './personinvehicle/personinvehicle.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {A11yModule} from '@angular/cdk/a11y';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { AuthInterceptor } from '../../auth/auth-interceptor';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    CardModule,
    GridModule,
    UtilitiesModule,
    IconModule,
    NavModule,
    TabsModule,
    CommonModule,
    ThemeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    A11yModule,
    
    CdkStepperModule,
    FormsModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule
   
  ],
  declarations: [
    ColorsComponent,
    ThemeColorComponent,
    TypographyComponent,
    AccidentdetailComponent,
    AccidentlistComponent,
    AlldetailsComponent,
    EditmotoristComponent,
    EditpedastrianComponent,
    EditpersoninvehicleComponent,
    EditvehicleComponent,
    ImageComponent,
    MotoristdetailComponent,
    PedastrianComponent,
    UpdateComponent,
    UploadComponent,
    UsersComponent,
    VehicleComponent,
    VehiclelistComponent,
    AccidentComponent,
    MotoristComponent,
    PersoninvehicleComponent,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
},]
})
export class ThemeModule {
}

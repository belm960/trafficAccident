import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';
import { HomeComponent } from './home/home.component';

import { PersoninvehicleComponent } from './personinvehicle/personinvehicle.component';
import { AccidentComponent } from './accident/accident.component';
import { VehiclelistComponent } from './vehiclelist/vehiclelist.component';
import { MotoristComponent } from './motorist/motorist.component';
import { PedastrianComponent } from './pedastrian/pedastrian.component';
import { AccidentlistComponent } from './accidentlist/accidentlist.component';
import { AccidentdetailComponent } from './accidentdetail/accidentdetail.component';
import { MotoristdetailComponent } from './motoristdetail/motoristdetail.component';
import { AlldetailsComponent } from './alldetails/alldetails.component';
import { UpdateComponent } from './update/update.component';
import { EditpersoninvehicleComponent } from './editpersoninvehicle/editpersoninvehicle.component';
import { EditvehicleComponent } from './editvehicle/editvehicle.component';
import { EditmotoristComponent } from './editmotorist/editmotorist.component';
import { EditpedastrianComponent } from './editpedastrian/editpedastrian.component';
import { UploadComponent } from './upload/upload.component';
import { ImageComponent } from './image/image.component';
import { UsersComponent } from './users/users.component';
import { SuperuserComponent } from '../superuser/superuser.component';
import { PmComponent } from '../pm/pm.component';
import { AdminComponent } from '../admin/admin.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Theme'
    },
    children: [
      {
        path: '',
        redirectTo: 'colors',
        pathMatch: 'full'
      },
      {
        path: 'colors',
        component: ColorsComponent,
        data: {
          title: 'Colors'
        }
      },
      {
        path: 'accident',
        component: AccidentComponent,
        data: {
          title: 'Accident'
        }
      },
      {
        path: 'home',
        component: HomeComponent,
        data: {
          title: 'Home'
        }
      },
      {
        path: 'admin',
        component: AdminComponent,
        data: {
          title: 'Admin Page'
        }
      },
      {
        path: 'pm',
        component: PmComponent,
        data: {
          title: 'Pm Page'
        }
      },
      {
        path: 'superUser',
        component: SuperuserComponent,
        data: {
          title: 'Super User'
        }
      },
      {
        path: 'users',
        component: UsersComponent,
        data: {
          title: 'Users'
        }
      },
      {
        path: 'upload/:id',
        component: UploadComponent,
        data: {
          title: 'Upload File'
        }
      },
      {
        path: 'image/:id',
        component: ImageComponent,
        data: {
          title: 'Download Image'
        }
      },
      {
        path: 'vehiclelist/:id',
        component: VehiclelistComponent,
        data: {
          title: 'VehicleList'
        }
      },
      {
        path: 'alldetails/:id',
        component: AlldetailsComponent,
        data: {
          title: 'Alldetails'
        }
      },
      {
        path: 'accidentlist',
        component: AccidentlistComponent,
        data: {
          title: 'AccidentList'
        }
      },
      {
        path: 'update/:id',
        component: UpdateComponent,
        data: {
          title: 'AccidentList'
        }
      },
      {
        path: 'accidentdetail/:id',
        component: AccidentdetailComponent,
        data: {
          title: 'AccidentDetail'
        }
      },
      {
        path: 'motoristdetail/:id',
        component: MotoristdetailComponent,
        data: {
          title: 'MotoristDetail'
        }
      },
      {
        path: 'personinvehicle/:id',
        component: PersoninvehicleComponent,
        data: {
          title: 'Personinvehicle'
        }
      },
      {
        path: 'motorist/:id',
        component: MotoristComponent,
        data: {
          title: 'Motorist'
        }
      },
      {
        path: 'pedastrian/:id',
        component: PedastrianComponent,
        data: {
          title: 'pedastrian'
        }
      },
      {
        path: 'editpersoninvehicle/:id',
        component: EditpersoninvehicleComponent,
        data: {
          title: 'Editpersoninvehicle'
        }
      },
      {
        path: 'editvehicle/:id',
        component: EditvehicleComponent,
        data: {
          title: 'Editvehicle'
        }
      },
      {
        path: 'editmotorist/:id',
        component: EditmotoristComponent,
        data: {
          title: 'Editmotorist'
        }
      },
      {
        path: 'editpedastrian/:id',
        component: EditpedastrianComponent,
        data: {
          title: 'Editpedastrian'
        }
      },
      
      
      {
        path: 'typography',
        component: TypographyComponent,
        data: {
          title: 'Typography'
        }
      }
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {}

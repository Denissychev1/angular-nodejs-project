import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HelpComponent} from "./features/help/help.component";
import {LkComponent} from "./features/lk/lk.component"
import {AdminComponent} from "./features/admin/admin.component";
import {TestsComponent} from "./features/tests/tests.component";
import {ProgressComponent} from "./features/progress/progress.component";
import {PatientsComponent} from "./features/patients/patients.component";
import {ImitationsComponent} from "./features/imitations/imitations.component";
import {AddpatientComponent} from "./features/addpatient/addpatient.component";
import {AddimitationComponent} from "./features/addimitation/addimitation.component";
import {ChoiseComponent} from "./features/choise/choise.component";
import {AdminGuard} from "./features/admin/admin.guard";
import {PatientsGuard} from "./features/patients.guard";
import {AuthGuard} from "./features/auth.guard";


const routes: Routes = [
  { path: 'lk', component: LkComponent, canActivate: [AuthGuard] },
  { path: 'help', component: HelpComponent, canActivate: [PatientsGuard] },
  {path: 'admin', component: AdminComponent},
  {path: 'tests', component: TestsComponent, canActivate: [PatientsGuard]},
  {path: 'progress', component: ProgressComponent, canActivate: [PatientsGuard]},
  {path: 'patients', component: PatientsComponent, canActivate: [AdminGuard]},
  {path: 'imitations', component: ImitationsComponent, canActivate: [AdminGuard]},
  {path: 'addpatient', component: AddpatientComponent, canActivate: [AdminGuard]},
  {path: 'addimitation', component: AddimitationComponent, canActivate: [AdminGuard]},
  {path: 'choise', component: ChoiseComponent},
  { path: '**', redirectTo: 'choise' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AdminGuard, PatientsGuard, AuthGuard]
})
export class AppRoutingModule { }

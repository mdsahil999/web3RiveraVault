import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ValutListComponent } from './component/valut-list/valut-list.component';
import { VaultDetailsComponent } from './component/vault-details/vault-details.component';
import { VaultSetupComponent } from './component/vault-setup/vault-setup.component';
import { AuthGuard } from './service/authGuard/auth.guard';

const routes: Routes = [{
  path:'', component: HomeComponent,},
  {path: 'vault', component: ValutListComponent, canActivate: [AuthGuard]},
  {path: 'vaultDetails', component: VaultDetailsComponent, canActivate: [AuthGuard]},
  {path: 'vaultSetup/:type', component: VaultSetupComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

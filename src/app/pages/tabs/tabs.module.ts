import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';


import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: TabsPage,
        children: [
          {
            path: 'list-user',
            loadChildren: () => import('./list-user/list-user.module').then( m => m.ListUserPageModule)
          },
          {
            path: 'feedback',
            loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
          },
          {
            path: 'account',
            loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
          },
          {
            path: '',
            redirectTo: '/tabs/list-user',
            pathMatch: 'full'
          }
        ]
      }
    ])
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}

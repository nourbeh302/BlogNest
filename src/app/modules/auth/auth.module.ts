import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ProfileComponent } from './profile/ui/profile.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthRoutingModule, ProfileComponent],
})
export class AuthModule {}

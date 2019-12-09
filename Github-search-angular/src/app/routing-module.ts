import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'


import { MasterComponent } from '../app/master/master.component';
import { RepoComponent } from '../app/repo/repo.component';

const Routes: Routes = [

    { path: '', redirectTo: 'master', pathMatch: 'full' },
  { path: "master", component: MasterComponent },
  { path: "repo", component: RepoComponent }
]


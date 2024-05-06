import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgeCalculatorComponent } from './age-calculator/age-calculator.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'age',
        pathMatch: 'full',
      },
      {
        path: 'age',
        component: AgeCalculatorComponent,
      },
      {
        path: 'bmi',
        component: BmiCalculatorComponent,
      },
    ],
  },
];

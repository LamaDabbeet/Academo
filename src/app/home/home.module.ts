import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AcademoNavbarComponent } from './components/academo-navbar/academo-navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { LeadingCompaniesComponent } from './components/leading-companies/leading-companies.component';
import { GoalsComponent } from './components/goals/goals.component';
import { SimplePricingSectionComponent } from './components/simple-pricing-section/simple-pricing-section.component';
import { UseAcademoSectionComponent } from './components/use-academo-section/use-academo-section.component';
import { OutcomesSectionComponent } from './components/outcomes-section/outcomes-section.component';
import { AcademoUseSectionComponent } from './components/academo-use-section/academo-use-section.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    HomeComponent,
    AcademoNavbarComponent,
    HeaderComponent,
    LeadingCompaniesComponent,
    GoalsComponent,
    SimplePricingSectionComponent,
    UseAcademoSectionComponent,
    OutcomesSectionComponent,
    AcademoUseSectionComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  exports:[AcademoNavbarComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeModule { }

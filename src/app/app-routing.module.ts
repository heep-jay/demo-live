import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Pages/home/home.component';
import { CyberSecurityComponent } from './Pages/cyber-security/cyber-security.component';
import { RiskComponent } from './Pages/risk/risk.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { AboutComponent } from './Pages/about/about.component';
import { WhychooseUsComponent } from './Pages/whychoose-us/whychoose-us.component';
import { OtherSolutionsComponent } from './Pages/other-solutions/other-solutions.component';
import { ClientsComponent } from './Pages/clients/clients.component';
import { PostComponent } from './Pages/post/post.component';
import { NewsComponent } from './Pages/news/news.component';
import { GalleryComponent } from './Pages/gallery/gallery.component';
import { GalleryPageComponent } from './Components/gallery-page/gallery-page.component';
import { HalogenNavComponent } from './Components/halogen-nav/halogen-nav.component';
import { SecurityTechnologiesComponent } from './Pages/security-technologies/security-technologies.component';
import { PhysicalSecurityComponent } from './Pages/physical-security/physical-security.component';
import { SecurityEducationComponent } from './Pages/security-education/security-education.component';
import { OutsourcingComponent } from './Pages/outsourcing/outsourcing.component';
import { PostdetailsComponent } from './Components/postdetails/postdetails.component';
import { VideopageComponent } from './Pages/videopage/videopage.component';
import { GdprpopupComponent } from './Components/gdprpopup/gdprpopup.component';
import { PolicyComponent } from './Pages/policy/policy.component';
import { TofuseComponent } from './Pages/tofuse/tofuse.component';
import { AnalyticalComponent } from './Pages/analytical/analytical.component';
import { BlogdetailsComponent } from './Components/blogdetails/blogdetails.component';
import { VendoronboardingComponent } from './Pages/vendoronboarding/vendoronboarding.component';
import { SecurityReportsComponent } from './Pages/security-reports/security-reports.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { CareerComponent } from './Pages/career/career.component';
import { HalodigestComponent } from './Pages/halodigest/halodigest.component';
import { HalodigestDetailComponent } from './Pages/halodigest-detail/halodigest-detail.component';
import { JobsComponent } from './Pages/jobs/jobs.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: CyberSecurityComponent,
    path: 'cyber-security',
  },

  {
    component: CyberSecurityComponent,
    path: 'cyber-security/:id',
  },
  {
    component: RiskComponent,
    path: 'risk-advisory-and-consulting',
  },
  {
    component: RiskComponent,
    path: 'risk-advisory-and-consulting/:id',
  },
  {
    component: AboutComponent,
    path: 'about-us',
  },
  {
    component: ContactComponent,
    path: 'contact',
  },
  {
    component: WhychooseUsComponent,
    path: 'why-choose-us',
  },
  {
    component: OtherSolutionsComponent,
    path: 'other-security-solutions',
  },
  {
    component: ClientsComponent,
    path: 'our-clients',
  },
  {
    component: PostComponent,
    path: 'post',
  },
  {
    component: NewsComponent,
    path: 'news-events',
  },
  {
    component: GalleryPageComponent,
    path: 'gallery/photos/:id',
  },
  {
    component: GalleryComponent,
    path: 'gallery',
  },
  {
    component: HalogenNavComponent,
    path: 'allnav',
  },
  {
    component: SecurityTechnologiesComponent,
    path: 'security-technologies',
  },
  {
    component: SecurityTechnologiesComponent,
    path: 'security-technologies/:id',
  },
  {
    component: PhysicalSecurityComponent,
    path: 'physical-security',
  },
  {
    component: PhysicalSecurityComponent,
    path: 'physical-security/:id',
  },
  {
    component: SecurityEducationComponent,
    path: 'security-seducation',
  },
  {
    component: SecurityEducationComponent,
    path: 'security-seducation/:id',
  },
  {
    component: OutsourcingComponent,
    path: 'outsourcing-investigations-identity',
  },
  {
    component: OutsourcingComponent,
    path: 'outsourcing-investigations-identity/:id',
  },
  {
    component: PostdetailsComponent,
    path: 'news-events/news/:id',
  },
  {
    component: PostdetailsComponent,
    path: 'news-events/blogpost/:id',
  },
  {
    component: HalodigestDetailComponent,
    path: 'halodigest/:id',
  },
  {
    component: VideopageComponent,
    path: 'gallery/videos/:id',
  },
  {
    component: PolicyComponent,
    path: 'privacy-policy',
  },
  {
    component: TofuseComponent,
    path: 'terms-of-use',
  },
  {
    component: AnalyticalComponent,
    path: 'analytical',
  },
  {
    component: VendoronboardingComponent,
    path: 'partner-onboarding',
  },
  {
    component: SecurityReportsComponent,
    path: 'security-reports',
  },
  {
    component: CareerComponent,
    path: 'career',
  },
  {
    component: JobsComponent,
    path: 'career/jobs',
  },
  {
    component: HalodigestComponent,
    path: 'halodigest',
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

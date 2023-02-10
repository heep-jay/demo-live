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



const routes: Routes = [
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: CyberSecurityComponent,
    path: 'cyber-security'
  }, {
    component: RiskComponent,
    path: 'risk-advisory-and-consulting'
  },
  {
    component: AboutComponent,
    path: 'about-us'
  },
  {
    component: ContactComponent,
    path: 'contact'
  },
  {
    component: WhychooseUsComponent,
    path: 'why-choose-us'
  },
  {
    component: OtherSolutionsComponent,
    path: 'other-security-solutions'
  },
  {
    component: ClientsComponent,
    path: 'our-clients'
  },
  {
    component: PostComponent,
    path: 'post'
  },
  {
    component: NewsComponent,
    path: 'news-events'
  },
  {
    component: GalleryPageComponent,
    path: 'gallery/photos/:id'
  },
  {
    component: GalleryComponent,
    path: 'gallery'
  },
  {
    component: HalogenNavComponent,
    path: 'allnav'
  },
  {
    component: SecurityTechnologiesComponent,
    path: 'security-technologies'
  },
  {
    component: PhysicalSecurityComponent,
    path: 'physical-security'
  },
  {
    component: SecurityEducationComponent,
    path: 'security-seducation'
  }, {
    component: OutsourcingComponent,
    path: 'outsourcing-investigations-identity'
  },
  {
    component: PostdetailsComponent,
    path: 'news-events/news/:id'
  },
  {
    component: VideopageComponent,
    path: 'gallery/videos/:id'
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

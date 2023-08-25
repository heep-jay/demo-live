import { NgModule } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ListComponent } from './Page/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { IvyCarouselModule } from 'carousel-angular';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MarkdownModule } from 'ngx-markdown';
import { NguCarouselModule } from '@ngu/carousel';

import { HomecarouselComponent } from './Components/homecarousel/homecarousel.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { CybermenuComponent } from './Components/cybermenu/cybermenu.component';
import { MenuComponent } from './Components/menu/menu.component';
import { CyberSecurityComponent } from './Pages/cyber-security/cyber-security.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalPopComponent } from './Components/modal-pop/modal-pop.component';
import { ServicemodalComponent } from './Components/servicemodal/servicemodal.component';
import { RiskComponent } from './Pages/risk/risk.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { SafePipe } from './safe.pipe';
import { LeadersComponent } from './Components/leaders/leaders.component';
import { WhychooseUsComponent } from './Pages/whychoose-us/whychoose-us.component';
import { SolutioncarouselComponent } from './Components/solutioncarousel/solutioncarousel.component';
import { OtherSolutionsComponent } from './Pages/other-solutions/other-solutions.component';
import { ClientsComponent } from './Pages/clients/clients.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { NewsComponent } from './Pages/news/news.component';
import { PostComponent } from './Pages/post/post.component';
import { RelatedpostComponent } from './Components/relatedpost/relatedpost.component';
import { MinipostComponent } from './Components/minipost/minipost.component';
import { VpostsComponent } from './Components/vposts/vposts.component';
import { FeaturedComponent } from './Components/featured/featured.component';
import { MustreadComponent } from './Components/mustread/mustread.component';
import { NewscarouselComponent } from './Components/newscarousel/newscarousel.component';
import { FormsModule } from '@angular/forms';
import { ClientcarouselComponent } from './Components/clientcarousel/clientcarousel.component';
import { GalleryPageComponent } from './Components/gallery-page/gallery-page.component';
import { GalleryBoxComponent } from './Components/gallery-box/gallery-box.component';
import { GalleryComponent } from './Pages/gallery/gallery.component';
import { HalogenNavComponent } from './Components/halogen-nav/halogen-nav.component';
import { SecurityTechnologiesComponent } from './Pages/security-technologies/security-technologies.component';
import { PhysicalSecurityComponent } from './Pages/physical-security/physical-security.component';
import { SecurityEducationComponent } from './Pages/security-education/security-education.component';
import { OutsourcingComponent } from './Pages/outsourcing/outsourcing.component';
import { PostdetailsComponent } from './Components/postdetails/postdetails.component';
import { VideoboxComponent } from './Components/videobox/videobox.component';
import { VideopageComponent } from './Pages/videopage/videopage.component';
import { GdprpopupComponent } from './Components/gdprpopup/gdprpopup.component';
import { PolicyComponent } from './Pages/policy/policy.component';
import { TofuseComponent } from './Pages/tofuse/tofuse.component';
import { AnalyticalComponent } from './Pages/analytical/analytical.component';
import { CarouselDirective } from './Components/carousel.directive';
import { BlogdetailsComponent } from './Components/blogdetails/blogdetails.component';
import { RelpostComponent } from './Components/relpost/relpost.component';
import { CyberwebcontentComponent } from './Pages/cyberwebcontent/cyberwebcontent.component';
import { VendoronboardingComponent } from './Pages/vendoronboarding/vendoronboarding.component';
import { ConsultationmodalComponent } from './Components/consultationmodal/consultationmodal.component';
import { SliderComponent } from './Components/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HomecarouselComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    CybermenuComponent,
    MenuComponent,
    CyberSecurityComponent,
    ModalPopComponent,
    ServicemodalComponent,
    RiskComponent,
    ContactComponent,
    SafePipe,
    LeadersComponent,
    WhychooseUsComponent,
    SolutioncarouselComponent,
    OtherSolutionsComponent,
    ClientsComponent,
    NewsComponent,
    CarouselComponent,
    PostComponent,
    RelatedpostComponent,
    MinipostComponent,
    VpostsComponent,
    FeaturedComponent,
    MustreadComponent,
    NewscarouselComponent,
    ClientcarouselComponent,
    GalleryPageComponent,
    GalleryBoxComponent,
    GalleryComponent,
    HalogenNavComponent,
    SecurityTechnologiesComponent,
    PhysicalSecurityComponent,
    SecurityEducationComponent,
    OutsourcingComponent,
    PostdetailsComponent,
    VideoboxComponent,
    VideopageComponent,
    GdprpopupComponent,
    PolicyComponent,
    TofuseComponent,
    AnalyticalComponent,
    CarouselDirective,
    BlogdetailsComponent,
    RelpostComponent,
    CyberwebcontentComponent,
    VendoronboardingComponent,
    ConsultationmodalComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    CommonModule,
    IvyCarouselModule,
    FormsModule,
    NgbModule,
    MatSelectModule,
    MatDialogModule,
    NguCarouselModule,
    MarkdownModule.forRoot(),
  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

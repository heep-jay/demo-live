import { NgModule } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgxSpinnerModule } from 'ngx-spinner';
import { MatCardModule } from '@angular/material/card';
import { IvyCarouselModule } from 'carousel-angular';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MarkdownModule } from 'ngx-markdown';
import { NguCarouselModule } from '@ngu/carousel';
import { NgxPaginationModule } from 'ngx-pagination';
import { CarouselModule } from 'primeng/carousel';

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
import { ConsultationmodalComponent } from './Components/consultationmodal/consultationmodal.component';
import { SliderComponent } from './Components/slider/slider.component';
import { SliderTwoComponent } from './Components/slider-two/slider-two.component';
import { SecurityReportsComponent } from './Pages/security-reports/security-reports.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { CareerComponent } from './Pages/career/career.component';
import { HalodigestComponent } from './Pages/halodigest/halodigest.component';
import { HalodigestDetailComponent } from './Pages/halodigest-detail/halodigest-detail.component';
import { JobsComponent } from './Pages/jobs/jobs.component';
import { NavbarNewComponent } from './Components/navbar-new/navbar-new.component';
import { NewnavComponent } from './Components/newnav/newnav.component';
import { XmasComponent } from './Components/xmas/xmas.component';
import { QmsComponent } from './Pages/qms/qms.component';
import { BrochureComponent } from './Pages/brochure/brochure.component';
import { NationalSecurityComponent } from './Pages/national-security/national-security.component';
import { CampaignFormComponent } from './Pages/campaign-form/campaign-form.component';
import { CampaignSubmissionsComponent } from './Pages/campaign-submissions/campaign-submissions.component';
import { ThankyouComponent } from './Pages/thankyou/thankyou.component';
import { ThankComponent } from './Pages/thank/thank.component';
import { PaymentDetailsComponent } from './Pages/payment-details/payment-details.component';
import { MultiSelectComponent } from './Components/form/multi-select/multi-select.component';
import { HeroCarouselComponent } from './Components/hero-carousel/hero-carousel.component';
import { LoadingComponent } from './Components/loading/loading.component';
import { ClientscarourelComponent } from './Components/clientscarourel/clientscarourel.component';
import { SearchComponent } from './Components/search/search.component';
// import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
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
    ConsultationmodalComponent,
    SliderComponent,
    SliderTwoComponent,
    SecurityReportsComponent,
    PageNotFoundComponent,
    CareerComponent,
    HalodigestComponent,
    HalodigestDetailComponent,
    JobsComponent,
    NavbarNewComponent,
    NewnavComponent,
    XmasComponent,
    QmsComponent,
    BrochureComponent,
    NationalSecurityComponent,
    CampaignFormComponent,
    CampaignSubmissionsComponent,
    ThankyouComponent,
    ThankComponent,
    PaymentDetailsComponent,
    MultiSelectComponent,
    HeroCarouselComponent,
    LoadingComponent,
    ClientscarourelComponent,
    SearchComponent,
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
    ReactiveFormsModule,
    NgbModule,
    MatSelectModule,
    MatDialogModule,
    NguCarouselModule,
    NgxPaginationModule,
    CarouselModule,
    MarkdownModule.forRoot(),
    // NgSelectModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

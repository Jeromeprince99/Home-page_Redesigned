import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DescriptionComponent } from './description/description.component';
import { FeatureComponent } from './feature/feature.component';
import { FeatureoneComponent } from './featureone/featureone.component';
import { FeaturetwoComponent } from './featuretwo/featuretwo.component';
import { FeaturethreeComponent } from './featurethree/featurethree.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FeaturefourComponent } from './featurefour/featurefour.component';
import { FeaturefiveComponent } from './featurefive/featurefive.component';
import { OfflineEventsComponent } from './offline-events/offline-events.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import {MatDialogModule} from '@angular/material/dialog';
import { TestimonialModalComponent } from './testimonial-modal/testimonial-modal.component';
import { TestimonialModal2Component } from './testimonial-modal2/testimonial-modal2.component';
import { TestimonialModal3Component } from './testimonial-modal3/testimonial-modal3.component';
import { TestimonialModal4Component } from './testimonial-modal4/testimonial-modal4.component';
import { FooterComponent } from './footer/footer.component';
import { FooterbottomComponent } from './footerbottom/footerbottom.component';
import { DescriptioncontainerComponent } from './descriptioncontainer/descriptioncontainer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DescriptionComponent,
    FeatureComponent,
    FeatureoneComponent,
    FeaturetwoComponent,
    FeaturethreeComponent,
    FeaturefourComponent,
    FeaturefiveComponent,
    OfflineEventsComponent,
    TestimonialsComponent,
    TestimonialModalComponent,
    TestimonialModal2Component,
    TestimonialModal3Component,
    TestimonialModal4Component,
    FooterComponent,
    FooterbottomComponent,
    DescriptioncontainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    MatDialogModule
  ],
  providers: [ 
    
  ],
  entryComponents: [
    TestimonialModalComponent,
    TestimonialModal2Component,
    TestimonialModal3Component,
    TestimonialModal4Component
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

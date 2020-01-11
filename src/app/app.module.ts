import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BannerComponent } from './banner/banner.component';
import { SalesComponent } from './sales/sales.component';
import { LoginComponent } from './login/login.component';
import { LogComponent } from './log/log.component';
import { AboutComponent } from './about/about.component';
import { PlayComponent } from './play/play.component';
import { AuthService } from './services/auth.service';
import { FormsModule }   from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AddFormComponent } from './add-form/add-form.component';
import { HttpModule } from '@angular/http';
import { DatasaddComponent } from './datasadd/datasadd.component'; 
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './message.service';
import { HttpErrorHandlerService, HandleError } from './http-error-handler.service';
import { DataTablesModule } from 'angular-datatables';
import { TableComponent } from './table/table.component';
import { AlbumComponent } from './album/album.component';
import { TrformComponent } from './trform/trform.component';
import { DataparentComponent } from './dataparent/dataparent.component';
import { DatachildComponent } from './dataparent/datachild/datachild.component';
import { SharingComponent } from './dataparent/sharing/sharing.component';
import { HomeComponent } from './home/home.component';
import { SidelayerComponent } from './sidelayer/sidelayer.component';
import { ProcessComponent } from './process/process.component';
import { MemorydataComponent } from './memorydata/memorydata.component';
import { AccordationComponent } from './accordation/accordation.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';

const routes: Routes = [
  { path: 'app-header', component: HeaderComponent },
  { path: 'app-footer', component: FooterComponent },
  { path: 'app-sidebar', component: SidebarComponent },
  { path: 'app-login', component: LoginComponent },
  { path: 'app-register', component: RegisterComponent },
  { path: 'app-banner', component: BannerComponent },
  { path: 'app-about', component: AboutComponent },
  { path: 'app-sales', component: SalesComponent },
  { path: 'app-dashboard', component: DashboardComponent },
  { path: 'app-play', component: PlayComponent },
  { path: '', redirectTo: '/app-dashboard', pathMatch: 'full' },
  { path: 'banner/:id' , component: BannerComponent},
  { path: 'app-add-form', component: AddFormComponent },
  { path: 'app-datasadd', component: DatasaddComponent },
  { path: 'app-table', component: TableComponent },
  { path: 'app-album', component: AlbumComponent   },
  { path: 'app-trform', component: TrformComponent   },
  { path: 'app-dataparent', component: DataparentComponent   },
  { path: 'app-sharing', component: SharingComponent   },
  { path: 'app-process', component: ProcessComponent   },
    { path: 'app-accordation', component: AccordationComponent   },


];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SidebarComponent,
    BannerComponent,
    SalesComponent,
    LoginComponent,
    LogComponent,
    AboutComponent,
    PlayComponent,
    RegisterComponent,
    AddFormComponent,
    DatasaddComponent,
    TableComponent,
    AlbumComponent,
    TrformComponent,
    DataparentComponent,
    DatachildComponent,
    SharingComponent,
    HomeComponent,
    SidelayerComponent,
    ProcessComponent,
    MemorydataComponent,
    AccordationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    HttpClientModule,
    DataTablesModule,
    AccordionModule.forRoot()
  ],
    exports: [ RouterModule ],
  providers: [AuthService, HttpErrorHandlerService,
    MessageService,],
  bootstrap: [AppComponent]
})
export class AppModule { }

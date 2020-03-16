import { BankService } from './../bank.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from '../header/header.component';
import { AppComponent } from '../app.component';

import {Routes} from "@angular/router";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {RouterTestingModule} from "@angular/router/testing";

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  const routes: Routes = [
    {path:'',component: HeaderComponent},
   ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule.withRoutes(routes)],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {PlantPage} from "./plant.component";



describe('ProductComponent', () => {
  let component: PlantPage;
  let fixture: ComponentFixture<PlantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantPage ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

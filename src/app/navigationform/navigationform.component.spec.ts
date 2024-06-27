import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationformComponent } from './navigationform.component';

describe('NavigationformComponent', () => {
  let component: NavigationformComponent;
  let fixture: ComponentFixture<NavigationformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

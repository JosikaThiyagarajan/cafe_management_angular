import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorymformComponent } from './inventorymform.component';

describe('InventorymformComponent', () => {
  let component: InventorymformComponent;
  let fixture: ComponentFixture<InventorymformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InventorymformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InventorymformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

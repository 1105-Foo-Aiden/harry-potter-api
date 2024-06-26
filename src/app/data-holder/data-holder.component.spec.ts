import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataHolderComponent } from './data-holder.component';

describe('DataHolderComponent', () => {
  let component: DataHolderComponent;
  let fixture: ComponentFixture<DataHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataHolderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

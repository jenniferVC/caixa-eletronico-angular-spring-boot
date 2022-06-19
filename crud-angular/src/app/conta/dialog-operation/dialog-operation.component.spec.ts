import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOperationComponent } from './dialog-operation.component';

describe('DialogOperationComponent', () => {
  let component: DialogOperationComponent;
  let fixture: ComponentFixture<DialogOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

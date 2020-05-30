import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicInterfaceComponent } from './music-interface.component';

describe('MusicInterfaceComponent', () => {
  let component: MusicInterfaceComponent;
  let fixture: ComponentFixture<MusicInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

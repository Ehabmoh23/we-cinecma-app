import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieHomeComponent } from './movie-home.component';

describe('MovieHomeComponent', () => {
  let component: MovieHomeComponent;
  let fixture: ComponentFixture<MovieHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieHomeComponent]
    });
    fixture = TestBed.createComponent(MovieHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

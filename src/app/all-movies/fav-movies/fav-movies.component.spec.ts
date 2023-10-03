import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavMoviesComponent } from './fav-movies.component';

describe('FavMoviesComponent', () => {
  let component: FavMoviesComponent;
  let fixture: ComponentFixture<FavMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavMoviesComponent]
    });
    fixture = TestBed.createComponent(FavMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

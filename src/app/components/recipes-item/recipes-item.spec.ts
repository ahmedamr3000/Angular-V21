import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesItem } from './recipes-item';

describe('RecipesItem', () => {
  let component: RecipesItem;
  let fixture: ComponentFixture<RecipesItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipesItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipesItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

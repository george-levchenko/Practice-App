import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GHeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';
import { NzSwitchComponent } from 'ng-zorro-antd/switch';
import { NzMenuItemComponent } from 'ng-zorro-antd/menu';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { provideNzIcons } from 'ng-zorro-antd/icon';
import { icons } from '../../../../assets/icons/ng-zorro-icons';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NzSelectComponent } from 'ng-zorro-antd/select';

describe('GHeaderComponent', () => {
  let component: GHeaderComponent;
  let fixture: ComponentFixture<GHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, NzSwitchComponent, NzSelectComponent],
      providers: [
        { provide: ActivatedRoute, useValue: {} }, // 🛠️ Mock ActivatedRoute
        provideNzIcons(icons),
        provideAnimationsAsync(),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with the default language', () => {
    expect(component.language.value).toBe('eng');
  });

  it('should change language when a different option is selected', () => {
    component.language = component.languages[0]; // Selecting Russian
    fixture.detectChanges();
    expect(component.language.value).toBe('ru');
  });

  it('should toggle theme when switch is clicked', () => {
    const themeSwitch = fixture.debugElement.query(By.directive(NzSwitchComponent));

    expect(component.whiteTheme).toBeFalse(); // Initially false

    // Simulate the click event
    themeSwitch.nativeElement.click();
    fixture.detectChanges(); // Force change detection

    expect(component.whiteTheme).toBeTrue(); // Should now be true

    // Click again to toggle back
    themeSwitch.nativeElement.click();
    fixture.detectChanges();

    expect(component.whiteTheme).toBeFalse(); // Should now be false again
  });

  it('should have navigation links with correct routerLinks', () => {
    const menuItems = fixture.debugElement.queryAll(By.directive(NzMenuItemComponent));
    expect(menuItems.length).toBe(5);
    expect(menuItems[0].nativeElement.textContent.trim()).toBe('Home');
    expect(menuItems[1].nativeElement.textContent.trim()).toBe('Movies');
    expect(menuItems[2].nativeElement.textContent.trim()).toBe('Empty');
    expect(menuItems[3].nativeElement.textContent.trim()).toBe('store');
    expect(menuItems[4].nativeElement.textContent.trim()).toBe('404');
  });
});

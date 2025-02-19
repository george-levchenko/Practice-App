import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GHeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';
import { NzAvatarComponent } from 'ng-zorro-antd/avatar';
import { NzSelectComponent } from 'ng-zorro-antd/select';
import { NzSwitchComponent } from 'ng-zorro-antd/switch';
import { FormsModule } from '@angular/forms';
import { NzMenuDirective, NzMenuItemComponent } from 'ng-zorro-antd/menu';

describe('GHeaderComponent', () => {
  let component: GHeaderComponent;
  let fixture: ComponentFixture<GHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [GHeaderComponent, NzAvatarComponent, NzSelectComponent, NzSwitchComponent, NzMenuDirective, NzMenuItemComponent],
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
    expect(component.whiteTheme).toBeFalse();
    themeSwitch.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.whiteTheme).toBeTrue();
  });

  it('should have navigation links with correct routerLinks', () => {
    const menuItems = fixture.debugElement.queryAll(By.directive(NzMenuItemComponent));
    expect(menuItems.length).toBe(4);
    expect(menuItems[0].nativeElement.textContent.trim()).toBe('Home');
    expect(menuItems[1].nativeElement.textContent.trim()).toBe('Movies');
    expect(menuItems[2].nativeElement.textContent.trim()).toBe('Empty');
    expect(menuItems[3].nativeElement.textContent.trim()).toBe('404');
  });
});

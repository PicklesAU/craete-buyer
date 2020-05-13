// import { TestBed } from "@angular/core/testing";
// import { RouterTestingModule } from '@angular/router/testing';
// import { AppComponent } from './app.component';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// describe("HighLightDirective", () => {
//     let fixture: any;
//     beforeEach(() => {
//         fixture = TestBed.configureTestingModule({
//             imports: [RouterTestingModule],
//             declarations: [AppComponent],
//             schemas:[CUSTOM_ELEMENTS_SCHEMA]
//         })
//             .createComponent(AppComponent);
//         fixture.detectChanges(); // initial binding
//     });

//     it('should have blue <a>', () => {
//         const a: HTMLElement = fixture.nativeElement.querySelector('p');        
//         a.style.backgroundColor = 'blue';
//         let bgColor = a.style.backgroundColor;
//         expect(bgColor).toBe('blue');
//     });
// });
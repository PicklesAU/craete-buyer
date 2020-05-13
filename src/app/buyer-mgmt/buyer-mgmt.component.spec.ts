import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerMgmtComponent } from './buyer-mgmt.component';

describe('BuyerMgmtComponent', () => {
    let component: BuyerMgmtComponent;
    let fixture: ComponentFixture<BuyerMgmtComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BuyerMgmtComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BuyerMgmtComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

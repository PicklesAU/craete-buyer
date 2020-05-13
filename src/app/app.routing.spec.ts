/*import { Location } from "@angular/common";
import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { AppComponent } from "./app.component";
import { appRoutes } from "./app-routing.module";
import { AuctionStackComponent } from "./auction-stack/auction-stack/auction-stack.component";
import { SaleComponent } from './sale/sale/sale.component';
import { AfterSaleComponent } from './after-sale/after-sale/after-sale.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order/purchase-order.component';
import { BookInComponent } from './book-in/book-in/book-in.component';
import { AuctionStackListComponent } from './auction-stack/auction-stack-list/auction-stack-list.component';
import { AuctionStackInfoComponent } from './auction-stack/auction-stack-info/auction-stack-info.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule, MatFormFieldModule, MatCheckboxModule, MatButtonModule, MatToolbarModule, MatCardModule, MatTableModule, MatInputModule, MatSelectModule, MatSlideToggleModule, MatIconModule, MatRadioModule, MatSnackBarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

describe("Router: App", () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(appRoutes),
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatCardModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatIconModule,
        MatDialogModule,
        MatRadioModule,
        MatSnackBarModule, ReactiveFormsModule,
        HttpClientModule],
      declarations: [AuctionStackComponent, SaleComponent, AfterSaleComponent,
        PurchaseOrderComponent, BookInComponent, AuctionStackListComponent,
        AuctionStackInfoComponent, PageNotFoundComponent, AppComponent]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it("fakeAsync works", fakeAsync(() => {
    const promise = new Promise(resolve => {
      setTimeout(resolve, 10);
    });
    let done = false;
    promise.then(() => (done = true));
    tick(50);
    expect(done).toBeTruthy();
  }));

  it('navigate to "" redirects you to /stack', fakeAsync(() => {
    router.navigate(['']).then(() => {
      tick(1000);
      expect(location.path()).toBe('/stack');
    });
  }));

  it('navigate to /stack', fakeAsync(() => {
    router.navigate(['/stack']).then(() => {
      tick(1000);
      expect(location.path()).toBe('/stack');
    });
  }));

  it('navigate to /stack/:id', fakeAsync(() => {
    router.navigate(['/stack/100']).then(() => {
      tick(1000);
      expect(location.path()).toBe('/stack/100');
    });
  }));

  it('navigate to /sale', fakeAsync(() => {
    router.navigate(['/sale']).then(() => {
      tick(1000);
      expect(location.path()).toBe('/sale');
    });
  }));

  it('navigate to /afterSale', fakeAsync(() => {
    router.navigate(['/afterSale']).then(() => {
      tick(1000);
      expect(location.path()).toBe('/afterSale');
    });
  }));

  it('navigate to /purchaseOrder', fakeAsync(() => {
    router.navigate(['/purchaseOrder']).then(() => {
      tick(1000);
      expect(location.path()).toBe('/purchaseOrder');
    });
  }));

  it('navigate to /bookIn', fakeAsync(() => {
    router.navigate(['/bookIn']).then(() => {
      tick(1000);
      expect(location.path()).toBe('/bookIn');
    });
  }));

});*/

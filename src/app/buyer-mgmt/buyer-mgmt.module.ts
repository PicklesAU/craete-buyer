import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerMgmtComponent } from './buyer-mgmt.component';
import { environment } from 'src/environments/environment';
import { CreateBuyerModule } from '@pickles/ma-create-buyer';

@NgModule({
    declarations: [BuyerMgmtComponent],
    imports: [
        CommonModule,
        CreateBuyerModule.forRoot({
            hostUrl: environment.hostURL,
        }),
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BuyerMgmtModule {}

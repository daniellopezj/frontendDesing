import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule } from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
@NgModule({
    imports: [MatButtonModule,
        MatToolbarModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatIconModule,
        MatMenuModule,
        MatListModule,
        MatFormFieldModule,
        MatDialogModule,
        MatTooltipModule
    ],
    exports: [MatButtonModule,
        MatToolbarModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatIconModule,
        MatMenuModule,
        MatListModule,
        MatFormFieldModule,
        MatDialogModule,
        MatTooltipModule
    ]
})
export class MaterialModule { }
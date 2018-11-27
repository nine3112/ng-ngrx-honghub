import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HubComponent} from './hub.component';
import {RoomComponent} from '../../pages/room/room.component';

const routes : Routes = [
    {
        path: '',
        component: HubComponent,
        children: [
            {
                path: 'room',
                loadChildren: '../../pages/room/room.module#RoomModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HubRoutingModule {}
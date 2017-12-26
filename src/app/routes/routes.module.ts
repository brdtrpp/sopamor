import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MenuService } from '../core/menu/menu.service';
import { SharedModule } from '../shared/shared.module';
import { UserModule } from './user/user.module';

import { menu } from './menu';
import { routes } from './routes';
import { UpvoteComponent } from './upvote/upvote.component';
import { DownvoteComponent } from './downvote/downvote.component';


@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(routes),
        UserModule
    ],
    declarations: [UpvoteComponent, DownvoteComponent],
    exports: [
        UpvoteComponent,
        DownvoteComponent,
        RouterModule
    ]
})
export class RoutesModule {
    constructor(private menuService: MenuService) {
        menuService.addMenu(menu);
    }
}

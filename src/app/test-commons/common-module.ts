import { HttpClientTestingModule } from "@angular/common/http/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { PaginatePipe, PaginationControlsComponent, PaginationControlsDirective, PaginationService } from "ngx-pagination";
import { CreateproductComponent } from "../component/createproduct/createproduct.component";
import { CreaterestaurantComponent } from "../component/createrestaurant/createrestaurant.component";
import { CreateuserComponent } from "../component/createuser/createuser.component";
import { DeletePComponent } from "../component/delete-p/delete-p.component";
import { DeleteRComponent } from "../component/delete-r/delete-r.component";
import { DeleteComponent } from "../component/delete/delete.component";
import { DescripcionProductoComponent } from "../component/descripcion-producto/descripcion-producto.component";
import { DescripcionRestaurantComponent } from "../component/descripcion-restaurant/descripcion-restaurant.component";
import { MainNavComponent } from "../component/main-nav/main-nav.component";
import { ModifyproductComponent } from "../component/modifyproduct/modifyproduct.component";
import { ModifyrestaurantComponent } from "../component/modifyrestaurant/modifyrestaurant.component";
import { ModifyuserComponent } from "../component/modifyuser/modifyuser.component";
import { PaginatePComponent } from "../component/paginate-p/paginate-p.component";
import { PaginateRComponent } from "../component/paginate-r/paginate-r.component";
import { PaginateComponent } from "../component/paginate/paginate.component";
import { PasswordComponent } from "../component/password/password.component";
import { PhotoSelectorComponent } from "../component/photo-selector/photo-selector";
import { SearchComponent } from "../component/search/search.component";
import { SuccessComponent } from "../component/success/success.component";
import { UserComponent } from "../component/user/user.component";
import { LoginService } from "../service/login.service";
import { ProductService } from "../service/product.service";
import { RestaurantService } from "../service/restaurant.service";
import { SearchService } from "../service/search.service";
import { UserService } from "../service/user.service";

export const CommonModules = {
    declarations: [
        MainNavComponent,
        SearchComponent,
        CreateuserComponent,
        SuccessComponent,
        UserComponent,
        PaginateComponent,
        DeleteComponent,
        CreaterestaurantComponent,
        ModifyuserComponent,
        PaginatePipe,
        PaginationControlsComponent,
        PaginationControlsDirective,
        PhotoSelectorComponent,
        PasswordComponent,
        DeletePComponent,
        ModifyproductComponent,
        DescripcionProductoComponent,
        DescripcionRestaurantComponent,
        PaginatePComponent,
        PaginateRComponent,
        CreateproductComponent,
        DeleteRComponent,
        ModifyrestaurantComponent
    ],
    imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        HttpClientTestingModule
    ],
    providers: [
        UserService,
        SearchService,
        RestaurantService,
        ProductService,
        PaginationService,
        LoginService
    ]
}

import { NgModule } from '@angular/core';
import { PersonasProvider } from './personas/personas';
import { UnidadesProvider } from './unidades/unidades';
import { AuthService } from './security/auth.service';
import { ToastService } from './utils/toast.service';
import { StorePhotosService } from './utils/store-photos.service';
import { LoadingService } from './utils/loading.service';

const UTILS: any[] = [
    ToastService,
    StorePhotosService,
    AuthService,
    LoadingService
];

const PROVIDERS: any[] = [
    PersonasProvider,
    UnidadesProvider,
];

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [
        ...UTILS,
        ...PROVIDERS,
    ],
})
export class ProvidersModule { }

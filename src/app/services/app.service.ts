
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth.guard';
import { DataService } from './data.service';


export const APP_SERVICES=[
   DataService,
    AuthService,
    AuthGuard,
    
]
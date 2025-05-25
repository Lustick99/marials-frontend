import { NgModule } from '@angular/core';
import { LucideAngularModule, Mail, Phone, MapPin, Clock, HelpCircle, Info, Users } from 'lucide-angular';

@NgModule({
    imports: [LucideAngularModule.pick({
        Mail, 
        Phone, 
        MapPin, 
        Clock,
        HelpCircle,
        Users,
        Info,
    })],
    exports: [LucideAngularModule]
})
export class LucideIconsModule { }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeSlide, staggeredList } from '../../../shared/animations';

@Component({
  selector: 'app-nos-partenaires',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nos-partenaires.component.html',
  styleUrls: ['./nos-partenaires.component.scss'],
  animations: [fadeSlide, staggeredList]
})
export class NosPartenairesComponent {
  partenaires = [
    { name: 'CMA CGM', logo: 'assets/logos/cma-cgm.png' },
    { name: 'Maersk', logo: 'assets/logos/maersk.png' },
    { name: 'LCT', logo: 'assets/logos/lct.png' },
    { name: 'MSC', logo: 'assets/logos/msc.png' },
    { name: 'Bolloré', logo: 'assets/logos/bollore.png' },
    { name: 'DHL Global', logo: 'assets/logos/dhl.png' },
    { name: 'Kuehne + Nagel', logo: 'assets/logos/kuehne-nagel.png' },
    { name: 'Hapag-Lloyd', logo: 'assets/logos/hapag-lloyd.png' },
    { name: 'Evergreen', logo: 'assets/logos/evergreen.png' },
    { name: 'Yang Ming', logo: 'assets/logos/yang-ming.png' },
    { name: 'ZIM', logo: 'assets/logos/zim.png' },
    { name: 'COSCO', logo: 'assets/logos/cosco.png' },
    { name: 'ONE', logo: 'assets/logos/one.png' },
    { name: 'PIL', logo: 'assets/logos/pil.png' },
    { name: 'Yang Ming', logo: 'assets/logos/yang-ming.png' },
    { name: 'HMM', logo: 'assets/logos/hmm.png' },
    { name: 'Wan Hai Lines', logo: 'assets/logos/wan-hai.png' }
  ];
}

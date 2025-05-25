import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

export const fadeSlide = trigger('fadeSlide', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(30px)' }),
    animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);

export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms ease-out', style({ opacity: 1 })),
  ]),
]);

export const fadeOut = trigger('fadeOut', [
  transition(':leave', [
    style({ opacity: 1 }),
    animate('500ms ease-out', style({ opacity: 0 })),
  ]),
]);

export const slideIn = trigger('slideIn', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)' }),
    animate('500ms ease-out', style({ transform: 'translateX(0)' })),
  ]),
]);

export const slideOut = trigger('slideOut', [
  transition(':leave', [
    style({ transform: 'translateX(0)' }),
    animate('500ms ease-out', style({ transform: 'translateX(-100%)' })),
  ]),
]);

export const scaleIn = trigger('scaleIn', [
  transition(':enter', [
    style({ transform: 'scale(0)' }),
    animate('500ms ease-out', style({ transform: 'scale(1)' })),
  ]),
]);

export const scaleOut = trigger('scaleOut', [
  transition(':leave', [
    style({ transform: 'scale(1)' }),
    animate('500ms ease-out', style({ transform: 'scale(0)' })),
  ]),
]);

export const rotateIn = trigger('rotateIn', [
  transition(':enter', [
    style({ transform: 'rotate(0deg)' }),
    animate('500ms ease-out', style({ transform: 'rotate(360deg)' })),
  ]),
]);

export const rotateOut = trigger('rotateOut', [
  transition(':leave', [
    style({ transform: 'rotate(360deg)' }),
    animate('500ms ease-out', style({ transform: 'rotate(0deg)' })),
  ]),
]);

export const bounceIn = trigger('bounceIn', [
  transition(':enter', [
    style({ transform: 'translateY(-100%)' }),
    animate('500ms ease-out', style({ transform: 'translateY(0)' })),
  ]),
]);

export const bounceOut = trigger('bounceOut', [
  transition(':leave', [
    style({ transform: 'translateY(0)' }),
    animate('500ms ease-out', style({ transform: 'translateY(-100%)' })),
  ]),
]);

export const zoomIn = trigger('zoomIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.8)' }),
    animate('400ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
  ]),
]);

export const zoomOut = trigger('zoomOut', [
  transition(':leave', [
    style({ opacity: 1, transform: 'scale(1)' }),
    animate('400ms ease-out', style({ opacity: 0, transform: 'scale(0.8)' })),
  ]),
]);


export const staggeredList = trigger('staggeredList', [
  transition(':enter', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(15px)' }),
      stagger('500ms', [
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ], { optional: true }),
  ]),
]);

export const staggeredListLeave = trigger('staggeredListLeave', [
  transition(':leave', [
    query(':leave', [
      style({ opacity: 1, transform: 'translateY(0)' }),
      stagger('100ms', [
        animate('400ms ease-out', style({ opacity: 0, transform: 'translateY(15px)' })),
      ]),
    ], { optional: true }),
  ]),
]);


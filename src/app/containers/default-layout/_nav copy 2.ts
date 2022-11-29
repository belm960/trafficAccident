import { INavData } from '@coreui/angular';

export const navItems2: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Theme'
  },
  {
    name: 'Home',
    url: '/theme/home',
    icon: 'cui-home'
  },
  {
    name: 'accident',
    url: '/theme/accident',
    icon: 'cui-speedometer'
  },
  {
    name: 'users',
    url: '/theme/users',
    icon: 'cui-speedometer'
  },
  {
    name: 'All accident detail',
    url: '/theme/accidentlist',
    icon: 'cui-speedometer'
  },
 
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
];

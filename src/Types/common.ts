import { Location } from 'history';

export interface LayoutProps {
  location: Location;
  children: React.ReactNode;
}

export interface Good {
  readonly id: string;
  name: string;
  price: number;
  image: string;
}

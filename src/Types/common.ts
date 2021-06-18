import { Location } from 'history';

export interface LayoutProps {
  location: Location;
  children: React.ReactNode;
}

export interface Dealer {
  name: string;
  price: number;
  image: string;
}

export interface GameServiceItem {
    id: number;
    serviceName: string;
    serviceImageUrl: string;
    recommendations: string[];
  }
  
  export interface GameServicesProductCardProps {
    services: GameServiceItem[];
  }
  
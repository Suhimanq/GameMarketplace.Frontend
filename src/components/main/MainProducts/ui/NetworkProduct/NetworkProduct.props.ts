export interface NetworkServiceItem {
    id: number;
    serviceName: string;
    serviceImageUrl: string;
    recommendations: string[];
  }
  
  export interface NetworkServicesProductCardProps {
    services: NetworkServiceItem[];
  }
  
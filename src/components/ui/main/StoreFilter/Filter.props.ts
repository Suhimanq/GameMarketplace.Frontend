export interface FilterProps {
    onFilterChange: (filters: {
      searchTerm: string;
      category: string;
      platform: string;
      priceRange: number[];
    }) => void;
  }
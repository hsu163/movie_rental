// Unified Movie type (combines all your variants)
export type Movie = {
    id: string | number; // Handle both string and number IDs
    title: string;
    director: string;
    actors: string;
    genre: string;
    description: string;
    releaseDate: Date | string; // Handle both Date and string
    imageUrl: string;
    isInWatchlist?: boolean;
    price?: number; // Optional for cart functionality
  };
  
  // For cart items
  export type CartItemDto = {
    itemId: string | number;
    itemTitle: string;
    itemType: 'movie';
    quantity: number;
    price?: number;
    imageUrl?: string;
  };
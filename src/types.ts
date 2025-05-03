export interface Food {
  id: string;
  name: string;
  description: string;
  type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  cuisine: string;
  dietary?: 'vegetarian' | 'vegan' | 'gluten-free' | null;
  complexity: 'easy' | 'medium' | 'hard';
  imageUrl?: string;
}

export interface Filters {
  mealType: string;
  dietary: string;
  cuisine: string;
  complexity: string;
} 

export type HeaderProps = {
    onReset: () => void;
};
export type Checkpoint = {
    id: number;
    name: string;
    pingedAt: string | null;
};

export type CheckpointCardProps = {
    checkpoint: Checkpoint;
    onPing: (id: number) => void;
  };

export interface MetaData {
  state: number;
  threadId: string;
}

export interface UserMessage {
  id: number;
  sender: 'user';
  text: string;
}

export interface AIProduct {
  name: string;
  price: number;
  rating: number;
  ratingCount: number;
  thumbnail: string;
  link: string;
}

export interface AIMessage {
  id: number;
  sender: 'ai';
  text: string;
  products?: AIProduct[];
  questions: string[];
}

export type ChatMessage = UserMessage | AIMessage;

export interface MetaData {
  state: number;
  threadId: string;
}

export interface UserMessage {
  id: number;
  sender: 'user';
  text: string;
}

export interface AssistantProduct {
  name: string;
  price: number;
  rating: number;
  ratingCount: number;
  thumbnail: string;
  link: string;
}

export interface AssistantMessage {
  id: number;
  sender: 'assistant';
  text: string;
  products?: AssistantProduct[];
  questions: string[];
}

export type ChatMessage = UserMessage | AssistantMessage;

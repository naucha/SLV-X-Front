export interface IMobile {
  id: number;
  brand: string;
  model: string;
  created_at: string;
  upload_at: string;
}

export interface IMobileRequest {
  brand: string;
  model: string;
}

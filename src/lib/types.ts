export type Member = string;

export type RoomType = "core" | "web";

export interface User {
  userId: string;
}

export interface Members {
  members: Member[];
}

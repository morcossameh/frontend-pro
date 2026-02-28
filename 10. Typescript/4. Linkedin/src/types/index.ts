export interface Person {
  name: string;
  profilePicture: string;
  title: string;
}

export interface Reaction {
  type: string;
  count: number;
}

export interface Comments {
  numberOfComments: number;
}

export interface Post {
  id: number;
  person?: Person;
  user?: User;
  content: string;
  reactions?: Reaction[];
  date?: string;
  time?: string;
  createdAt?: string;
  comments?: Comments;
  commentsCount?: number;
  reposts?: number;
  repostsCount?: number;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  profilePicture?: string;
  headline?: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
}

export interface FetchPostsResponse {
  posts: Post[];
}

export interface Suggestion {
  name: string;
  badge: boolean;
  description: string;
  image: string;
}

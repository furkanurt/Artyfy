import type { AxiosError } from 'axios';

export type User = {
  memberId?: string;
  name?: string;
  surname?: string;
  username?: string;
  email?: string;
  phoneNumber?: string;
  newPassword?: string;
  oldPassword?: string;
  address?: string;
};

export type KeycloakUser = null | {
  name?: string;
  surname?: string;
  username?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
};

export type Post = {
  name?: string;
  surname?: string;
  userName?: string;
  avatar?: string;
  time?: string;
  inOnSale?: boolean;
  postDescription?: string;
  postImage?: PostImage;
  likeCount?: string;
  commentCount?: string;
  shareCount?: string;
};

export type PostImage = [];

export type UserSuggestion = {
  title?: string;
  subtitle?: string;
  prependAvatar?: string;
};

export type TrendSuggestion = {
  writer?: string;
  text?: string;
  trending?: string;
  photo?: string;
};

export type ErrorResponse = AxiosError<{
  description: string;
  errCode: string;
  message: string;
}>;

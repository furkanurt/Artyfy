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
  access_token: string;
  expires_in: number;
  not_before_policy: number;
  refresh_expires_in: number;
  refresh_token: string;
  scope: string;
  session_state: string;
  token_type: string;
};

export type AccountStore = {
  user: KeycloakUser;
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

export type AppStore = {
  locale?: any;
  breakpoint: string;
  isMobile: boolean;
  mobileMenuCollapsed: boolean;
};

import type { ReactElement } from 'react';

export type Page = 'login' | 'profile' | 'error';

export interface Pages {
  page: Page;
  route: string;
  isAuth: boolean;
  component: () => ReactElement;
}

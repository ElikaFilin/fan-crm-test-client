import { Pages } from '../interfaces/page.interface';
import { LoginForm, Profile } from '../components';

export const PAGES: Pages[] = [
  {
    page: 'login',
    route: '/login',
    isAuth: false,
    component: LoginForm,
  },
  {
    page: 'profile',
    route: '/',
    isAuth: true,
    component: Profile,
  },
];

const isAuth = ({ isAuth }: Pages) => isAuth;
const isNotAuth = (page: Pages) => !isAuth(page);

export const getRoutes = () => {
  const authRoutes: Pages[] = PAGES.filter(isAuth);
  const notAuthRoutes: Pages[] = PAGES.filter(isNotAuth);

  return {
    authRoutes,
    notAuthRoutes,
  };
};

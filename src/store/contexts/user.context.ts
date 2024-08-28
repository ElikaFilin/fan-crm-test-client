import { createContext } from 'react';
import { IUser } from '../../interfaces/user.interface';
import { errorsMessages } from '../../constants';

type UserContextType = {
  user: IUser | null;
  setUser: (user: IUser) => void;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {
    throw new Error(errorsMessages.notInsertedContext);
  },
});

import { ReactNode, useState } from 'react';
import { IUser } from '../../interfaces/user.interface';
import { UserContext } from '../contexts/user.context';

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<null | IUser>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

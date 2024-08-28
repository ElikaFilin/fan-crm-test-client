import { Layout } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './store/providers/user.provider';
import { appContentStyles } from './styles';
import { Router } from './router/Router';

const { Content } = Layout;

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Content style={appContentStyles}>
          <Router />
        </Content>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;

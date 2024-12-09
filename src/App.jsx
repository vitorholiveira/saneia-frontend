import React, { useState, useContext } from 'react';
import { Layout, Menu, Button } from 'antd';
const { Header, Content } = Layout;
import Login from './components/Login';
import UserReports from './components/UserReports';
import ReportForm from './components/ReportForm';
import MapPage from './components/MapPage';
import { setLogin } from './components/Store/actions';
import { store } from './components/Store';

const App = () => {
  const [selectedKey, setSelectedKey] = useState('1');
  const globalState = useContext(store);
  const { state, dispatch } = globalState;

  const items = [
    { key: "1", label: "Mapa" },
    { key: "2", label: "Denunciar" },
    { key: "3", label: "Suas denúncias" }
  ];

  const renderContent = () => {
    switch(selectedKey) {
      case '1':
        return <MapPage />
      case '2':
        return <ReportForm />
      case '3':
        return <UserReports />;
      default:
        return null;
    }
  };

  const logout = () => {
    dispatch(setLogin(false))
  }

  return (
    <Layout style={{ height: '100vh' }}>
      <Header
        style={{
          position: 'fixed',
          zIndex: 1000,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[selectedKey]}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
          onClick={({ key }) => setSelectedKey(key)}
        />
        {state.login === true  && <Button type="primary" onClick={logout}>Logout</Button>}
        {state.login === false && <div style={{ color: 'white', flex: 1, textAlign: 'right'}}>Você não está logado.</div>}
      </Header>
      <Content
        style={{
          marginTop: 64, // Header height
          padding: 40,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {renderContent()}
      </Content>
    </Layout>
  );
};

export default App;
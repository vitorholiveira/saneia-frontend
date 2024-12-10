import React, { useState, useContext } from 'react';
import { Layout, Menu, Button, Space, Image } from 'antd';
const { Header, Content } = Layout;
import Login from './components/Login';
import UserReports from './components/UserReports';
import ReportForm from './components/ReportForm';
import MapPage from './components/MapPage';
import { setLogin } from './components/Store/actions';
import { store } from './components/Store';
import logoSaneia from './assets/logo_saneia.png';

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
    <Layout style={{ height: '100vh', backgroundColor: '#f5f5f5'}}>
      <Header
        style={{
          position: 'fixed',
          zIndex: 1005,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#ffffff'
        }}
      >
        <Image
          width={50}
          src={logoSaneia}
          preview={false}
          style={{marginRight: 10}}
        />
        <Menu
          mode="horizontal"
          selectedKeys={[selectedKey]}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
            marginLeft:20
          }}
          onClick={({ key }) => setSelectedKey(key)}
        />
        {state.login === true  && <Button color="primary" variant="outlined" onClick={logout}>Logout</Button>}
        {state.login === false && <div style={{ flex: 1, textAlign: 'right'}}>Você não fez login.</div>}
      </Header>
      <Space
        style={{
          marginTop: 64, // Header height
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {renderContent()}
      </Space>
    </Layout>
  );
};

export default App;
import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import { GlobalStyle } from './style/global';
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './style/theme';

const Layout = styled.div`

`

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
    <GlobalStyle/>
    <Layout>
      <Header/>
    </Layout>
    </ThemeProvider>
  );
}

export default App;

import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import { GlobalStyle } from './style/global';
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './style/theme';
import { Main } from './components/Main';

const Layout = styled.div`

`

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
    
    <GlobalStyle/>
    <Layout className='Layout'>
      <Header/>
      <Main/>

    </Layout>

    </ThemeProvider>
  );
}

export default App;

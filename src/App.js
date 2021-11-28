import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyle';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import ContentBuilder from './ContentBuilder';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ContentBuilder />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

import { RouterProvider } from 'react-router-dom';
import router from './router/Router.jsx';
import GlobalStyle from './style/GlobalStyle.js';


function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}


export default App;

import { RouterProvider } from 'react-router-dom';
import router from './router/Router.jsx';
import GlobalStyle from './style/GlobalStyle.js';
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <GlobalStyle />
                <RouterProvider router={router} />
            </QueryClientProvider>
        </>
    );
}


export default App;

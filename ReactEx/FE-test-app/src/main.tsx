import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/index.scss"
import { RouterProvider } from 'react-router'
import { router } from './app/router.tsx'
import store from './store/store.ts'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient();


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
)

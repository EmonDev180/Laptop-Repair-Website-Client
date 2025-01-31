import React from 'react'
import ReactDOM from 'react-dom/client'

import {

  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './Routes/Routes.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';

import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <AuthProvider>

        <QueryClientProvider client={queryClient}>

          <div className='max-w-screen-xl  mx-auto'>
            <RouterProvider router={router} />
          </div>

        </QueryClientProvider>


      </AuthProvider>
    </React.StrictMode>,
  </div>
)

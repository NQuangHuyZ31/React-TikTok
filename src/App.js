import React from 'react';
import {Fragment} from'react';
import { Routes, Route} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { publicRouters } from '~/routers';
import { DefaultLayout } from '~/components/Layout';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {publicRouters.map((route, index) => {
            
            const Page = route.component;

            let Layout = DefaultLayout;
            if(route.layout){
              Layout = route.layout
            }else if(route.layout === null){
              Layout = Fragment
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

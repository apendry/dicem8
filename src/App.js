import * as React from 'react';
import { createHashRouter, RouterProvider, BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import ButtonBar from './navigation/ButtonBar';
import BasicRoll from './pages/BasicRoll';
import About from './pages/About';
import Box from '@mui/material/Box';
import HitLocationRoll from './pages/battletech/HitLocationRoll'
import ClusterRoll from './pages/battletech/ClusterRoll';
import SkidDieRoll from './pages/gaslands/SkidDieRoll';

export default function App() {

  // const router = createHashRouter([
  //   {
  //     path: "/",
  //     element: <BasicRoll />
  //   },
  //   {
  //     path: "/pages/battletech/hitloc",
  //     element: <HitLocationRoll />
  //   },
  //   {
  //     path: "/pages/battletech/cluster",
  //     element: <ClusterRoll />
  //   },
  //   {
  //     path: "/pages/gaslands/skiddie",
  //     element: <SkidDieRoll />
  //   },
  //   {
  //     path: "/pages/about",
  //     element: <About />
  //   }
  // ]);


    return (
        <>
          <Box sx={{ width: "auto", maxWidth: "600px"}}>
            <HashRouter>
              <ButtonBar/>
              <Routes>
                  <Route path="/" element={<BasicRoll />}/>
                  <Route path="/pages/battletech/hitloc" element={<HitLocationRoll />}/>
                  <Route path="/pages/battletech/cluster" element={<ClusterRoll />}/>
                  <Route path="/pages/gaslands/skiddie" element={<SkidDieRoll />}/>
                  <Route path="/pages/about" element={<About />} />
              </Routes>
            </HashRouter>
          </Box>
        </>
    );
}
import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ButtonBar from './navigation/ButtonBar';
import BasicRoll from './pages/BasicRoll';
import About from './pages/About';
import Box from '@mui/material/Box';
import HitLocationRoll from './pages/battletech/HitLocationRoll'
import ClusterRoll from './pages/battletech/ClusterRoll';
import SkidDieRoll from './pages/gaslands/SkidDieRoll';

export default function App() {

    return (
        <>
          <Box sx={{ width: "auto", maxWidth: "600px"}}>
            <ButtonBar/>
            <BrowserRouter>
              <Routes>
                  <Route path="/dicem8" element={<BasicRoll />}/>
                  <Route path="/dicem8/pages/battletech/hitloc" element={<HitLocationRoll />}/>
                  <Route path="/dicem8/pages/battletech/cluster" element={<ClusterRoll />}/>
                  <Route path="/dicem8/pages/gaslands/skiddie" element={<SkidDieRoll />}/>
                  <Route path="/dicem8/pages/about" element={<About />} />
              </Routes>
            </BrowserRouter>
          </Box>
        </>
    );
}
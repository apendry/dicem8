import * as React from 'react';
import { HashRouter, Routes, Route} from "react-router-dom";
import Navigation from './navigation/Navigation';
import BasicRoll from './pages/BasicRoll';
import About from './pages/About';
import Box from '@mui/material/Box';
import HitLocationRoll from './pages/battletech/HitLocationRoll'
import ClusterRoll from './pages/battletech/ClusterRoll';
import SkidDieRoll from './pages/gaslands/SkidDieRoll';
import TwoWayMap from './core/TwoWayMap';

export const endPoints = new TwoWayMap(
  [
    ["Basic Roll", "/"],
    ["About", "/pages/about"],
    ["Hit Location", "/pages/battletech/hitloc"],
    ["Cluster Table", "/pages/battletech/cluster"],
    ["Skid Die", "/pages/gaslands/skiddie"]
])


export default function App() {

  return (
    <>
      <Box sx={{ width: "auto", maxWidth: "480px"}}>
        <HashRouter>
          <Navigation/>
          <Routes>
              <Route path={endPoints.get("Basic Roll")} element={<BasicRoll />}/>
              <Route path={endPoints.get("Hit Location")} element={<HitLocationRoll />}/>
              <Route path={endPoints.get("Cluster Table")} element={<ClusterRoll />}/>
              <Route path={endPoints.get("Skid Die")} element={<SkidDieRoll />}/>
              <Route path={endPoints.get("About")} element={<About />} />
          </Routes>
        </HashRouter>
      </Box>
    </>
  );

}
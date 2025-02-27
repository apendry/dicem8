import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Grid2, MenuItem, FormControlLabel, FormGroup, Switch, FormControl } from '@mui/material';
import { RollMapped } from '../../core/Rolling';
import { Icon } from '@iconify/react/dist/iconify.js';
import { FrontHitLocation, LeftHitLocation, RightHitLocation, QuadFrontHitLocation, QuadRightHitLocation, QuadLeftHitLocation } from '../../core/maps/BattleTechMaps';

export default function HitLocationRoll() {
    const [isQuad, setQuad] = useState(false);
    const [facing, setFacing] = useState("ft");
    const [nDie, setNDie] = useState(1);
    const [result, setResult] = useState("");

    function getRollMap() {
        switch(facing) {
            case "ft": return isQuad ? QuadFrontHitLocation : FrontHitLocation 
            case "rt": return isQuad ? QuadRightHitLocation : RightHitLocation
            case "lt": return isQuad ? QuadLeftHitLocation : LeftHitLocation
        }
    }

    function roll() {
        let rollMap = getRollMap()
        let mappedRolls = RollMapped(nDie, rollMap)
        setResult(mappedRolls.join("\n")); 
    }

    return (
        <>
        <FormGroup>
            <Grid2 container spacing={2} columns={12} justifyContent="flex-start" alignItems="center">
                <Grid2 size={1.5}>
                    <Button type='submit' variant="contained" onClick={roll} >Roll</Button>
                </Grid2>
                <Grid2 size={2}>
                    <FormControlLabel control={<Switch name="Quad" variant="outlined" onChange={(event) => setQuad(event.target.checked)}/>} label="Quad" labelPlacement="top"/>
                </Grid2>
                <Grid2 size={3}>
                    <TextField fullWidth select id="s" label="Facing" variant="outlined" defaultValue="ft" onChange={(event) => {setFacing(event.target.value)}}>
                        <MenuItem key="ft" value="ft">Front/Rear</MenuItem>
                        <MenuItem key="rt" value="rt">Right</MenuItem>
                        <MenuItem key="lt" value="lt">Left</MenuItem>
                    </TextField>
                </Grid2>
                <Grid2 size={5.5}>
                    <TextField fullWidth id="n" label={`Number of Pairs`} variant="outlined" defaultValue="1" onChange={(event) => {setNDie(parseInt(event.target.value))}}/>
                </Grid2>
                <Grid2 size={12}>
                    <TextField fullWidth disabled id="results-box" label="Results" variant="outlined" multiline maxRows={10} value={result}/>
                </Grid2>
            </Grid2>
        </FormGroup>
        </>
    );
}
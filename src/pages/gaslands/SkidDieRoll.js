import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Grid2, MenuItem, FormControlLabel, FormGroup, Switch, FormControl } from '@mui/material';
import { RollMapped } from '../../core/Rolling';
import { Icon } from '@iconify/react/dist/iconify.js';
import { GaslandsSkidDie } from '../../core/maps/OtherMaps';

export default function SkidDieRoll() {
    const [nDie, setNDie] = useState(1);
    const [result, setResult] = useState("");

    function roll() {
        let mappedRolls = RollMapped(nDie, GaslandsSkidDie)
        setResult(mappedRolls.join("\n")); 
    }

    return (
        <>
        <FormGroup>
            <Grid2 container spacing={2} columns={12} alignItems="center">
                <Grid2 size={1.5}>
                    <Button sx={{ maxWidth: "50px", minWidth: "30px"}} type='submit' variant="contained" onClick={roll}>Roll</Button>
                </Grid2>
                <Grid2 size={10.5}>
                    <TextField  fullWidth id="n" label={`Number of Skid Die`} variant="outlined" defaultValue={1} onChange={(event) => {setNDie(event.target.value)}}/>
                </Grid2>
                <Grid2 size={12}>
                    <TextField fullWidth disabled id="results-box" label="Results" variant="outlined" multiline maxRows={10} value={result}/>
                </Grid2>
            </Grid2>
        </FormGroup>
        </>
    );
}
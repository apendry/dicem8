import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Grid2, MenuItem, FormControlLabel, FormGroup, Switch, FormControl } from '@mui/material';
import { RollMapped } from '../../core/Rolling';
import { Icon } from '@iconify/react/dist/iconify.js';
import ClusterTypesMenu from '../../navigation/menus/ClusterTypesMenu';
import { GetClusterMap } from '../../core/maps/BattleTechMaps';

export default function ClusterRoll() {
    const [cluster, setCluster] = useState(5);
    const [nDie, setNDie] = useState(1);
    const [result, setResult] = useState("");

    function roll() {
        let rollMap = GetClusterMap(cluster)
        let mappedRolls = RollMapped(nDie, rollMap)
        setResult(mappedRolls.join("\n")); 
    }

    return (
        <>
        <FormGroup>
            <Grid2 container spacing={2} columns={12} justifyContent="flex-start" alignItems="center">
                <Grid2 size={3}>
                    <ClusterTypesMenu setCluster={setCluster}/>
                </Grid2>
                <Grid2 size="grow">
                    <TextField fullWidth id="n" label={`Number of Pairs`} variant="outlined" defaultValue="1" onChange={(event) => {setNDie(parseInt(event.target.value))}}/>
                </Grid2>
                <Grid2 size={1.5}>
                    <Button type='submit' variant="contained" onClick={roll} >Roll</Button>
                </Grid2>
                <Grid2 size={12}>
                    <TextField fullWidth disabled id="results-box" label="Results" variant="outlined" multiline maxRows={10} value={result}/>
                </Grid2>
            </Grid2>
        </FormGroup>
        </>
    );
}
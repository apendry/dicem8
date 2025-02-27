import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { FormControlLabel, FormGroup, Grid2, Switch } from '@mui/material';
import {Icon} from "@iconify/react"
import DieTypesMenu from '../navigation/menus/DieTypesMenu';
import {RollNdS} from '../core/Rolling';

export default function BasicRoll() {
    const [paired, setPaired] = useState(false);
    const [dieType, setDieType] = useState(6);
    const [nDie, setNDie] = useState(1);
    const [result, setResult] = useState("");

    function roll() {
        let resultMessage = "";
        if(paired) {
            const [rolls, ] = RollNdS(nDie, paired, dieType)
            resultMessage = rolls.map(roll => `2d${dieType}: ${roll}`).join("\n")
        } else {
            var [rolls, total] = RollNdS(nDie, paired, dieType)
            resultMessage += nDie > 1 ? `Total ${nDie}d${dieType}: ${total}\n` : ""
            resultMessage += rolls.map(roll => `1d${dieType}: ${roll}`).join("\n")
        }
        setResult(resultMessage); 
    }

    return (
        <>
        <Grid2 container spacing={2} columns={12} justifyContent="flex-start" alignItems="center">
            <Grid2 size={1}>
                <Button variant="contained" onClick={roll} >Roll</Button>
            </Grid2>
            <Grid2 size={2}>
                <FormGroup>
                    <FormControlLabel control={<Switch name="Paired" variant="outlined" onChange={(event) => setPaired(event.target.checked)}/>} label={<Icon icon="game-icons:rolling-dices"/>} labelPlacement="start"/>
                </FormGroup>
            </Grid2>
            <Grid2 size="grow">
                <TextField fullWidth id="n" label={`Number of ${paired ? "Pairs" : "Dice"}`} variant="outlined" defaultValue="1" onChange={(event) => {setNDie(parseInt(event.target.value))}}/>
            </Grid2>
            <Grid2 size={4.5}>
                <DieTypesMenu setDieType={setDieType}/>
            </Grid2>
            <Grid2 size={12}>
                <TextField fullWidth disabled id="results-box" label="Results" variant="outlined" multiline maxRows={10} value={result}/>
            </Grid2>
        </Grid2>
        </>
    );
}
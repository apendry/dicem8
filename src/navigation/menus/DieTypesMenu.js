import TextField from '@mui/material/TextField';
import {MenuItem} from '@mui/material';


export default function DieTypesMenu({setDieType}) {
    return (
        <>
            <TextField fullWidth select id="s" label="Die Type" variant="outlined" defaultValue={6} onChange={(event) => {setDieType(event.target.value)}}>
                <MenuItem key="2" value={2}>Coin</MenuItem>
                <MenuItem key="6" value={6}>Six</MenuItem>
                <MenuItem key="8" value={8}>Eight</MenuItem>
                <MenuItem key="10" value={10}>Ten</MenuItem>
                <MenuItem key="12" value={12}>Twelve</MenuItem>
                <MenuItem key="20" value={20}>Twenty</MenuItem>
                <MenuItem key="100" value={100}>Percentile</MenuItem>
            </TextField>
        </>
    )

}
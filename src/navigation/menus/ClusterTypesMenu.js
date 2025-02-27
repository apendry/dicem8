import TextField from '@mui/material/TextField';
import {MenuItem} from '@mui/material';


export default function ClusterTypesMenu({setCluster}) {
    return (
        <>
            <TextField required fullWidth select id="s" label="Cluster Size" variant="outlined" defaultValue={6} onChange={(event) => {setCluster(event.target.value)}}>
                <MenuItem key="2" value={2}>2</MenuItem>
                <MenuItem key="3" value={3}>3</MenuItem>
                <MenuItem key="4" value={4}>4</MenuItem>
                <MenuItem key="5" value={5}>5</MenuItem>
                <MenuItem key="6" value={6}>6</MenuItem>
                <MenuItem key="7" value={7}>7</MenuItem>
                <MenuItem key="8" value={8}>8</MenuItem>
                <MenuItem key="9" value={9}>9</MenuItem>
                <MenuItem key="10" value={10}>10</MenuItem>
                <MenuItem key="12" value={12}>12</MenuItem>
                <MenuItem key="15" value={15}>15</MenuItem>
                <MenuItem key="20" value={20}>20</MenuItem>
                <MenuItem key="30" value={30}>30</MenuItem>
                <MenuItem key="40" value={40}>40</MenuItem>
            </TextField>
        </>
    )

}
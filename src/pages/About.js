import { Grid2 } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function About() {


    return (
        <>
            <Grid2 container spacing={2} columns={12} justifyContent="flex-start" alignItems="center">
                <Grid2 size={.5}/>
                <Grid2 size={10}>
                    <Typography variant="text" component="div">
                        As a side project I've created this app to facilitate dice rolling.
                        More specifically this idea came about from playing BattleTech and 
                        using one of my favourite mechs the "King Crab". In an ideal scenario
                        this can result in up to 40x2d6 rolls. Each one of these results then
                        maps to a table determining where a damage pip lands. My sparing partner
                        at the time disdained how slow this process was so we resorted to using 
                        third party applications / websites to help determine the rolls. 

                        Sadly what was up on offer lacked core features and or usability hence 
                        arrived DiceM8.
                    </Typography>
                </Grid2>
                <Grid2 size={.5}/>
            </Grid2>
        </>
    );
}
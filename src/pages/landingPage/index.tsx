import { Container, Grid } from "@mui/material";
import { Theme } from '@mui/material/styles';
// import  useStyles  from '@mui/material/styles';


const LandingPage = () => {
  return (
    <Grid container spacing={2} style={{
      flexGrow: 1,
      padding: 2,
    }}>
      <Grid item xs={12} sm={6} md={4} lg={24}>
        1
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={24}>
        2
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={24}>
        3
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={24}>
        4
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={24}>
        5
      </Grid>
    </Grid>
  );
}

export default LandingPage

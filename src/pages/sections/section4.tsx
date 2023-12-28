import { Grid } from "@mui/material";
import { section4Content } from "../../utils/content";
import CardComponent from "../../components/Cards";
import Logo from '../../assets/images/background.png';

const { Rectangle23, Rectangle24, Rectangle25 } = section4Content;

const section4 = () => {
    return (
        <div style={{ justifyContent: "center", alignItems: 'center' }}>
            <Grid container spacing={2}
                style={{
                    backgroundImage: `url(${Logo})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "50%",
                    justifyContent: "center", alignItems: 'center',
                    marginTop: '3rem',
                    padding: '5rem'
                }}
            >
                <Grid item xs={4} sm={2} md={3} lg={2}>
                    <CardComponent src={Rectangle23} />
                </Grid>
                <Grid item xs={4} sm={2} md={3} lg={2}>
                    <CardComponent src={Rectangle24} />

                </Grid>
                <Grid item xs={4} sm={2} md={3} lg={2}>
                    <CardComponent src={Rectangle25} />
                </Grid>
            </Grid>
        </div>
    )
}

export default section4;
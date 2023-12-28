import { Grid, Typography } from "@mui/material";
import { section3Content } from "../../utils/content";

const { Rectangle20, Rectangle21 } = section3Content;

const style: any = {
    parent: {
        position: "relative",
        top: 0,
        left: 0
    },
}
const Section3 = () => {
    return (
        <>
            <Grid container spacing={2} style={{ marginBottom: "1rem" }}>
                <div className="parent">
                    <img className="image2" src={Rectangle21} />
                    <img
                        style={{
                            position: "absolute",
                            top: '5.3%',
                            right: '63%',
                        }}
                        className="image1" src={Rectangle20} />
                </div>
                {/* </Grid> */}
                <Grid item xs={6} sm={4} md={4} lg={4} style={{ marginTop: '17rem', marginLeft: "6rem" }}>
                    <Typography variant="h3" textAlign="center" style={{ color: "#C49F72" }}>
                        Lorem ipsum
                        & dolor sit amet
                    </Typography>
                    <Typography variant="body2" textAlign="center">
                        Phasellus elementum egestas lorem, at dictum urna sodales  facilisis Maecenas ut tortor quis urna tincidunt molestie
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default Section3;
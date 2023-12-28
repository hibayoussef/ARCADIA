import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { section1Content } from "../../utils/content";

const { title, subtitle, MainIG } = section1Content;

const Section1 = () => {
    return (
        <Box>
            {/* Main Background */}
            <Box sx={{ position: "fixed", zIndex: -10, top: 0, right: 0, left: 0 }}>
                <img src={MainIG} width="100%" style={{ width: "100%" }} />
            </Box>
            {/* Background Elements */}

            {/* Content */}
            <Container sx={{ height: "100vh" }}>
                <Stack sx={{ height: "100%", px: 3 }} justifyContent="center" alignItems="center">
                    <Typography variant="body2" sx={{ letterSpacing: '0.02em', mb: 1 }}>
                        {subtitle}
                    </Typography>

                    <Typography variant="h1" sx={{ letterSpacing: '0.02em', mb: 1 }}>
                        {title}
                    </Typography>
                </Stack>
            </Container>
        </Box>
    )
}

export default Section1;
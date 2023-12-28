import {
    Box,
    Container,
    Divider,
    Grid,
    IconButton,
    Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { footerContent } from "../../utils/content";

const {
    Logo,
    subscribe,
    firstCol,
    secondCol,
    copyright,
    socials,
}: any = footerContent;

console.log('subscribe: ', subscribe)
const LinkSection = ({ title, links }: any) => (
    <Stack spacing={2.5}>
        {title}

        {links.map(({ title }: any) => (
            <Typography
                key={title}
                variant="body2"
                color="text.secondary"
                sx={{
                    cursor: "pointer",
                    "&:hover": {
                        color: "text.primary",
                    },
                }}
            >
                {title}
            </Typography>
        ))}
    </Stack>
);

const Footer = () => {
    return (
        <Box>
            <Divider sx={{ mb: 10 }} />

            <Container>
                <Grid container spacing={8} flexWrap="wrap-reverse">
                    {/* Links */}
                    <Grid item xs={12} md={6} lg={9} xl={8}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={12} lg={8}>
                                <img src={Logo} />
                            </Grid>

                            <Grid item xs={6} sm={3} md={6} lg={2}>
                                <LinkSection {...firstCol} />
                            </Grid>

                            <Grid item xs={6} sm={3} md={6} lg={2}>
                                <LinkSection {...secondCol} />
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* Subscribe */}
                    <Grid item xs={12} md={6} lg={3} xl={4}>
                        <Stack>
                            <Typography variant="body1" color="text.secondary">
                                {subscribe.title}
                            </Typography>

                            <Stack
                                direction="row"
                                spacing={1}
                                alignItems="center"
                                flexWrap="wrap"
                            >
                                {socials.map((item: any, i: any) => (
                                    <IconButton key={i}>
                                        <item.icon />
                                    </IconButton>
                                ))}
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>

                <Divider sx={{ mt: 6, mb: 5 }} />

                <Stack
                    direction={{ xs: "column", md: "row" }}
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={1}
                    sx={{ pb: 6 }}
                >
                    <Typography variant="body2" color="text.secondary">
                        {copyright.left}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {copyright.center}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {copyright.right}
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
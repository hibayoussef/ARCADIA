import { Box } from "@mui/material";
import Footer from "../components/Footers/MainFooter";
import Navbar from "../components/Navbars/MainNavbar";
import Section1 from "./sections/section1";
import Section2 from "./sections/section2";
import Section3 from "./sections/section3";
import Section4 from "./sections/section4";

const Home = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar />

            {/* Sections */}
            <Section1 />

            <Box sx={{ bgcolor: "background.default", position: "relative" }}>
                <Section2 />
                <Section3 />
                <div>
                    <Section4 />
                </div>
                {/* Footer */}
                <Footer />
            </Box>
        </div>
    )
}

export default Home;
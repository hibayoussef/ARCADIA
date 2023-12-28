import MainIG from '../assets/images/navbar-image.png';
import Logo from '../assets/images/logo.png';
import Rectangle20 from '../assets/images/Rectangle 20.png';
import Rectangle21 from '../assets/images/Rectangle 21.png';
import Rectangle23 from '../assets/images/Rectangle 23.png';
import Rectangle24 from '../assets/images/Rectangle 24.png';
import Rectangle25 from '../assets/images/Rectangle 25.png';

// Footer
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const section1Content = {
    MainIG,
    title: "Lorem Ipsum",
    subtitle: "Lorem , Ipsum , dolor , sit , amet",
};

export const section3Content = {
    Rectangle20,
    Rectangle21
};

export const section4Content = {
    Rectangle23,
    Rectangle24,
    Rectangle25
};



export const footerContent = {
    Logo,
    firstCol: {
        links: [
            { title: "ANASAYFA" },
            { title: "HAKKIMIZDA" },
            { title: "BELGELER" },
        ],
    },
    secondCol: {
        links: [
            { title: "ESANS" },
            { title: "AROMA" },
            { title: "ILETISIM" },
        ],
    },
    subscribe: {
        title: "Follow Us",
    },
    socials: [
        { icon: FacebookIcon },
        { icon: TwitterIcon },
        { icon: InstagramIcon },
        { icon: LinkedInIcon },
    ],
    copyright: {
        left: "© 2023 ARCADIA, All Rights Reserved.",
        center: "ENS: ARCADIA",
    },
};

export const navbarContent = {
    Logo,
};

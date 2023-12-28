import { Button } from "@mui/material";

const ButtonComp = ({
    sx = {}, ...props
}) => {
    return (
        <Button variant="outlined" style={{ borderRadius: '3rem' }} sx={{ borderRadius: '1rem', ...sx }} {...props}>Contact US</Button>
    )
}

export default ButtonComp; 
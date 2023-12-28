import { Card, CardMedia, Typography } from '@mui/material';

const styles: any = {
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9, 

    },
    card: {
        position: 'relative',
        background: 'url(https://picsum.photos/200/300) no-repeat center', // add a background image URL here
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    overlay: {
        position: 'absolute',
        top: '100px',
        left: '20px',
        right: '20px',
        color: 'black',
        backgroundColor: 'white'
    }
}

const CardComponent = (pic: any) => {
    return (
        <Card style={styles.card}>
            <CardMedia
                // style={styles.media}
                component="img"
                alt="Image"
                src={pic.src}
                height={180}
                width={100}

            />
            <div style={styles.overlay}>
                <Typography variant="body1" style={{ textAlign: 'center' }}>Lorem Ipsum</Typography>
                <Typography variant='body2' style={{ textAlign: 'center' }}>Lorem Ipsum</Typography>
            </div>
        </Card>

    );
};

export default CardComponent;

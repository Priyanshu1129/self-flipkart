import { Grid , styled} from "@mui/material";
import { imageURL } from "../../Constants/data";

const Wrapper = styled(Grid)`
margin-top: 15px;
justify-content: space-between;
`
const Image = styled('img')(({theme})=>({
    width: '100%',
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]:{
        objectFit: 'cover',
        height: 120
    }
}))
const MidSection = ()=>{  
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

    return (

        <Wrapper container xl={12}>
        {
            imageURL.map((image) => (
                <Grid item xl={4} md={4} sm={12} xs={12}>
                    <img src={image} alt="image" style={{width: '100%'}}/>
                </Grid>
            ))
        }
        <Image src={url} alt="" />
        </Wrapper>
    )
} 

export default MidSection
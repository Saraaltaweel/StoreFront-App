import { connect } from 'react-redux';
import {Container,Typography,Grid,Card,CardMedia,CardContent,makeStyles} from '@material-ui/core/';
import { increment } from '../store/products-reducer';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    
  },
  cardMedia: {
    paddingTop: '90.0%',
  },

}));

const Status = (props) => {
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {props.products.products.map((product) => {
          return (
            <Grid item key={product._id} xs={12} sm={6} md={4} border-radius= "25% 10%">
              <Card >
                <CardMedia
                  className={classes.cardMedia}
                  image={product.url}
                  title="Image title"
                />
                <CardContent >
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography>Price: ${product.price}</Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => ({ products: state.products });
const mapDispatchToProps = { increment };
export default connect(mapStateToProps, mapDispatchToProps)(Status);
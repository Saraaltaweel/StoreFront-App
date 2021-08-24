import { connect } from 'react-redux';
import {Container,Typography,Grid,Card,CardMedia,CardContent,makeStyles,CardActions,Button} from '@material-ui/core/';
import { increment, getRemoteData } from '../store/actions';
import { useEffect } from 'react';
const api= 'https://run.mocky.io/v3/86db0ece-4dea-44d6-9913-3fd9c13b03aa';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    
  },
  cardMedia: {
    paddingTop: '90.0%',
  },

}));

const Products = (props) => {
  const classes = useStyles();
  useEffect(() => {
    props.getRemoteData(api);
  }, []);
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {props.products.display.length > 0
        ? props.products.display.map((product) => {
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
                  <Typography className='price'>Price: ${product.price}</Typography>
                  <Typography className='stock'>
                    {product.inStock > 0
                      ? `In stock, ${product.inStock} items left`
                      : 'Out of Stock'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                  variant="contained"
                    size="big"
                    color="defualt"
                    onClick={() => props.increment(product)}
                    disabled={product.inStock > 0 ? false : true}
                  >
                    ADD TO CART
                  </Button>
                  <Button variant="contained" size="big" color="defualt">
                    VIEW DETAILS
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })
        :props.products.products.map((product) => {
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
                  <Typography className='price'>Price: ${product.price}</Typography>
                  <Typography className='stock'>
                    {product.inStock > 0
                      ? `In stock, ${product.inStock} items left`
                      : 'Out of Stock'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                  variant="contained"
                    size="big"
                    color="defualt"
                    onClick={() => props.increment(product)}
                    disabled={product.inStock > 0 ? false : true}
                  >
                    ADD TO CART
                  </Button>
                  <Button variant="contained" size="big" color="defualt">
                    VIEW DETAILS
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })
      }
      </Grid>
    </Container>
  );
};


const mapStateToProps = (state) => ({ products: state.products });
const mapDispatchToProps = { increment, getRemoteData };
export default connect(mapStateToProps, mapDispatchToProps)(Products);
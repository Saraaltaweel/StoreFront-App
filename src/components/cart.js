import { connect } from 'react-redux';
import {Button,Box,Typography,Drawer,List,ListItem,Grid,Divider,makeStyles} from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { increment, show, decrement } from '../store/actions';
import '../App.css';
 
  const SimpleCart = (props) => {
    let display = props.cart.display || [];
    return (
      <>
        <Button color="inherit" onClick={() => props.show(!props.cart.show)}>
          <Box
            display="flex"
            width={130}
            height={50}
            alignItems="center"
            color="white"
          >
            <ShoppingCartOutlinedIcon />{' '}
            <Typography variant="h6" gutterBottom mx={3}>
              cart ({props.cart.count})
            </Typography>
          </Box>
        </Button>
        <Drawer    
          open={props.cart.show}
          onClose={() => props.show(false)}
        >
          <List >
            <ListItem className='cart'>
                <Typography  variant="h4">Cart</Typography>
            </ListItem>
            <Divider />
            {display.map((product) => {
              return (
                <ListItem key={product._id}>
                  <Grid
                    container
                    alignItems="center"
                    justify="space-between"
                    wrap="wrap"
                    spacing={2}
                  >
                    <Typography variant="h6">
                      <strong>{product.name}</strong> ({product.count + 1})
                    </Typography >
                    <Typography variant="body1">
                    ${(product.count + 1) * product.price}
                    <DeleteOutlinedIcon onClick={() => props.decrement(product)}/>
                  </Typography>
                  </Grid>
                </ListItem>
              );
            })}
            <Divider />
          </List>
        </Drawer>
      </>
    );
  };
  
  const mapStateToProps = (state) => ({ cart: state.cart });
  const mapDispatchToProps = { increment, show, decrement };
  export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
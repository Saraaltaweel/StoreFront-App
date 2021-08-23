import {AppBar,Typography,Toolbar,Grid} from '@material-ui/core/';
import Cart from './cart';

  function Header(props) {
    return (
      <AppBar position="relative">
        <Toolbar>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <h2 >
            My Store
          </h2>
          </Grid>
          <Cart />
        </Toolbar>
      </AppBar>
    );
  }
  
  export default Header
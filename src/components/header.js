import {AppBar,Typography,Toolbar} from '@material-ui/core/';
  
  function Header(props) {
    return (
      <AppBar position="relative">
        <Toolbar>
          <h2 >
            My Store
          </h2>
        </Toolbar>
      </AppBar>
    );
  }
  
  export default Header
import { connect } from 'react-redux';
import { Container, Typography, makeStyles } from '@material-ui/core';
import Categories from '../components/categories';
import Products from '../components/products'

const useStyles = makeStyles((theme) => ({

}));

const Store = (props) => {
  const classes = useStyles();
  let description =
    props.activeList.activeCategories.description;
  return (
    <main>
      <div className={classes.heroContent}>
        <Container>
          <Categories />
          <Typography
            // component="p"
            // variant="h5"
            // align="center"
            // color="textSecondary"
            // gutterBottom
          >
            {description}
          </Typography>
        </Container>
      </div>
      <Products className="main" />
    </main>
  );
};

const mapStateToProps = (state) => ({
  activeList: state.categories,
});

export default connect(mapStateToProps)(Store);
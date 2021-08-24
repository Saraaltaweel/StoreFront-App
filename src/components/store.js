import { connect } from 'react-redux';
import { Container, Typography } from '@material-ui/core';
import Categories from '../components/categories';
import Products from '../components/products'


const Store = (props) => {
  let category = props.activeList.activeCategories.display_name;
  let description =
    props.activeList.activeCategories.description;
  return (
    <main>
      <div>
        <Container>
          <Categories />
          <Typography
            component="h3"
            variant="h4"
            align="center"
            color="textPrimary"
            mt="3"
          >
            {category}
          </Typography>
          <br />
          <Typography
        
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
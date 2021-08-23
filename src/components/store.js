import { connect } from 'react-redux';
import { Container, Typography } from '@material-ui/core';
import Categories from '../components/categories';
import Products from '../components/products'


const Store = (props) => {
  let description =
    props.activeList.activeCategories.description;
  return (
    <main>
      <div>
        <Container>
          <Categories />
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
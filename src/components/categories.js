import {connect} from 'react-redux';
import { Button,Grid} from '@material-ui/core';
import {active} from '../store/categories-reducer.js'

const activeCategories=(props)=>{
    return(
        <div>
            <Grid >
                {
                    props.activeList.categories.map((category)=>{
                        return(
                            <Grid  key={category.name}>
                                <Button
                                 onClick={()=>props.active(category.name)}
                                >{category.display_name}</Button>

                            </Grid>                        )
                    })
                }
            </Grid>
        </div>
    )
}

const stateToProps=(state)=>({
    activeList:state.categories,
})
const dispatchToProps={active};
export default connect(stateToProps, dispatchToProps)(activeCategories);

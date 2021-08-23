import {connect} from 'react-redux';
import { Button,Grid} from '@material-ui/core';
import {active} from '../store/actions'
import '../App.css'
const activeCategories=(props)=>{
    return(
        <div>
            <Grid >
                {
                    props.activeList.categories.map((category)=>{
                        return(
                            <Grid item key={category.name}>
                                <Button className='type' variant="contained" color="secondary"
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

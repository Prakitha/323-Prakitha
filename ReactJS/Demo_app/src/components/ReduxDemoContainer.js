import ReduxDemo from "./ReduxDemo";
import {connect} from "react-redux"

const mapStateToProps=(state)=>{
    return{
        playerData:state
    }
}

export default connect(mapStateToProps)(ReduxDemo);
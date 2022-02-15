import {connect} from 'react-redux';

const NodeServerDemo = (props) => {
    return (
        <div>
        <table>
            <tr>Name</tr>
            <tr>Age</tr>
            <tr>Awards</tr>
            {props.playersData.map((item, key) => <li key={key}> {item.name}  {item.age} {item.awards.join(",")} </li>)}

        <button onClick={props.getNodeAppData}>Click here</button>
        </table>
    </div>
    )
}
const mapStateToProps = (state) => {
    return{
    playersData: state.reducer5
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
    getNodeAppData: ()=> dispatch({type:'GET_APP_DATA'})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(NodeServerDemo)
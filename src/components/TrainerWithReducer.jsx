import trainerReducer from "../reducers/myReducer";

const TrainerWithReducer = () => {

    const [state, dispatch] = trainerReducer;


    return (<>
        <label htmlFor="nameReduce">Name</label>
        <input type="text" id="nameReduce" value={state.name} onChange={e => {
            dispatch({
                type: 
            })
        }} />
        <br />
        <label htmlFor="nameReduce">Age</label>
        <input type="text" id="nameReduce" value={state.age} /><button onClick={dispatch({ type: "AGED" })}>+</button>
        <br />
        <label htmlFor="specialismReduce">Specialism</label>
        <input type="text" id="nspecialismReduce" value={state.specialism} />
        <br />
        <label htmlFor="locationReduce">Location</label>
        <input type="text" id="locationReduce" value={state.location} />
    </>);
}

export default TrainerWithReducer;
const LoggedIn = (props) => {
    return props.loggedIn ? <button>Log Out</button> : <button>Log In</button>;
}

export default LoggedIn;
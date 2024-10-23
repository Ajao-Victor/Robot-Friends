import React from "react";
class ErrorBoundry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ErrorPresence : false
        }
    }
    componentDidCatch(error,info) {
        this.setState({ErrorPresence : true})
    }
    render() {
            if (this.state.ErrorPresence) {
                return (
                    <h1>OOPS SORRY...An error occured</h1>
                )
            } else {
                return this.props.children
            }
    }
};
export default ErrorBoundry;
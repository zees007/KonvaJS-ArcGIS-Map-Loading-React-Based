import React, {Component} from "react";
import '../styles/MyStyle.css';

export default class ValidationTextError extends Component{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="error">
                {this.props.children}
            </div>
        );
    }
}

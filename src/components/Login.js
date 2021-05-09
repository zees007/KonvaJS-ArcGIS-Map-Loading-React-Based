import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import '../styles/MyStyle.css';

export default class Login extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        username: '',
        password: '',
        msg: ''

    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(event.target.value)
    }

    loginUser = (e) => {
        e.preventDefault();

        if (this.state.username === 'admin' && this.state.password === 'admin') {
            return this.props.history.push('/projects');
        }

    }


    render() {
        const {username, password} = this.state
        return (

            <div className="mt-5">
                <div className="global-container">
                    <div className="card login-form">
                        <div className="card-body">
                            <h3 className="card-title text-center">Log in to WFP</h3>
                            <div className="card-text">
                                <div className="alert-danger">Error Msg</div>
                                <form onSubmit={this.loginUser}>

                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Username</label>
                                        <input type="text" className="form-control form-control-sm"
                                               aria-describedby="emailHelp"
                                               name="username"
                                               value={username}
                                               onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        {/*<a href="#" style="float:right;font-size:12px;">Forgot password?</a>*/}
                                        <input type="password" className="form-control form-control-sm"
                                               name="password"
                                               value={password}
                                               onChange={this.handleChange}/>
                                    </div>
                                    <Button type="submit" className="btn btn-primary btn-block">Sign in
                                    </Button>

                                    {/*<div className="sign-up">*/}

                                    {/*    Don't have an account? <Link to={"/registration"}>Create One</Link>*/}


                                    {/*</div>*/}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

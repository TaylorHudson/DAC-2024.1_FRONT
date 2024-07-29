import React from "react";
import AuthenticationApiService from "../src/services/AuthenticationApiService";

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;
const AuthProvider = AuthContext.Provider;

export default class SessionProvider extends React.Component {

  state = {
    loggedUser: null,
    loading: true
  }

  constructor() {
    super();
    this.service = new AuthenticationApiService();
  }

  async componentDidMount() {
    const isAuthenticated = await this.service.isAuthenticated();

    if(isAuthenticated) {
      this.start(); 
    }

    this.setState({loading: false});
  }

  login = async (email, password) => {
    const username = this.service.login(email, password);
    if(username) {
      this.start(); 
      return username;
    } else {
      return null;
    }
  }

  start = () => {
    const loggedUser = this.service.getLoggedUser();
    const accessToken = this.service.getAccessToken();

    this.setState({loggedUser});
    this.service.registerToken(accessToken);
  }

  end = () => {
    this.setState({loggedUser: null});
    this.service.logout();
  }

  isAuthenticated = () => {
    return this.state.loggedUser != null;
  }

  render() {
    if(this.state.loading) {
      return false;
    }

    const context = {
      loggedUser: this.state.loggedUser,
      isAuthenticated: this.isAuthenticated(),
      start: this.start,
      end: this.end,
      login: this.login 
    };
    return (
      <AuthProvider value={context}>
        {this.props.children}
      </AuthProvider>
    );
  }
} 
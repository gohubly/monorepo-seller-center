import { Component } from "react";
import LoginTemplate from "../../templates/Login";

class LoginPage extends Component {
  componentDidCatch(error) {
    console.error('LoginPage Catch', error)
    // FEAT: Log do erro em algum serviço?
    // FEAT: Toggle modal de erro passando detalhes
  }

  render() {
    return (
      <div>
        <LoginTemplate />
      </div>
    );
  }
}

export default LoginPage;

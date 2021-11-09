import { Component } from "react";
import LoginTemplate from "../../templates/Login";

import { Input, Checkbox } from '@gohubly/design-system'

class LoginPage extends Component {
  componentDidCatch(error) {
    console.error('LoginPage Catch', error)
    // FEAT: Log do erro em algum serviço?
    // FEAT: Toggle modal de erro passando detalhes
  }

  render() {
    return (
      <div>
        <Input placeholder="Aooooba" label="nome doido" />
        <Checkbox>Lucas</Checkbox>
        {/* <LoginTemplate /> */}
      </div>
    );
  }
}

export default LoginPage;

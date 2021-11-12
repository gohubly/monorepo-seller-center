import { Component } from "react";
import HomeTemplate from "../templates/Home";

class IndexPage extends Component {
  componentDidCatch(error) {
    console.error('IndexPage Catch', error)
    // FEAT: Log do erro em algum serviço?
    // FEAT: Toggle modal de erro passando detalhes
  }

  render() {
    return (
      <HomeTemplate />
    );
  }
}

export default IndexPage;

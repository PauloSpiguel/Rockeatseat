import React, { Component } from "react";
import TechItem from "./TechItem";

class TechList extends Component {
  //static defaultProps = {
  //tech: "Sem definição"
  //};

  state = {
    newTech: "",
    techs: []
  };

  handleInputChange = e => {
    this.setState({ newTech: e.target.value }); // UTILIZA ESTA FORMA PRA ATUALIZAR VALORES NO STATE (CONCEITO DA IMUTABILIDADE)
  };

  handleSubmit = e => {
    e.preventDefault(); // DESABILITA RECARREGAR PÁGINA
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ""
    }); // ATUALIZANDO ARREY ()
  };

  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) }); // REMOVER TECNOLOGIAS DO STATE UTILIZANDO FILTER DO JS
  };

  // EXECUTADO ASSIM QUE O COMPONENTE APARECE EM TELA
  componentDidMount() {
    const techs = localStorage.getItem("techs");

    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  // EXECUTADO SEMPRE QUE HOUVER ALTERAÇÕES NAS PROPS OU STATE
  componentDidUpdate(_, prevState) {
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem("techs", JSON.stringify(this.state.techs)); //localStorege não aceita array
    }
  }

  // EXECUTA QUANDO O COMPONENTE DEIXA DE EXISTIR
  componentWillUnmount() {}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <>
          <h1>{this.state.newTech}</h1>
          <ul>
            {this.state.techs.map(tech => (
              <TechItem
                key={tech} // CHAVE DO MAP
                tech={tech} // VALOR PARA O COMPONENTE
                onDelete={() => this.handleDelete(tech)} // PASSA FUNÇÃO PARA O COMPONENTE
              />
            ))}
          </ul>
          <input
            type="text"
            onChange={this.handleInputChange}
            value={this.state.newTech}
          />
        </>
        <button type="submit">Gravar</button>
      </form>
    );
  }
}

export default TechList;

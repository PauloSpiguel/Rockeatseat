/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Container from '../../components/Container';

import { Form, SubmitButton, List, Input } from './styles';

import api from '../../services/api';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
    validComp: [],
  };

  // Carrega os valores armazenados no localstorege do navegador
  componentDidMount() {
    const repositories = localStorage.getItem('repositories'); // Traz itens do localstorage

    if (repositories) {
      // Add ao state as informações do localstorage já transformando em objeto
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  // Salva os dados no localstorage do navegador
  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    //  Compara o stado do repositório atual com o antigo, caso esteja diferente, atualiza o localstore
    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories)); // Add ao localstorage convertido em JSON
    }
  }

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault(); // Não Recarrega a página

    try {
      this.setState({ loading: true });

      const { newRepo, repositories } = this.state;

      if (!newRepo) {
        throw new Error('Preencha campo obrigatório');
      }

      if (repositories.find(repository => repository.name === newRepo)) {
        throw new Error('Respositório duplicado');
      }

      const response = await api.get(`/repos/${newRepo}`);

      const data = {
        name: response.data.full_name,
      };

      this.setState({
        repositories: [...repositories, data],
        newRepo: '',
        loading: false,
        validComp: { border: '1px solid #eee' },
      });
    } catch (error) {
      this.setState({
        loading: false,
        validComp: { border: '2px solid red' },
        newRepo: '',
      });
    }
  };

  render() {
    const { newRepo, loading, repositories, validComp } = this.state;

    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>
        <Form onSubmit={this.handleSubmit}>
          <Input
            handleInputChange={this.handleInputChange}
            newRepo={newRepo}
            style={validComp}
          />
          <SubmitButton loading={loading}>
            {/** Conditional rendeled »»» Cria condição dentro do componente */
            loading ? (
              <FaSpinner color="#fff" size={14} />
            ) : (
              <FaPlus color="#FFF" size={14} />
            )
            /** if ternário */
            }
          </SubmitButton>
        </Form>
        <List>
          {repositories.map(repository => (
            <li key={repository.name}>
              <span>{repository.name}</span>
              {/** Enviando paramentros via url */}
              <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
                Detalhes
              </Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}

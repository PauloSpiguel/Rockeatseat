import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

/** Funcionalidade keyframes »»» para fazer animações */
const rotate = keyframes`
  from{
    transform: rotate(0deg)
  }
  to{
    transform: rotate(360deg)
  }

`;
/** PROPS é as propriedades dos atributos dos componentes podendo acessar os atributos */
export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading, // Acessa as propriedades do botão »»»» true ou false
}))`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  /*Desabilita o cursor*/
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
  /*Cria Animação com if ternário e utilizando a lib css do styled components*/
  /*Conjunto de css baseado a uma propriedade de um componente*/
  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    /* instrução aplica instilização em todos os itens menos o primeiro*/
    & + li {
      border-top: 1px solid #eee;
    }
  }

  a {
    color: #7159c1;
    text-decoration: none;
  }
`;

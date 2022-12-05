//LINK DUDAS EN TRELLO : https://trello.com/b/dC2CYxKr/dudas-react-tic-tac-toe
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Square extends React.Component {
  constructor(props){
    super(props); {/*(==NOTA==) En las clases de JavaScript, necesitas siempre llamar super cuando defines el constructor de una subclase. Todas las clases de componentes de React que tienen un constructor deben empezar con una llamada a super(props). */}
    this.state = { // this.state es un stado de Square, "recordar" que fué clickeado
      value:null,
    };
  }
  
  render() {  //render es un método
    return (
      <button 
          className="square" 
          onClick={() => this.props.onClick()}
        >
        {/*this.props.value*/} {/* #2# */} {/* cambia el método render para mostrar ese valor */}
        {this.props.value} {/* #3# */}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) { // agrega un constructor al tablero y configura el estado inicial del tablero para que contenga un array de 9 valores null, correspondiente a cada uno de los 9 cuadrados
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

handleClick(i){
  const squares = this.state.squares.slice();
  squares[i] = 'X';
  this.setState({squares: squares});
}

  renderSquare(i) { //renderSquare es otro método
    return <Square value={this.state.squares[i]}//{/* #1# */} //value={i} ## value es una prop que le pasamos s <Square /> 
    onClick={()=> this.handleClick(i)}
    />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

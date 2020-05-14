import React from 'react';
import Board from './Board';
import '../game.css';

const Game : React.FC = () => {
    return (
        <div className='game'>
            <div className='game-board'>
                <Board/>
            </div>
            <div className='game-info'>
                <div>{/*status */}</div>
                <ol>{/*TODO*/}</ol>
            </div>
        </div>
    );
}
export default Game;
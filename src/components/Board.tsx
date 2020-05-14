import React ,{useState,useEffect}  from 'react';
import Square from './Square';



const Board : React.FC = () => {

    const [squares,setSquares] = useState<string[]>(Array(9).fill(null));
    const [xIsNext,setxIsNext] = useState<boolean>(true);
    const [state,setState] = useState<string>('');
    const [winner,setWinner] = useState<string | null >(null);

    const handleClick  = (i: number) : void => {
        let newSquares : string[] = squares.slice(0,squares.length);
        if(winner || newSquares[i] ) {
            return;
        }
        newSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(newSquares);
        setxIsNext(!xIsNext);
        console.log(newSquares);
    }

    const renderSquare = (i:number) => {
        return <Square value={squares[i]} onClick={() => {handleClick(i)}} />;
    }


    useEffect(() => {
        const lines :number[][] = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for(let i = 0; i < lines.length; i++){
            const [a,b,c] :number[] = lines[i];
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                setWinner(squares[a]);
            }
        }
        if(winner){
            setState(`Winner: ${winner}`);
        }else{
            setState(`Next player: ${xIsNext ? 'X' : 'O'}`)
        }
    },[squares,xIsNext,winner]);
    
    
    return (
        <div>
            <div className='status'>{state}</div>
            <div className='board-row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className='board-row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className='board-row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

export default  Board;


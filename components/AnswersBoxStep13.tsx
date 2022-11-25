interface Props {
    onClick(event): void;
    answer1: string;    
    answer2: string;    
    answer3: string;    
    answer4: string;    
}

const AnswersBoxStep13: React.FC<Props>  = ({onClick, answer1, answer2, answer3, answer4}) => {
    return (
        <>
            <div className='answersBox'>
                <div className="answer" color="secondary" onClick={onClick}>A) { answer1 }</div>
                <div className="answer" color="secondary" onClick={onClick}>B) { answer2 }</div>             
                <div className="answer" color="secondary" onClick={onClick}>C) { answer3 }</div>
                <div className="answer" color="secondary" onClick={onClick}>D) { answer4 }</div>     
            </div>
            <style jsx>
                {
                    `
                    .answersBox{
                        display: flex;
                        width: 100%;
                        justify-content: space-around;
                        align-items: center;
                        flex-wrap: wrap;
                    }

                    .answer{
                        cursor: pointer;
                        width: 300px;
                        margin: 20px 20px;
                        font-size: 18px;
                        text-align: left;
                    }
                    @media screen and (max-width: 360px) {
                        .answer {
                            width: 260px;
                            font-size: 16px;
                        }
                    }
                    `
                }
            </style>
        </>
    )
}

export default AnswersBoxStep13;
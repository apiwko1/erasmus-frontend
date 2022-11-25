import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useTranslation from '../hooks/useTranslation';

interface Props {
    card: any;
    index: number;
    isFlipped: boolean;
    flipTime: number;
    showCursor: boolean;
}

const Card: React.FC<Props> = ({ flipTime,card, index, isFlipped, showCursor }) => {

    const { locale, t } = useTranslation()
    const router = useRouter();

    const submit = () => {
        router.push(`/${locale}/`)
    }

    const [isCardFlipped, setIsCardFlipped] = useState(false);

   useEffect(()=>{
        setTimeout(()=>{
            setTimeout(()=>{setIsCardFlipped(true);},(index+1)*100);
        },flipTime)
    }) 
  

    const cursorStyle = {
        cursor: showCursor ? 'pointer' : 'none',
    }
    

    return (
        <div>
             <div className="card-container">
                <div style={cursorStyle} className={"card" + (isCardFlipped ? " flipped" : "")}>
                    {
                        !isCardFlipped ? <img className="side front" src={card.image} height="80"/> :  <img src="/triangle.png" className="side back" />
                    }
                   
                </div>
            </div>
            <style jsx>
                {`
                .card-container {
                    width: 80px;
                }
                .card {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                }
                .back:hover {
                    background: grey;
                }
                .back {
                    border: solid 1px black;
                    height: 80px;
                    width: 80px;
                }
                .back::after {
                    opacity: .5;
                }
                .card-container:hover .card.flipped {
                    border: 1px solid darken(red, 5%);
                }

                .card .flipped {
                    border: 1px solid darken(red, 10%);
                    transform: rotateY(180deg);
                }
                .progressContainer {
                    padding: 30px 10% 15px 10%;
                }
            .title {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 20px;
                font-weight: bold;
                padding: 15px 10% 15px 10%;
                text-align: center;
            }
            .subtitle {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                font-size: 15px;
                padding: 15px 10% 15px 10%;
                white-space: pre-wrap;
            }
            .text {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                font-size: 16px;
                padding: 15px 10% 15px 10%;
            }
            .formContainer {
                margin-top: 100px;
            }
            .formContainer, .registerButton {
                display: flex;
                flex-flow: column;
            }
            .field {
                width: 50%;
                flex-flow: column;
                align-items: center;
                justify-content: center;
                padding: 25px 0 5px 10%;
            }
            .fieldLabel {
                margin-left: 5px;
                margin-bottom: 10px;
            }
            .error {
                width: 50%;
                color: red;
                font-weight: bold;
                padding: 10px 0 5px 10%;
            }
            .button {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 40px;
                padding: 20px;
            }
            @media screen and (max-width: 600px) {
                .card-container{
                    width: 55px;
                }
                
                img {
                    height: 55px;
                }

                .back{
                    width: 55px;
                    height: 55px;
                }
            }
            @media screen and (max-width: 480px) {
                .card-container{
                    width: 50px;
                }
                
                img {
                    height: 50px;
                }

                .back{
                    width: 50px;
                    height: 50px;
                }
            }
            @media screen and (max-width: 360px) {
                .card-container{
                    width: 40px;
                }
                
                img {
                    height: 40px;
                }

                .back{
                    width: 40px;
                    height: 40px;
                }
            }
            
            `}
            </style>
        </div>
    )
}

export default Card

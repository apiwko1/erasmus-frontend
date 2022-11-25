import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import useTranslation from '../hooks/useTranslation';
import dynamic from 'next/dynamic';
import LinearProgressBar from './LinearProgressBar';
const GifPlayer = dynamic(() => import('react-gif-player'), { ssr: false })
import { updateStep } from '../services/exam';
import { Button } from '@material-ui/core';
import ButtonWithLoader from './ButtonWithLoader';

interface Props {
    exam: any;
}

const Step17: React.FC<Props> = ({ exam }) => {
    const [round, setRound] = useState(0);

    const { locale, t } = useTranslation()
    const router = useRouter();
    const token = router?.query?.token as string;
    const [isLoading, setIsLoading] = useState(false);
    const [markerDiv, setMarkerDiv] = useState(null);
    const [Xcords, setXcords] = useState(0);
    const [Ycords, setYcords] = useState(0);

    const [round1Points, setRound1Points] = useState(0);
    const [round2Points, setRound2Points] = useState(0);
    const [round3Points, setRound3Points] = useState(0);
    const [round4Points, setRound4Points] = useState(0);
    const [round5Points, setRound5Points] = useState(0);
    const [round6Points, setRound6Points] = useState(0);
    const [round7Points, setRound7Points] = useState(0);
    const [round8Points, setRound8Points] = useState(0);
    const [round9Points, setRound9Points] = useState(0);
    const [round10Points, setRound10Points] = useState(0);

    const [round1MinusPoints, setRound1MinusPoints] = useState(0);
    const [round2MinusPoints, setRound2MinusPoints] = useState(0);
    const [round3MinusPoints, setRound3MinusPoints] = useState(0);
    const [round4MinusPoints, setRound4MinusPoints] = useState(0);
    const [round5MinusPoints, setRound5MinusPoints] = useState(0);
    const [round6MinusPoints, setRound6MinusPoints] = useState(0);
    const [round7MinusPoints, setRound7MinusPoints] = useState(0);
    const [round8MinusPoints, setRound8MinusPoints] = useState(0);
    const [round9MinusPoints, setRound9MinusPoints] = useState(0);
    const [round10MinusPoints, setRound10MinusPoints] = useState(0);

    const [round1Time, setRound1Time] = useState(0);
    const [round2Time, setRound2Time] = useState(0);
    const [round3Time, setRound3Time] = useState(0);
    const [round4Time, setRound4Time] = useState(0);
    const [round5Time, setRound5Time] = useState(0);
    const [round6Time, setRound6Time] = useState(0);
    const [round7Time, setRound7Time] = useState(0);
    const [round8Time, setRound8Time] = useState(0);
    const [round9Time, setRound9Time] = useState(0);
    const [round10Time, setRound10Time] = useState(0);


    useEffect(() => {
        if (round === 1) {
            setTimeout(() => {
                setRound1Time(round1Time + 1);
            }, 1000)
        }
        if (round === 2) {
            setTimeout(() => {
                setRound2Time(round2Time + 1);
            }, 1000)
        }
        if (round === 3) {
            setTimeout(() => {
                setRound3Time(round3Time + 1);
            }, 1000)
        }
        if (round === 4) {
            setTimeout(() => {
                setRound4Time(round4Time + 1);
            }, 1000)
        }
        if (round === 5) {
            setTimeout(() => {
                setRound5Time(round5Time + 1);
            }, 1000)
        }
        if (round === 6) {
            setTimeout(() => {
                setRound6Time(round6Time + 1);
            }, 1000)
        }
        if (round === 7) {
            setTimeout(() => {
                setRound7Time(round7Time + 1);
            }, 1000)
        }
        if (round === 8) {
            setTimeout(() => {
                setRound8Time(round8Time + 1);
            }, 1000)
        }
        if (round === 9) {
            setTimeout(() => {
                setRound9Time(round9Time + 1);
            }, 1000)
        }
        if (round === 10) {
            setTimeout(() => {
                setRound10Time(round10Time + 1);
            }, 1000)
        }
    })

    const submit = () => {
        setIsLoading(true);
        const data = {
            stripesGameRound1Points: round1Points,
            stripesGameRound2Points: round2Points,
            stripesGameRound3Points: round3Points,
            stripesGameRound4Points: round4Points,
            stripesGameRound5Points: round5Points,
            stripesGameRound6Points: round6Points,
            stripesGameRound7Points: round7Points,
            stripesGameRound8Points: round8Points,
            stripesGameRound9Points: round9Points,
            stripesGameRound10Points: round10Points,
            stripesGameRound1MinusPoints: round1MinusPoints,
            stripesGameRound2MinusPoints: round2MinusPoints,
            stripesGameRound3MinusPoints: round3MinusPoints,
            stripesGameRound4MinusPoints: round4MinusPoints,
            stripesGameRound5MinusPoints: round5MinusPoints,
            stripesGameRound6MinusPoints: round6MinusPoints,
            stripesGameRound7MinusPoints: round7MinusPoints,
            stripesGameRound8MinusPoints: round8MinusPoints,
            stripesGameRound9MinusPoints: round9MinusPoints,
            stripesGameRound10MinusPoints: round10MinusPoints,
            stripesGameRound1Time: round1Time,
            stripesGameRound2Time: round2Time,
            stripesGameRound3Time: round3Time,
            stripesGameRound4Time: round4Time,
            stripesGameRound5Time: round5Time,
            stripesGameRound6Time: round6Time,
            stripesGameRound7Time: round7Time,
            stripesGameRound8Time: round8Time,
            stripesGameRound9Time: round9Time,
            stripesGameRound10Time: round10Time,
            step: 'step18'
        }

        updateStep(token, data).then(() => router.push(`/${locale}/${token}/step18`)).then(() => window.scrollTo(0, 0));
    }
    const startGame = () => {
        setRound(round + 1);
    }

    const nextRound = () => {
        checkGame();
        setRound(round + 1);
        setMarkerDiv(null);
    }

    const checkIfElementsOverlap = (marker, hiddenElement) => {
        if (marker.x < hiddenElement.x + hiddenElement.width &&
            marker.x + marker.width > hiddenElement.x &&
            marker.y < hiddenElement.y + hiddenElement.height &&
            marker.y + marker.height > hiddenElement.y) {
            return true;
        }
        return false;
    }

    const checkGame = () => {
        if (round === 1) {
            if (markerDiv != null) {
                const rectMarker = markerDiv.getBoundingClientRect();
                const rectHiddenElement = document.getElementById('elementRound1').getBoundingClientRect();
                if (checkIfElementsOverlap(rectMarker, rectHiddenElement)) setRound1Points(round1Points + 1)
                else setRound1MinusPoints(round1MinusPoints + 1);
            } else setRound1MinusPoints(round1MinusPoints + 1);
        }
        if (round === 2) {
            if (markerDiv != null) {
                const rectMarker = markerDiv.getBoundingClientRect();
                const rectHiddenElement = document.getElementById('elementRound2').getBoundingClientRect();
                if (checkIfElementsOverlap(rectMarker, rectHiddenElement)) setRound2Points(round2Points + 1)
                else setRound2MinusPoints(round2MinusPoints + 1);
            } else setRound2MinusPoints(round2MinusPoints + 1);
        }

        if (round === 3) {
            if (markerDiv != null) {
                const rectMarker = markerDiv.getBoundingClientRect();
                const rectHiddenElement = document.getElementById('elementRound3').getBoundingClientRect();
                if (checkIfElementsOverlap(rectMarker, rectHiddenElement)) setRound3Points(round3Points + 1)
                else setRound3MinusPoints(round3MinusPoints + 1);
            } else setRound3MinusPoints(round3MinusPoints + 1);
        }

        if (round === 4) {
            if (markerDiv != null) {
                const rectMarker = markerDiv.getBoundingClientRect();
                const rectHiddenElement = document.getElementById('elementRound4').getBoundingClientRect();
                if (checkIfElementsOverlap(rectMarker, rectHiddenElement)) setRound4Points(round4Points + 1)
                else setRound4MinusPoints(round4MinusPoints + 1);
            } else setRound4MinusPoints(round4MinusPoints + 1);
        }

        if (round === 5) {
            if (markerDiv != null) {
                const rectMarker = markerDiv.getBoundingClientRect();
                const rectHiddenElement = document.getElementById('elementRound5').getBoundingClientRect();
                if (checkIfElementsOverlap(rectMarker, rectHiddenElement)) setRound5Points(round5Points + 1)
                else setRound5MinusPoints(round5MinusPoints + 1);
            } else setRound5MinusPoints(round5MinusPoints + 1);
        }

        if (round === 6) {
            if (markerDiv != null) {
                const rectMarker = markerDiv.getBoundingClientRect();
                const rectHiddenElement = document.getElementById('elementRound6').getBoundingClientRect();
                if (checkIfElementsOverlap(rectMarker, rectHiddenElement)) setRound6Points(round6Points + 1)
                else setRound6MinusPoints(round6MinusPoints + 1);
            } else setRound6MinusPoints(round6MinusPoints + 1);
        }

        if (round === 7) {
            if (markerDiv != null) {
                const rectMarker = markerDiv.getBoundingClientRect();
                const rectHiddenElement = document.getElementById('elementRound7').getBoundingClientRect();
                if (checkIfElementsOverlap(rectMarker, rectHiddenElement)) setRound7Points(round7Points + 1)
                else setRound7MinusPoints(round7MinusPoints + 1);
            } else setRound7MinusPoints(round7MinusPoints + 1);
        }

        if (round === 8) {
            if (markerDiv != null) {
                const rectMarker = markerDiv.getBoundingClientRect();
                const rectHiddenElement = document.getElementById('elementRound8').getBoundingClientRect();
                if (checkIfElementsOverlap(rectMarker, rectHiddenElement)) setRound8Points(round8Points + 1)
                else setRound8MinusPoints(round8MinusPoints + 1);
            } else setRound8MinusPoints(round8MinusPoints + 1);
        }

        if (round === 9) {
            if (markerDiv != null) {
                const rectMarker = markerDiv.getBoundingClientRect();
                const rectHiddenElement = document.getElementById('elementRound9').getBoundingClientRect();
                if (checkIfElementsOverlap(rectMarker, rectHiddenElement)) setRound9Points(round9Points + 1)
                else setRound9MinusPoints(round9MinusPoints + 1);
            } else setRound9MinusPoints(round9MinusPoints + 1);
        }

        if (round === 10) {
            if (markerDiv != null) {
                const rectMarker = markerDiv.getBoundingClientRect();
                const rectHiddenElement = document.getElementById('elementRound10').getBoundingClientRect();
                if (checkIfElementsOverlap(rectMarker, rectHiddenElement)) setRound10Points(round10Points + 1)
                else setRound10MinusPoints(round10MinusPoints + 1);
            } else setRound10MinusPoints(round10MinusPoints + 1);
        }
    }

    useEffect(() => {
        if (round === 1) {
            const layout = document.getElementById('imageBox1');
            document.getElementById('1').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
        }
        if (round === 2) {
            const layout = document.getElementById('imageBox2');
            document.getElementById('2').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
        }
        if (round === 3) {
            const layout = document.getElementById('imageBox3');
            document.getElementById('3').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
        }
        if (round === 4) {
            const layout = document.getElementById('imageBox4');
            document.getElementById('4').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
        }
        if (round === 5) {
            const layout = document.getElementById('imageBox5');
            document.getElementById('5').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
        }
        if (round === 6) {
            const layout = document.getElementById('imageBox6');
            document.getElementById('6').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
        }
        if (round === 7) {
            const layout = document.getElementById('imageBox7');
            document.getElementById('7').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
        }
        if (round === 8) {
            const layout = document.getElementById('imageBox8');
            document.getElementById('8').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
        }
        if (round === 9) {
            const layout = document.getElementById('imageBox9');
            document.getElementById('9').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
        }
        if (round === 10) {
            const layout = document.getElementById('imageBox10');
            document.getElementById('10').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
        }
    })

    const markOnImage = (e) => {
        let newDiv = document.createElement('div');
        newDiv.id = 'markerDiv';
        if (markerDiv != null) e.target.parentNode.removeChild(markerDiv);
        newDiv.style.width = "1.275%";
        newDiv.style.height = "2.265%";
        newDiv.style.background = '#66FF33';
        newDiv.style.position = 'absolute';
        newDiv.style.top = Ycords * 100 + '%',
            newDiv.style.left = Xcords * 100 + '%',
            newDiv.style.borderRadius = "50%";
        newDiv.style.transform = 'translate(-50%,-50%)';
        newDiv.style.zIndex = '4';
        newDiv.style.pointerEvents = 'none';
        setMarkerDiv(newDiv);
        e.currentTarget.appendChild(newDiv);
    }

    return (
        <div>
            <div className="progressContainer">
                <LinearProgressBar step={11} />
            </div>
            {round === 0 && <div className="gameDescription">
                <div className="descriptionTitle">{t('stripes_game_title')}</div>
                <div className="description">{t('stripes_game')}</div>
            </div>}
            {round > 0 && round < 11 &&
                <div className="round">
                    <div className="roundNumber">{t('round')} {round}</div>
                    <div className="gameRule">{t('stripes_game_rule')}</div>
                </div>
            }
            {round === 11 &&
                <div className="center">
                    <div className="gameEndText">{t('game_end_text_2')}</div>
                </div>
            }
            <div className="centerLandscape">
                {round === 1 &&
                    <div className="landscapeBox" id="1">
                        <div onClick={markOnImage} className="landscapeImageBox" id="imageBox1">
                            <img className="landscapeImg" src="/stripes-game/version2/1.png" />
                            <div className="element elementRound1" id="elementRound1"></div>
                        </div>
                    </div>}
                {round === 2 &&
                    <div className="landscapeBox" id="2">
                        <div onClick={markOnImage} className="landscapeImageBox" id="imageBox2">
                            <img className="landscapeImg" src="/stripes-game/version2/2.png" />
                            <div className="element elementRound2" id="elementRound2"></div>
                        </div>
                    </div>}
                {round === 3 &&
                    <div className="landscapeBox" id="3">
                        <div onClick={markOnImage} className="landscapeImageBox" id="imageBox3">
                            <img className="landscapeImg" src="/stripes-game/version2/3.png" />
                            <div className="element elementRound3" id="elementRound3"></div>
                        </div>
                    </div>}
                {round === 4 &&
                    <div className="landscapeBox" id="4">
                        <div onClick={markOnImage} className="landscapeImageBox" id="imageBox4">
                            <img className="landscapeImg" src="/stripes-game/version2/4.png" />
                            <div className="element elementRound4" id="elementRound4"></div>
                        </div>
                    </div>}
                {round === 5 &&
                    <div className="landscapeBox" id="5">
                        <div onClick={markOnImage} className="landscapeImageBox" id="imageBox5">
                            <img className="landscapeImg" src="/stripes-game/version2/5.png" />
                            <div className="element elementRound5" id="elementRound5"></div>
                        </div>
                    </div>}
                {round === 6 &&
                    <div className="landscapeBox" id="6">
                        <div onClick={markOnImage} className="landscapeImageBox" id="imageBox6">
                            <img className="landscapeImg" src="/stripes-game/version2/6.png" />
                            <div className="element elementRound6" id="elementRound6"></div>
                        </div>
                    </div>}
                {round === 7 &&
                    <div className="landscapeBox" id="7">
                        <div onClick={markOnImage} className="landscapeImageBox" id="imageBox7">
                            <img className="landscapeImg" src="/stripes-game/version2/7.png" />
                            <div className="element elementRound7" id="elementRound7"></div>
                        </div>
                    </div>}
                {round === 8 &&
                    <div className="landscapeBox" id="8">
                        <div onClick={markOnImage} className="landscapeImageBox" id="imageBox8">
                            <img className="landscapeImg" src="/stripes-game/version2/8.png" />
                            <div className="element elementRound8" id="elementRound8"></div>
                        </div>
                    </div>}
                {round === 9 &&
                    <div className="landscapeBox" id="9">
                        <div onClick={markOnImage} className="landscapeImageBox" id="imageBox9">
                            <img className="landscapeImg" src="/stripes-game/9.png" />
                            <div className="element elementRound9" id="elementRound9"></div>
                        </div>
                    </div>}
                {round === 10 &&
                    <div className="landscapeBox" id="10">
                        <div onClick={markOnImage} className="landscapeImageBox" id="imageBox10">
                            <img className="landscapeImg" src="/stripes-game/version2/10.png" />
                            <div className="element elementRound10" id="elementRound10"></div>
                        </div>
                    </div>}
            </div>
            <div className="button">
                {round === 0 && <Button variant="contained" style={{ marginTop: 20 }} color="secondary" onClick={startGame}>{t('start_game')}</Button>}
                {round > 0 && round < 11 && <div style={{ marginTop: 20 }}><ButtonWithLoader label={t('next')} onClick={nextRound} isLoading={isLoading}></ButtonWithLoader></div>}
                {round === 11 && <div style={{ marginTop: 20 }}><ButtonWithLoader label={t('next')} onClick={submit} isLoading={isLoading}></ButtonWithLoader></div>}
            </div>
            <style jsx>
                {`
                    .landscapeBox{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: relative;
                    }
                    .landscapeImageBox{
                        position: relative;
                        width: 85%;
                        cursor: pointer;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .landscapeImageBox .landscapeImg{
                        width: 100%;
                        display: block;
                    }
                    .centerLandscape{
                        user-select: none;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .element{
                        position: absolute;
                        pointer-events: none;
                    }
                    .elementRound1{
                        right: 13%;
                        bottom: 25%;
                        width: 6%;
                        height: 11.5%;
                    }
                    .elementRound2{
                        right: 15.5%;
                        top: 8.5%;
                        width: 3.5%;
                        height: 9%;
                    }
                    .elementRound3{
                        right: 26.5%;
                        bottom: 6%;
                        width: 2.5%;
                        height:6.5%;
                    }
                    .elementRound4{
                        left: 12%;
                        bottom: 5.5%;
                        width: 3%;
                        height: 9%;
                    }
                    .elementRound5{
                        right: 6%;
                        bottom: 36%;
                        width: 8%;
                        height: 7%;
                    }
                    .elementRound6{
                        right: 38%;
                        top: 36.5%;
                        width: 8%;
                        height: 7%;
                    }
                    .elementRound7{
                        right: 38%;
                        bottom: 18%;
                        width: 3.5%;
                        height: 10%;
                    }
                    .elementRound8{
                        right: 29.5%;
                        bottom: 41%;
                        width: 4%;
                        height: 9%;
                    }
                    .elementRound9{
                        left: 45%;
                        bottom: 4%;
                        width: 2%;
                        height: 7%;
                    }
                    .elementRound10{
                        left: 40%;
                        bottom: 2%;
                        width: 6%;
                        height: 7%;
                    }
                    .round{
                        display: flex;
                        justify-content: center;
                        flex-direction: column;
                        align-items: center; 
                        margin-bottom: 30px;
                    }
                    .roundNumber{
                        font-size: 20px;
                        font-weight: bold;
                        text-align: center;
                        margin: 10px;
                        max-width: 50%;
                    }
                    .gameRule{
                        font-size: 18px;
                        text-align: center;
                    }
                    .center{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .gameBox{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        font-size: 20px;
                        font-weight: bold;
                    }
                    .column{
                        border: 2px solid black;
                        width: 200px;
                        height: 460px;
                        margin: 30px 40px;
                        display: flex;
                    }
                    .gameEndText{
                        font-size: 20px;
                        font-weight: bold;
                        text-align: center;
                        margin: 10px;
                        max-width: 80%;
                    }
                    .card {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex: 1 0 21%; /* explanation below */
                        margin: 10px 0;
                    }
                    .box-container{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-top: 120px;
                        width: 100%;
                    }
                    .box-container .box{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: space-around;
                        flex-wrap: wrap;
                        height: 220px;
                        width: 100px;
                        border solid 2px;
                        margin: 0 5px;
                    }
                    .button {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-top: 40px;
                    }
                    .progressContainer {
                        padding: 30px 10% 15px 10%;
                    }
                    .gameDescription{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        text-align: center;
                    }
                    .descriptionTitle{
                        font-size: 20px;
                        font-weight: bold;
                    }
                    .description {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        text-align: center;
                        font-size: 16px;
                        padding: 15px 10% 15px 10%;
                        white-space: pre-wrap;
                        margin-bottom: 20px;
                    }
                    .game-end-tex{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        text-align: center;
                        font-size: 30px;
                        padding: 15px 10% 15px 10%;
                        white-space: pre-wrap;
                        margin-bottom: 20px;
                        font-weight: bold;
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
                        display: flex;
                        padding-top: 70px;
                    }
                    .formContainer, .registerButton {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-flow: column;
                    }
                    .button {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-top: 20px;
                    }
                    .buttonContainer {
                        padding: 10px;
                    }
                    @media screen and (max-width: 800px){
                        .roundNumber{
                            font-size: 20px;
                        }
                    }   
                    @media screen and (max-width: 600px) {
                        .center{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            flex-direction: column;
                        }
                        .gameBox{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            flex-direction: column;
                            font-size: 20px;
                            font-weight: bold;
                        }  
                        .box-container .box{
                            width: 60px;
                            height: 140px;
                        }
                        .buttonContainer {
                            padding: 0;
                            margin-bottom: 5px;
                        }
                    }
            `}
            </style>
        </div>
    )
}

export default Step17;

import {
    getPamiecStenCY,
    getMyslenieStenCY,
    getUwagaStenCY,
    getPercepcjaStenCY,
} from './funcCY';

import {
    getPamiecStenEU,
    getMyslenieStenEU,
    getUwagaStenEU,
    getPercepcjaStenEU,
} from './funcEU';

import {
    getPamiecStenIT,
    getMyslenieStenIT,
    getUwagaStenIT,
    getPercepcjaStenIT,
} from './funcIT';

import {
    getPamiecStenPL,
    getMyslenieStenPL,
    getUwagaStenPL,
    getPercepcjaStenPL,
} from './funcPL';

import {
    getPamiecStenRO,
    getMyslenieStenRO,
    getUwagaStenRO,
    getPercepcjaStenRO,
} from './funcRO';


export const getVisualTestDescription = (sten) => {
    if(sten < 5) {
        return 'visual_test_4';
    }
    if(sten < 7) {
        return 'visual_test_6';
    }

    return 'visual_test_10';
}

export const getAuditoryTestDescription = (sten) => {
    if(sten < 5) {
        return 'auditory_test_4';
    }
    if(sten < 7) {
        return 'auditory_test_6';
    }

    return 'auditory_test_10'
}

export const getReadingTestDescription = (sten) => {
    if(sten < 5) {
        return 'reading_test_4';
    }
    if(sten < 7) {
        return 'reading_test_6';
    }

    return 'reading_test_10'
}

export const getKinestheticTestDescription = (sten) => {
    if(sten < 5) {
        return 'kinesthetic_test_4';
    }

    if(sten < 7) {
        return 'kinesthetic_test_6';
    }

    return 'kinesthetic_test_10'
}


export const getGameSummaries = (exam, country) => {
    const pamiec = getGra10(exam, 'triangleGameRound') + getGra5(exam, 'schemesGameRound') + getGra5(exam, 'memoryGameRound') + getGra5(exam, 'sortImagesGameRound');
    const myslenie = getGra10(exam, 'puzzleGameRound') + getGra10(exam, 'nextGameRound') + getGra5(exam, 'actionResultGameRound') + getGra5(exam, 'scalesGameRound') + getGra5(exam, 'storyGameRound');
    const uwaga = getGra10(exam, 'stripesGameRound') + getGra10(exam, 'findDifferenceGameRound') + getGra10(exam, 'cupGameRound') + getGra10(exam, 'colorsGameRound');
    const percepcja = getGra10(exam, 'stringsGameRound') + getGra10(exam, 'visualDiscriminationGameRound') + getGra10(exam, 'missingPartsGameRound') + getGra10(exam, 'picturesGameRound');
    

    if(country === 'cy') {
        return {
            pamiec: getPamiecStenCY(pamiec),
            myslenie: getMyslenieStenCY(myslenie),
            uwaga: getUwagaStenCY(uwaga),
            percepcja: getPercepcjaStenCY(percepcja)
        }
    }

    if(country === 'it') {
        return {
            pamiec: getPamiecStenIT(pamiec),
            myslenie: getMyslenieStenIT(myslenie),
            uwaga: getUwagaStenIT(uwaga),
            percepcja: getPercepcjaStenIT(percepcja)
        }
    }

    if(country === 'pl') {
        return {
            pamiec: getPamiecStenPL(pamiec),
            myslenie: getMyslenieStenPL(myslenie),
            uwaga: getUwagaStenPL(uwaga),
            percepcja: getPercepcjaStenPL(percepcja)
        }
    }

    if(country === 'ro') {
        return {
            pamiec: getPamiecStenRO(pamiec),
            myslenie: getMyslenieStenRO(myslenie),
            uwaga: getUwagaStenRO(uwaga),
            percepcja: getPercepcjaStenRO(percepcja)
        }
    }

    return {
        pamiec: getPamiecStenEU(pamiec),
        myslenie: getMyslenieStenEU(myslenie),
        uwaga: getUwagaStenEU(uwaga),
        percepcja: getPercepcjaStenEU(percepcja)
    }
}

export const getGra10 = (exam, gameName) => {

    let w1 = 0;
    let w2 = 0;
    let w3 = 0;
    let w4 = 0;
    let w5 = 0;
    let w6 = 0;
    let w7 = 0;
    let w8 = 0;
    let w9 = 0;
    let w10 = 0;

    if(exam[gameName + '1Points'] !== undefined && exam[gameName + '1MinusPoints'] !== undefined)
     w1 = exam[gameName + '1Points'] - exam[gameName + '1MinusPoints'];
     if(exam[gameName + '2Points'] !== undefined && exam[gameName + '2MinusPoints'] !== undefined)
     w2 = exam[gameName + '2Points'] - exam[gameName + '2MinusPoints'];;
     if(exam[gameName + '3Points'] !== undefined && exam[gameName + '3MinusPoints'] !== undefined)
     w3 = exam[gameName + '3Points'] - exam[gameName + '3MinusPoints'];;
     if(exam[gameName + '4Points'] !== undefined && exam[gameName + '4MinusPoints'] !== undefined)
     w4 = exam[gameName + '4Points'] - exam[gameName + '4MinusPoints'];;
     if(exam[gameName + '5Points'] !== undefined && exam[gameName + '5MinusPoints'] !== undefined)
     w5 = exam[gameName + '5Points'] - exam[gameName + '5MinusPoints'];;
     if(exam[gameName + '6Points'] !== undefined && exam[gameName + '6MinusPoints'] !== undefined)
     w6 = exam[gameName + '6Points'] - exam[gameName + '6MinusPoints'];;
     if(exam[gameName + '7Points'] !== undefined && exam[gameName + '7MinusPoints'] !== undefined)
     w7 = exam[gameName + '7Points'] - exam[gameName + '7MinusPoints'];;
     if(exam[gameName + '8Points'] !== undefined && exam[gameName + '8MinusPoints'] !== undefined)
     w8 = exam[gameName + '8Points'] - exam[gameName + '8MinusPoints'];;
     if(exam[gameName + '9Points'] !== undefined && exam[gameName + '9MinusPoints'] !== undefined)
     w9 = exam[gameName + '9Points'] - exam[gameName + '9MinusPoints'];;
     if(exam[gameName + '10Points'] !== undefined && exam[gameName + '10MinusPoints'] !== undefined)
     w10 = exam[gameName + '10Points'] - exam[gameName + '10MinusPoints'];;

    return w1 + w2 + w3 + w4 + w5 + w6 + w7 + w8 + w9 + w10;
}

export const getGra5 = (exam, gameName) => {
    let w1 = 0;
    let w2 = 0;
    let w3 = 0;
    let w4 = 0;
    let w5 = 0;

    if(exam[gameName + '1Points'] !== undefined && exam[gameName + '1MinusPoints'] !== undefined)
     w1 = exam[gameName + '1Points'] - exam[gameName + '1MinusPoints'];
     if(exam[gameName + '2Points'] !== undefined && exam[gameName + '2MinusPoints'] !== undefined)
     w2 = exam[gameName + '2Points'] - exam[gameName + '2MinusPoints'];;
     if(exam[gameName + '3Points'] !== undefined && exam[gameName + '3MinusPoints'] !== undefined)
     w3 = exam[gameName + '3Points'] - exam[gameName + '3MinusPoints'];;
     if(exam[gameName + '4Points'] !== undefined && exam[gameName + '4MinusPoints'] !== undefined)
     w4 = exam[gameName + '4Points'] - exam[gameName + '4MinusPoints'];;
     if(exam[gameName + '5Points'] !== undefined && exam[gameName + '5MinusPoints'] !== undefined)
     w5 = exam[gameName + '5Points'] - exam[gameName + '5MinusPoints'];;

    return w1 + w2 + w3 + w4 + w5;
}

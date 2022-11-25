 // PL
 export const getPLvisualStens = (visualSum, sex) => {
    if(sex === 'female') {
        if(visualSum < 14) {
            return 1;
        }

        if(visualSum < 18) {
            return 2;
        }

        if(visualSum < 20) {
            return 3;
        }

        if(visualSum < 23) {
            return 4;
        }

        if(visualSum < 26) {
            return 5;
        }

        if(visualSum < 28) {
            return 6;
        }

        if(visualSum < 30) {
            return 7;
        }


        if(visualSum < 32) {
            return 8;
        }

        if(visualSum < 34) {
            return 9;
        }

        return 10;  
    }

    if(visualSum < 13) {
        return 1;
    }

    if(visualSum < 15) {
        return 2;
    }

    if(visualSum < 19) {
        return 3;
    }

    if(visualSum < 22) {
        return 4;
    }

    if(visualSum < 24) {
        return 5;
    }

    if(visualSum < 26) {
        return 6;
    }

    if(visualSum < 28) {
        return 7;
    }

    if(visualSum < 31) {
        return 8;
    }

    if(visualSum < 33) {
        return 9;
    }

    return 10;  
}

export const getPLauditoryStens = (auditorySum, sex) => {
    if(sex === 'female') {
        if(auditorySum < 18) {
            return 1;
        }

        if(auditorySum < 20) {
            return 2;
        }

        if(auditorySum < 23) {
            return 3;
        }

        if(auditorySum < 25) {
            return 4;
        }

        if(auditorySum < 27) {
            return 5;
        }

        if(auditorySum < 29) {
            return 6;
        }

        if(auditorySum < 32) {
            return 7;
        }

        if(auditorySum < 34) {
            return 8;
        }

        if(auditorySum < 36) {
            return 9;
        }

        return 10;  
    }

    if(auditorySum < 13) {
        return 1;
    }

    if(auditorySum < 18) {
        return 2;
    }

    if(auditorySum < 21) {
        return 3;
    }

    if(auditorySum < 23) {
        return 4;
    }

    if(auditorySum < 25) {
        return 5;
    }

    if(auditorySum < 28) {
        return 6;
    }

    if(auditorySum < 30) {
        return 7;
    }

    if(auditorySum < 32) {
        return 8;
    }

    if(auditorySum < 34) {
        return 9;
    }

    return 10;  
}

export const getPLreadingStens = (readingSum, sex) => {
    if(sex === 'female') {
        if(readingSum < 13) {
            return 1;
        }

        if(readingSum < 16) {
            return 2;
        }

        if(readingSum < 19) {
            return 3;
        }

        if(readingSum < 21) {
            return 4;
        }

        if(readingSum < 24) {
            return 5;
        }

        if(readingSum < 26) {
            return 6;
        }

        if(readingSum < 29) {
            return 7;
        }


        if(readingSum < 31) {
            return 8;
        }

        if(readingSum < 33) {
            return 9;
        }

        return 10;  
    }

    if(readingSum < 11) {
        return 1;
    }

    if(readingSum < 14) {
        return 2;
    }

    if(readingSum < 17) {
        return 3;
    }

    if(readingSum < 21) {
        return 4;
    }

    if(readingSum < 23) {
        return 5;
    }

    if(readingSum < 25) {
        return 6;
    }

    if(readingSum < 28) {
        return 7;
    }


    if(readingSum < 31) {
        return 8;
    }

    if(readingSum < 35) {
        return 9;
    }

    return 10;  
}

export const getPLkinestheticStens = (kinestheticSum, sex) => {
    if(sex === 'female') {
        if(kinestheticSum < 14) {
            return 1;
        }

        if(kinestheticSum < 16) {
            return 2;
        }

        if(kinestheticSum < 19) {
            return 3;
        }

        if(kinestheticSum < 21) {
            return 4;
        }

        if(kinestheticSum < 23) {
            return 5;
        }

        if(kinestheticSum < 25) {
            return 6;
        }

        if(kinestheticSum < 27) {
            return 7;
        }


        if(kinestheticSum < 31) {
            return 8;
        }

        if(kinestheticSum < 33) {
            return 9;
        }

        return 10;  
    }

    if(kinestheticSum < 12) {
        return 1;
    }

    if(kinestheticSum < 14) {
        return 2;
    }

    if(kinestheticSum < 17) {
        return 3;
    }

    if(kinestheticSum < 20) {
        return 4;
    }

    if(kinestheticSum < 22) {
        return 5;
    }

    if(kinestheticSum < 24) {
        return 6;
    }

    if(kinestheticSum < 27) {
        return 7;
    }

    if(kinestheticSum < 30) {
        return 8;
    }

    if(kinestheticSum < 32) {
        return 9;
    }

    return 10;  
}


export const getPamiecStenPL = (w) => {
    
    if (w < 34) {
        return 1;
    }

    if(w < 51) {
        return 2;
    }

    if(w < 68) { 
        return 3;
    }

    if(w < 86) {
        return 4;
    }

    if(w < 103) {
        return 5;
    }

    if(w < 120) {
        return 6;
    }
    
    if(w < 137) {
        return 7;
    }

    if(w < 155) {
        return 8
    }

    if(w < 174) {
        return 9;
    }

    return 10;
}

export const getMyslenieStenPL = (w) => {
    
    if (w < -17) {
        return 1;
    }

    if(w < -5) {
        return 2;
    }

    if(w < 7) { 
        return 3;
    }

    if(w < 19) {
        return 4;
    }

    if(w < 31) {
        return 5;
    }

    if(w < 43) {
        return 6;
    }
    
    if(w < 55) {
        return 7;
    }

    if(w < 67) {
        return 8
    }

    return 9;
}

export const getUwagaStenPL = (w) => {
    
    if (w < -8) {
        return 1;
    }

    if(w < 7) {
        return 2;
    }

    if(w < 22) { 
        return 3;
    }

    if(w < 36) {
        return 4;
    }

    if(w < 51) {
        return 5;
    }

    if(w < 66) {
        return 6;
    }
    
    if(w < 81) {
        return 7;
    }

    return 8;
}

export const getPercepcjaStenPL = (w) => {
    
    if (w < 58) {
        return 1;
    }

    if(w < 77) {
        return 2;
    }

    if(w < 98) { 
        return 3;
    }

    if(w < 110) {
        return 4;
    }

    if(w < 135) {
        return 5;
    }

    if(w < 154) {
        return 6;
    }
    
    return 7;
}
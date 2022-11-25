 // PL
 export const getITvisualStens = (visualSum, sex) => {
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

        if(visualSum < 22) {
            return 4;
        }

        if(visualSum < 25) {
            return 5;
        }

        if(visualSum < 27) {
            return 6;
        }

        if(visualSum < 30) {
            return 7;
        }


        if(visualSum < 33) {
            return 8;
        }

        if(visualSum < 35) {
            return 9;
        }

        return 10;  
    }

    if(visualSum < 14) {
        return 1;
    }

    if(visualSum < 17) {
        return 2;
    }

    if(visualSum < 21) {
        return 3;
    }

    if(visualSum < 24) {
        return 4;
    }

    if(visualSum < 26) {
        return 5;
    }

    if(visualSum < 29) {
        return 6;
    }

    if(visualSum < 31) {
        return 7;
    }

    if(visualSum < 33) {
        return 8;
    }

    if(visualSum < 36) {
        return 9;
    }

    return 10;  
}

export const getITauditoryStens = (auditorySum, sex) => {
    if(sex === 'female') {
        if(auditorySum < 14) {
            return 1;
        }

        if(auditorySum < 19) {
            return 2;
        }

        if(auditorySum < 23) {
            return 3;
        }

        if(auditorySum < 26) {
            return 4;
        }

        if(auditorySum < 29) {
            return 5;
        }

        if(auditorySum < 31) {
            return 6;
        }

        if(auditorySum < 33) {
            return 7;
        }

        if(auditorySum < 35) {
            return 8;
        }

        if(auditorySum < 36) {
            return 9;
        }

        return 10;  
    }

    if(auditorySum < 15) {
        return 1;
    }

    if(auditorySum < 18) {
        return 2;
    }

    if(auditorySum < 21) {
        return 3;
    }

    if(auditorySum < 24) {
        return 4;
    }

    if(auditorySum < 27) {
        return 5;
    }

    if(auditorySum < 29) {
        return 6;
    }

    if(auditorySum < 31) {
        return 7;
    }

    if(auditorySum < 33) {
        return 8;
    }

    if(auditorySum < 35) {
        return 9;
    }

    return 10;  
}

export const getITreadingStens = (readingSum, sex) => {
    if(sex === 'female') {
        if(readingSum < 12) {
            return 1;
        }

        if(readingSum < 16) {
            return 2;
        }

        if(readingSum < 19) {
            return 3;
        }

        if(readingSum < 22) {
            return 4;
        }

        if(readingSum < 25) {
            return 5;
        }

        if(readingSum < 27) {
            return 6;
        }

        if(readingSum < 29) {
            return 7;
        }


        if(readingSum < 32) {
            return 8;
        }

        if(readingSum < 34) {
            return 9;
        }

        return 10;  
    }

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

    if(readingSum < 27) {
        return 6;
    }

    if(readingSum < 29) {
        return 7;
    }


    if(readingSum < 32) {
        return 8;
    }

    if(readingSum < 35) {
        return 9;
    }

    return 10;  
}

export const getITkinestheticStens = (kinestheticSum, sex) => {
    if(sex === 'female') {
        if(kinestheticSum < 13) {
            return 1;
        }

        if(kinestheticSum < 17) {
            return 2;
        }

        if(kinestheticSum < 21) {
            return 3;
        }

        if(kinestheticSum < 23) {
            return 4;
        }

        if(kinestheticSum < 26) {
            return 5;
        }

        if(kinestheticSum < 28) {
            return 6;
        }

        if(kinestheticSum < 30) {
            return 7;
        }


        if(kinestheticSum < 32) {
            return 8;
        }

        if(kinestheticSum < 33) {
            return 9;
        }

        return 10;  
    }

    if(kinestheticSum < 14) {
        return 1;
    }

    if(kinestheticSum < 16) {
        return 2;
    }

    if(kinestheticSum < 19) {
        return 3;
    }

    if(kinestheticSum < 22) {
        return 4;
    }

    if(kinestheticSum < 24) {
        return 5;
    }

    if(kinestheticSum < 27) {
        return 6;
    }

    if(kinestheticSum < 29) {
        return 7;
    }

    if(kinestheticSum < 31) {
        return 8;
    }

    if(kinestheticSum < 34) {
        return 9;
    }

    return 10;  
}

export const getPamiecStenIT = (w) => {
    
    if (w < 7) {
        return 1;
    }

    if(w < 28) {
        return 2;
    }

    if(w < 48) { 
        return 3;
    }

    if(w < 69) {
        return 4;
    }

    if(w < 89) {
        return 5;
    }

    if(w < 110) {
        return 6;
    }
    
    if(w < 130) {
        return 7;
    }

    if(w < 151) {
        return 8
    }

    if(w < 173) {
        return 9;
    }

    return 10;
}

export const getMyslenieStenIT = (w) => {
    
    if (w < -18) {
        return 1;
    }

    if(w < -9) {
        return 2;
    }

    if(w < 3) { 
        return 3;
    }

    if(w < 13) {
        return 4;
    }

    if(w < 25) {
        return 5;
    }

    if(w < 35) {
        return 6;
    }
    
    if(w < 47) {
        return 7;
    }

    if(w < 57) {
        return 8
    }

    return 9;
}

export const getUwagaStenIT = (w) => {
    
    if (w < -35) {
        return 1;
    }

    if(w < -21) {
        return 2;
    }

    if(w < -6) { 
        return 3;
    }

    if(w < 9) {
        return 4;
    }

    if(w < 24) {
        return 5;
    }

    if(w < 39) {
        return 6;
    }
    
    if(w < 54) {
        return 7;
    }

    if(w < 69) {
        return 8
    }

    if(w < 85) {
        return 9
    }

    return 10;
}

export const getPercepcjaStenIT = (w) => {
    
    if (w < 17) {
        return 1;
    }

    if(w < 42) {
        return 2;
    }

    if(w < 66) { 
        return 3;
    }

    if(w < 91) {
        return 4;
    }

    if(w < 115) {
        return 5;
    }

    if(w < 110) {
        return 6;
    }
    
    return 7;
}
 // PL
 export const getROvisualStens = (visualSum, sex) => {
    if(sex === 'female') {
        if(visualSum < 17) {
            return 1;
        }

        if(visualSum < 19) {
            return 2;
        }

        if(visualSum < 23) {
            return 3;
        }

        if(visualSum < 26) {
            return 4;
        }

        if(visualSum < 29) {
            return 5;
        }

        if(visualSum < 31) {
            return 6;
        }

        if(visualSum < 33) {
            return 7;
        }


        if(visualSum < 35) {
            return 8;
        }

        if(visualSum < 36) {
            return 9;
        }

        return 10;  
    }

    if(visualSum < 12) {
        return 1;
    }

    if(visualSum < 18) {
        return 2;
    }

    if(visualSum < 22) {
        return 3;
    }

    if(visualSum < 25) {
        return 4;
    }

    if(visualSum < 27) {
        return 5;
    }

    if(visualSum < 30) {
        return 6;
    }

    if(visualSum < 33) {
        return 7;
    }

    if(visualSum < 34) {
        return 8;
    }

    if(visualSum < 35) {
        return 9;
    }

    return 10;  
}

export const getROauditoryStens = (auditorySum, sex) => {
    if(sex === 'female') {
        if(auditorySum < 19) {
            return 1;
        }

        if(auditorySum < 21) {
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

        if(auditorySum < 34) {
            return 7;
        }

        if(auditorySum < 36) {
            return 8;
        }

        return 9;
    }

    if(auditorySum < 11) {
        return 1;
    }

    if(auditorySum < 16) {
        return 2;
    }

    if(auditorySum < 22) {
        return 3;
    }

    if(auditorySum < 25) {
        return 4;
    }

    if(auditorySum < 25) {
        return 5;
    }

    if(auditorySum < 27) {
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

export const getROreadingStens = (readingSum, sex) => {
    if(sex === 'female') {
        if(readingSum < 14) {
            return 1;
        }

        if(readingSum < 18) {
            return 2;
        }

        if(readingSum < 20) {
            return 3;
        }

        if(readingSum < 23) {
            return 4;
        }

        if(readingSum < 26) {
            return 5;
        }

        if(readingSum < 29) {
            return 6;
        }

        if(readingSum < 32) {
            return 7;
        }


        if(readingSum < 34) {
            return 8;
        }

        if(readingSum < 36) {
            return 9;
        }

        return 10;  
    }

    if(readingSum < 9) {
        return 1;
    }

    if(readingSum < 14) {
        return 2;
    }

    if(readingSum < 20) {
        return 3;
    }

    if(readingSum < 22) {
        return 4;
    }

    if(readingSum < 25) {
        return 5;
    }

    if(readingSum < 29) {
        return 6;
    }

    if(readingSum < 31) {
        return 7;
    }


    if(readingSum < 33) {
        return 8;
    }

    if(readingSum < 34) {
        return 9;
    }

    return 10;  
}

export const getROkinestheticStens = (kinestheticSum, sex) => {
    if(sex === 'female') {
        if(kinestheticSum < 16) {
            return 1;
        }

        if(kinestheticSum < 18) {
            return 2;
        }

        if(kinestheticSum < 20) {
            return 3;
        }

        if(kinestheticSum < 23) {
            return 4;
        }

        if(kinestheticSum < 26) {
            return 5;
        }

        if(kinestheticSum < 29) {
            return 6;
        }

        if(kinestheticSum < 31) {
            return 7;
        }

        if(kinestheticSum < 33) {
            return 8;
        }

        if(kinestheticSum < 35) {
            return 9;
        }

        return 10;  
    }

    if(kinestheticSum < 12) {
        return 1;
    }

    if(kinestheticSum < 15) {
        return 2;
    }

    if(kinestheticSum < 20) {
        return 3;
    }

    if(kinestheticSum < 22) {
        return 4;
    }

    if(kinestheticSum < 25) {
        return 5;
    }

    if(kinestheticSum < 28) {
        return 6;
    }

    if(kinestheticSum < 31) {
        return 7;
    }

    if(kinestheticSum < 33) {
        return 8;
    }

    if(kinestheticSum < 35) {
        return 9;
    }

    return 10;  
}

export const getPamiecStenRO = (w) => {
    
    if (w < -1) {
        return 1;
    }

    if(w < 20) {
        return 2;
    }

    if(w < 43) { 
        return 3;
    }

    if(w < 67) {
        return 4;
    }

    if(w < 89) {
        return 5;
    }

    if(w < 112) {
        return 6;
    }
    
    if(w < 136) {
        return 7;
    }

    if(w < 158) {
        return 8
    }

    return 9;
}

export const getMyslenieStenRO = (w) => {
    
    if (w < -27) {
        return 1;
    }

    if(w < -14) {
        return 2;
    }

    if(w < -1) { 
        return 3;
    }

    if(w < 11) {
        return 4;
    }

    if(w < 23) {
        return 5;
    }

    if(w < 35) {
        return 6;
    }
    
    if(w < 49) {
        return 7;
    }

    if(w < 61) {
        return 8
    }

    return 9;
}

export const getUwagaStenRO = (w) => {
    
    if (w < -33) {
        return 1;
    }

    if(w < -19) {
        return 2;
    }

    if(w < -4) { 
        return 3;
    }

    if(w < 12) {
        return 4;
    }

    if(w < 27) {
        return 5;
    }

    if(w < 43) {
        return 6;
    }
    
    if(w < 59) {
        return 7;
    }

    if(w < 75) {
        return 8
    }

    return 9;
}

export const getPercepcjaStenRO = (w) => {
    
    if (w < 23) {
        return 1;
    }

    if(w < 46) {
        return 2;
    }

    if(w < 70) { 
        return 3;
    }

    if(w < 96) {
        return 4;
    }

    if(w < 119) {
        return 5;
    }

    if(w < 144) {
        return 6;
    }
    
    return 7;
}
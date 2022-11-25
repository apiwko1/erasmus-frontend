 // PL
 export const getCYvisualStens = (visualSum, sex) => {
    if(sex === 'female') {
        if(visualSum < 13) {
            return 1;
        }

        if(visualSum < 19) {
            return 2;
        }

        if(visualSum < 22) {
            return 3;
        }

        if(visualSum < 25) {
            return 4;
        }

        if(visualSum < 28) {
            return 5;
        }

        if(visualSum < 31) {
            return 6;
        }

        if(visualSum < 32) {
            return 7;
        }


        if(visualSum < 34) {
            return 8;
        }

        if(visualSum < 36) {
            return 9;
        }

        return 10;  
    }

    if(visualSum < 15) {
        return 1;
    }

    if(visualSum < 19) {
        return 2;
    }

    if(visualSum < 22) {
        return 3;
    }

    if(visualSum < 25) {
        return 4;
    }

    if(visualSum < 28) {
        return 5;
    }

    if(visualSum < 30) {
        return 6;
    }

    if(visualSum < 32) {
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

export const getCYauditoryStens = (auditorySum, sex) => {
    if(sex === 'female') {
        if(auditorySum < 12) {
            return 1;
        }

        if(auditorySum < 17) {
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

        if(auditorySum < 30) {
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

    if(auditorySum < 16) {
        return 1;
    }

    if(auditorySum < 19) {
        return 2;
    }

    if(auditorySum < 21) {
        return 3;
    }

    if(auditorySum < 24) {
        return 4;
    }

    if(auditorySum < 25) {
        return 5;
    }

    if(auditorySum < 27) {
        return 6;
    }

    if(auditorySum < 31) {
        return 7;
    }

    if(auditorySum < 34) {
        return 8;
    }

    if(auditorySum < 35) {
        return 9;
    }

    return 10;  
}

export const getCYreadingStens = (readingSum, sex) => {
    if(sex === 'female') {
        if(readingSum < 10) {
            return 1;
        }

        if(readingSum < 12) {
            return 2;
        }

        if(readingSum < 17) {
            return 3;
        }

        if(readingSum < 20) {
            return 4;
        }

        if(readingSum < 23) {
            return 5;
        }

        if(readingSum < 26) {
            return 6;
        }

        if(readingSum < 28) {
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

    if(readingSum < 10) {
        return 1;
    }

    if(readingSum < 15) {
        return 2;
    }

    if(readingSum < 18) {
        return 3;
    }

    if(readingSum < 20) {
        return 4;
    }

    if(readingSum < 23) {
        return 5;
    }

    if(readingSum < 26) {
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

export const getCYkinestheticStens = (kinestheticSum, sex) => {
    if(sex === 'female') {
        if(kinestheticSum < 11) {
            return 1;
        }

        if(kinestheticSum < 14) {
            return 2;
        }

        if(kinestheticSum < 18) {
            return 3;
        }

        if(kinestheticSum < 21) {
            return 4;
        }

        if(kinestheticSum < 24) {
            return 5;
        }

        if(kinestheticSum < 26) {
            return 6;
        }

        if(kinestheticSum < 29) {
            return 7;
        }


        if(kinestheticSum < 32) {
            return 8;
        }

        if(kinestheticSum < 36) {
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

    if(kinestheticSum < 18) {
        return 3;
    }

    if(kinestheticSum < 20) {
        return 4;
    }

    if(kinestheticSum < 24) {
        return 5;
    }

    if(kinestheticSum < 26) {
        return 6;
    }

    if(kinestheticSum < 30) {
        return 7;
    }

    if(kinestheticSum < 32) {
        return 8;
    }

    if(kinestheticSum < 34) {
        return 9;
    }

    return 10;  
}


export const getPamiecStenCY = (w) => {
    
    if (w < 6) {
        return 1;
    }

    if(w < 23) {
        return 2;
    }

    if(w < 42) { 
        return 3;
    }

    if(w < 60) {
        return 4;
    }

    if(w < 79) {
        return 5;
    }

    if(w < 97) {
        return 6;
    }
    
    if(w < 116) {
        return 7;
    }

    if(w < 135) {
        return 8
    }

    if(w < 165) {
        return 9;
    }

    return 10;
}

export const getMyslenieStenCY = (w) => {
    
    if (w < -24) {
        return 1;
    }

    if(w < -10) {
        return 2;
    }

    if(w < 0) { 
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
    
    if(w < 47) {
        return 7;
    }

    if(w < 59) {
        return 8
    }

    return 9;
}

export const getUwagaStenCY = (w) => {
    
    if (w < -33) {
        return 1;
    }

    if(w < -24) {
        return 2;
    }

    if(w < -11) { 
        return 3;
    }

    if(w < 2) {
        return 4;
    }

    if(w < 15) {
        return 5;
    }

    if(w < 28) {
        return 6;
    }
    
    if(w < 41) {
        return 7;
    }

    if(w < 58) {
        return 8
    }

    return 9;
}

export const getPercepcjaStenCY = (w) => {
    
    if (w < 35) {
        return 1;
    }

    if(w < 58) {
        return 2;
    }

    if(w < 79) { 
        return 3;
    }

    if(w < 102) {
        return 4;
    }

    if(w < 122) {
        return 5;
    }

    if(w < 144) {
        return 6;
    }
    
    return 7;
}
 // PL
 export const getEUvisualStens = (visualSum, sex) => {
    if(sex === 'female') {
        if(visualSum < 14) {
            return 1;
        }

        if(visualSum < 18) {
            return 2;
        }

        if(visualSum < 21) {
            return 3;
        }

        if(visualSum < 24) {
            return 4;
        }

        if(visualSum < 27) {
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

    if(visualSum < 14) {
        return 1;
    }

    if(visualSum < 17) {
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

    if(visualSum < 31) {
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

export const getEUauditoryStens = (auditorySum, sex) => {
    if(sex === 'female') {
        if(auditorySum < 15) {
            return 1;
        }

        if(auditorySum < 20) {
            return 2;
        }

        if(auditorySum < 22) {
            return 3;
        }

        if(auditorySum < 25) {
            return 4;
        }

        if(auditorySum < 28) {
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

    if(auditorySum < 14) {
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

    if(auditorySum < 26) {
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

export const getEUreadingStens = (readingSum, sex) => {
    if(sex === 'female') {
        if(readingSum < 12) {
            return 1;
        }

        if(readingSum < 15) {
            return 2;
        }

        if(readingSum < 19) {
            return 3;
        }

        if(readingSum < 22) {
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

        if(readingSum < 34) {
            return 9;
        }

        return 10;  
    }

    if(readingSum < 11) {
        return 1;
    }

    if(readingSum < 15) {
        return 2;
    }

    if(readingSum < 18) {
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


    if(readingSum < 32) {
        return 8;
    }

    if(readingSum < 34) {
        return 9;
    }

    return 10;  
}

export const getEUkinestheticStens = (kinestheticSum, sex) => {
    if(sex === 'female') {
        if(kinestheticSum < 13) {
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

    if(kinestheticSum < 12) {
        return 1;
    }

    if(kinestheticSum < 15) {
        return 2;
    }

    if(kinestheticSum < 18) {
        return 3;
    }

    if(kinestheticSum < 21) {
        return 4;
    }

    if(kinestheticSum < 23) {
        return 5;
    }

    if(kinestheticSum < 26) {
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

export const getPamiecStenEU = (w) => {
    
    if (w < 16) {
        return 1;
    }

    if(w < 36) {
        return 2;
    }

    if(w < 56) { 
        return 3;
    }

    if(w < 76) {
        return 4;
    }

    if(w < 96) {
        return 5;
    }

    if(w < 116) {
        return 6;
    }
    
    if(w < 136) {
        return 7;
    }

    if(w < 156) {
        return 8
    }

    if(w < 175) {
        return 9;
    }

    return 10;
}

export const getMyslenieStenEU = (w) => {
    
    if (w < -20) {
        return 1;
    }

    if(w < -9) {
        return 2;
    }

    if(w < 3) { 
        return 3;
    }

    if(w < 15) {
        return 4;
    }

    if(w < 27) {
        return 5;
    }

    if(w < 39) {
        return 6;
    }
    
    if(w < 51) {
        return 7;
    }

    if(w < 59) {
        return 8
    }

    if(w < 63) {
        return 9
    }

    return 10;
}

export const getUwagaStenEU = (w) => {
    
    if (w < -28) {
        return 1;
    }

    if(w < -12) {
        return 2;
    }

    if(w < 5) { 
        return 3;
    }

    if(w < 21) {
        return 4;
    }

    if(w < 37) {
        return 5;
    }

    if(w < 54) {
        return 6;
    }
    
    if(w < 70) {
        return 7;
    }

    if(w < 86) {
        return 8
    }

    return 9;
}

export const getPercepcjaStenEU = (w) => {
    
    if (w < 38) {
        return 1;
    }

    if(w < 60) {
        return 2;
    }

    if(w < 82) { 
        return 3;
    }

    if(w < 104) {
        return 4;
    }

    if(w < 126) {
        return 5;
    }

    if(w < 149) {
        return 6;
    }
    
    return 7;
}
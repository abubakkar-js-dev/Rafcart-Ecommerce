const result = {
    bangla: {
        MCQ: 0,
        CQ: 41,
        TOTAL: 41,
    },
    english: {
        MCQ: 0,
        CQ: 40,
        TOTAL: 40,
    },
    ICT: {
        MCQ: 11,
        CQ: 21,
        TOTAL: 32,
    },
    islamic_history: {
        MCQ: 15,
        CQ: 33,
        TOTAL: 48,
    },
    civics: {
        MCQ: 15,
        CQ: 31,
        TOTAL: 46,
    },
    logic: {
        MCQ: 17,
        CQ: 13,
        TOTAL: 30,
    },
    agriculture: {
        MCQ: 14,
        CQ: 20,
        TOTAL: 34,
    }

}
findTotal();
function findTotal(){
    let total = 0;
    for (let sub of result){
        total = sub; 
    }
    return total;
}



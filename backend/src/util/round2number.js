const round2number= (number)=> {
    if(number) {
        return parseFloat(parseFloat(number).toFixed(2))
    }
    else {
        return 0
    }
}

export default round2number
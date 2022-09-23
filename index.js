const saturdayFun = (special = 'roller-skate') => {
    return `This Saturday, I want to ${special}!`;
}
const mondayWork = (special = 'go to the office') => {
    return `This Monday, I will ${special}.`
}
const wrapAdjective = (activity = '*') => {
    return (pram = 'special') => {
        return `You are ${activity}${pram}${activity}!`
    }
}

// Your code here

// function declaration with default parameter
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

// function expression with default parameter
const mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = function(outerStr="*") {
    return function(innerStr="special") {
        return `You are ${outerStr}${innerStr}${outerStr}!`
    }   
}

const Calculator = { 
    add: function(a,b) {
        return a + b
      },
    
    subtract: function(a,b) {
        return a - b
    },

    multiply: function(a,b) {
        return a * b
    },

    divide: function(a,b) {
        return a/b
    }
}

function actionApplyer(integer, array) {
    let s = integer
    
    for (let i = 0; i < array.length; i++){
        s = array[i](s)
    }
    return s
}



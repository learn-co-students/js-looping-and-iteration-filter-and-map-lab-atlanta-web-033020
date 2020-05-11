// Code your solution here:
function driversWithRevenueOver(arr, num){
    function isGreater(obj){
        return obj.revenue > num
    }
    return arr.filter(isGreater)
}

function driverNamesWithRevenueOver(arr, num){
    function isGreater(obj){
        return obj.revenue > num
    }
    function toName(obj){
        return obj.name
    }
    return arr.filter(isGreater).map(toName)
}

function exactMatch(arr, matchObj){
    function match(obj){
        for(const key in obj){
            for(const key2 in matchObj){
                if(key === key2 && obj[key] === matchObj[key2]){
                    return true
                }
            }
        }
        return false
    }
    return arr.filter(match)
}

function exactMatchToList(arr, matchObj){
    function match(obj){
        for(const key in obj){
            for(const key2 in matchObj){
                if(key === key2 && obj[key] === matchObj[key2]){
                    return true
                }
            }
        }
        return false
    }
    function toName(obj){
        return obj.name
    }
    return arr.filter(match).map(toName)
}
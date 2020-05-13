// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter( function (driver) {
        return driver.revenue > revenue 
    })
}

function driverNamesWithRevenueOver(drivers, revenue) {
    let filteredDrivers = drivers.filter( function (driver) {
        if (driver.revenue >= revenue) {
            return driver.name
        }
    })
    return filteredDrivers.map( function (driver) {
        return driver.name
    })
}

function exactMatch(drivers, attribute) {
    return drivers.filter( function (driver) {
        for (const attr in attribute) {
            return driver[attr] === attribute[attr]
        }
    })
}

function exactMatchToList(drivers, attribute) {
    let driver = exactMatch(drivers, attribute)
    return driver.map( function (drive) {
        for (const attributes in drive) {
            if (attributes === 'name') {
                return drive[attributes]
            }
        }
    })
}
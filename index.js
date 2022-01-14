// Code your solution here
const findMatching = (driverNames, string) => {
    return driverNames.filter((name) => {
        return string.toUpperCase() === name.toUpperCase();
    })
}

const fuzzyMatch = (driverNames, string) => {
    return driverNames.filter((name) =>{
        return string === name.substring(0, string.length);
    })
}

const matchName = (drivers, string) => {
    return drivers.filter(driver => driver.name === string)
}
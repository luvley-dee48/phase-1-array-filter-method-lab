// Code your solution here
function findMatching(drivers, name) {
  const lowerCaseName = name.toLowerCase();
  return drivers.filter((driver) => driver.toLowerCase() === lowerCaseName);
}

function fuzzyMatch(drivers, query) {
  const lowerCaseQuery = query.toLowerCase();
  return drivers.filter((driver) =>
    driver.toLowerCase().startsWith(lowerCaseQuery)
  );
}

function matchName(drivers, name) {
  return drivers.filter((driver) => driver.name === name);
}

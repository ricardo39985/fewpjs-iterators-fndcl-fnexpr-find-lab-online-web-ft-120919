const record = [
	{ year: "2018", result: "L" },
	{ year: "2017", result: "W" },
	{ year: "2016", result: "N/A" },
	//...
];
const testVar = {};

function testFunc() {
	return "hi";
}

function superbowlWin(array) {
let result = array.find(obj => obj.result === 'W')
if (result) {
  return result.year
}
}

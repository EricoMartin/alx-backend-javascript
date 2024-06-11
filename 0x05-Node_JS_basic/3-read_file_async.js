const fs = require('fs');

function countStudents(path) {
  return new Promise((res, rej) => {
    fs.readFile(path, (err, data) => {
      if (err) {
	rej(Error('Cannot load the database'));
      }else {
        let newData = data.toString().split('\n');
        newData = newData.slice(1, newData.length - 1);
        console.log(`Number of students: ${newData.length}`);
        const numberOfStudents = newData.length;
	const obj = {};
        newData.forEach((el) => {
          const student = el.split(',');
          if (!obj[student[3]]) obj[student[3]] = [];
          obj[student[3]].push(student[0]);
        });
	let out = `Number of students: ${numberOfStudents}\n`;
        for (const cls in obj) {
          if (cls) out += `Number of students in ${cls}: ${obj[cls].length}. List: ${obj[cls].join(', ')}\n`;
        }
	res(out.trim());
      }
    });
  });
}

module.exports = countStudents;

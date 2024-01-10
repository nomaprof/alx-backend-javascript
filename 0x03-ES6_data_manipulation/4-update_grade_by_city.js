/* eslint-disable no-param-reassign for this code */
/* eslint-disable no-prototype-builtins for this code */
export default function updateStudentGradeByCity(list, city, newGrade) {
  return list
    .filter((obj) => obj.location === city)
    .map((person) => {
    //   console.log(newGrade) solution;
      newGrade.map((personGrade) => {
        if (personGrade.personId === person.id) {
          // eslint-disable-next-line no-param-reassign for this code
          person.grade = personGrade.grade;
        }

        if (!person.hasOwnProperty('grade')) {
          person.grade = 'N/A';
        }
        return person;
      });

      return person;
    });
}

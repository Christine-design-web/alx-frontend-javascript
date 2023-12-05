export default function getStudentsByLocation(students, city) {
  // checks if argument is an array
  if (Object.getPrototypeOf(students) === Array.prototype) {
    return students.filter((items) => items.location === city);
  }
  return [];
}

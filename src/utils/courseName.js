const courses = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi"
]

function getCourseName(number) {
  return courses[number]
}

function getAllCourseNames() {
  return courses
}

export { getAllCourseNames, getCourseName }

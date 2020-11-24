const courses = [
  "Hors d'oeuvres",
  "Soupe",
  "Poisson",
  "Salade",
  "Plât principal",
  "Dessert"
]

function getCourseName(number) {
  return courses[number]
}

function getAllCourseNames() {
  return courses
}

export { getAllCourseNames, getCourseName }

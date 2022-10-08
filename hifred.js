const carForm = document.getElementById("carForm")
const carContainer = document.querySelector(".cars")
const makeInput = carForm["make"]
const modelInput = carForm["model"]
const yearInput = carForm["year"]

const cars
  = JSON.parse(localStorage.getItem("cars")) || []

const addCar = (make, model, year) => {
  cars.push({
    make,
    model,
    year,
  })

  localStorage.setItem("cars", JSON.stringify(cars))

  return { make, model,year}
}

const createCarElement = ({make, model, year}) => {

  const carDiv = document.createElement("div")
  const carModel = document.createElement("h2")
  const carYear = document.createElement("p")
  const carMake = document.createElement("p")

  carModel.innerText = "Car Make: " + make
  carMake.innerText = "Car model: " + model
  carYear.innerText = "Car Year: " + year


  carDiv.append(carModel, carMake, carYear)
  carContainer.appendChild(carDiv)

  carContainer.style.display = cars.length === 0 ? "none" : "flex"
}

carContainer.style.display = cars.length === 0 ? "none" : "flex"

cars.forEach(createCarElement)

carForm.onsubmit = (e) => {
  e.preventDefault()

  const newCar = addCar (makeInput.value, modelInput.value, yearInput.value)

  createCarElement(newCar)

  makeInput.value = ""
  modelInput.value = ""
  yearInput.value = ""
}

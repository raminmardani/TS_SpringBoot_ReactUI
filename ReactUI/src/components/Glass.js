import './Glass.css'
import { useState } from 'react'
import axios from 'axios'

function Glass() {
  const [petalLength, setPetalLength] = useState('')
  const [petalWidth, setPetalWidth] = useState('')
  const [sepalLength, setSepalLength] = useState('')
  const [sepalWidth, setSepalWidth] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const params = { petalLength, petalWidth, sepalLength, sepalWidth }



    axios.get("http://localhost:8000/iris/classify/class", {},{params:params})
      .then((res) => {
        const data = res.data
        const parameters = JSON.stringify(params)
        const msg = `Prediction: ${data}\nParameters: ${parameters}`
        alert(msg)
        reset()
      })
      .catch((error) => alert(`Error: ${error.message}`))
  }

  const reset = () => {
    setPetalLength('')
    setPetalWidth('')
    setSepalLength('')
    setSepalWidth('')
  }

  return (
    <div className="glass">
      <form onSubmit={(e) => handleSubmit(e)} className="glass__form">
        <h4>Iris Flower Classification</h4>
        <div className="glass__form__group">
          <input
            id="petalLength"
            className="glass__form__input"
            placeholder="Petal Length"
            required
            min="0"
            max="10"
            type="number"
            title="In Centimeters"
            pattern="[0-9]+([\.,][0-9]+)?"
            step="0.1"
            value={petalLength}
            onChange={(e) => setPetalLength(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <input
            id="petalWidth"
            className="glass__form__input"
            placeholder="Petal Width"
            required
            min="0"
            max="10"
            type="number"
            title="In Centimeters"
            pattern="[0-9]+([\.,][0-9]+)?"
            step="0.1"
            value={petalWidth}
            onChange={(e) => setPetalWidth(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <input
            id="sepalLength"
            className="glass__form__input"
            placeholder="Sepal Length"
            required
            min="0"
            max="10"
            type="number"
            title="In Centimeters"
            pattern="[0-9]+([\.,][0-9]+)?"
            step="0.1"
            value={sepalLength}
            onChange={(e) => setSepalLength(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <input
            id="sepalWidth"
            className="glass__form__input"
            placeholder="Sepal Width"
            required
            min="0"
            max="10"
            type="number"
            title="In Centimeters"
            pattern="[0-9]+([\.,][0-9]+)?"
            step="0.1"
            value={sepalWidth}
            onChange={(e) => setSepalWidth(e.target.value)}
          />
        </div>


        <div className="glass__form__group">
          <button type="submit" className="glass__form__btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Glass

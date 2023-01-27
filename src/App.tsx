import { useState, createContext } from 'react'
import Thermometers from './components/Thermometers'
import Input from './components/Input'
export type GlobalContent = {
  kelvin: number
  setKelvin: (c: number) => void
  celsius: number
  setCelsius: (c: number) => void
  fahrenheit: number
  setFahrenheit: (c: number) => void
  displayCel: number
  setDisplayCel: (c: number) => void
  displayFar: number
  setDisplayFar: (c: number) => void
  displayKel: number
  setDisplayKel: (c: number) => void
}
export const AppContext = createContext<GlobalContent>({
  kelvin: 0,
  setKelvin: () => {},
  celsius: NaN,
  setCelsius: () => {},
  fahrenheit: 0,
  setFahrenheit: () => {},
  displayCel: NaN,
  setDisplayCel: () => {},
  displayFar: NaN,
  setDisplayFar: () => {},
  displayKel: NaN,
  setDisplayKel: () => {},
})
function App() {
  const [kelvin, setKelvin] = useState(0)
  const [celsius, setCelsius] = useState(0)
  const [fahrenheit, setFahrenheit] = useState(0)
  const [displayCel, setDisplayCel] = useState(0)
  const [displayFar, setDisplayFar] = useState(0)
  const [displayKel, setDisplayKel] = useState(0)
  const changeValue = (e: any) => {
    const universal = 171 + 1.6 * Number(e.target.value)
    const cel: number = Number(e.target.value)
    const far: number = Number(e.target.value) * 1.8 + 32
    const kel: number = Number(e.target.value) + 273.15
    if (cel > 100 || cel < -100) {
      alert('The value must be between 100 and -100')
      setCelsius(0)
      setFahrenheit(0)
      setKelvin(0)
    } else {
      setDisplayCel(cel)
      setDisplayFar(far)
      setDisplayKel(kel)
      setCelsius(universal)
      setFahrenheit(universal)
      setKelvin(universal)
    }
  }

  return (
    <div className='App'>
      <AppContext.Provider
        value={{
          kelvin,
          setKelvin,
          celsius,
          setCelsius,
          fahrenheit,
          setFahrenheit,
          displayCel,
          setDisplayCel,
          displayFar,
          setDisplayFar,
          displayKel,
          setDisplayKel,
        }}
      >
        <h1>Temperature Converter</h1>
        <Thermometers />
        {celsius !== 0 ? (
          <div className='result'>
            <div className='result-kel'>{displayKel.toFixed(0)}ºK</div>
            <div className='result-cel'>{displayCel.toFixed(0)}ºC</div>
            <div className='result-far'>{displayFar.toFixed(0)}ºF</div>
          </div>
        ) : null}
        <Input onChange={changeValue} />
      </AppContext.Provider>
    </div>
  )
}

export default App

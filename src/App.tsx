import { useState,createContext } from 'react'
import Thermometers from './components/Thermometers'
import Input from './components/Input'
export type GlobalContent = {
  kelvin: number
  setKelvin: (c: number) => void
  celsius: number
  setCelsius: (c: number) => void
  fahrenheit:number
  setFahrenheit:(c: number) => void
}
export const AppContext = createContext<GlobalContent>({
  kelvin: 0,
  setKelvin: () => {},
  celsius:NaN,
  setCelsius:() => {},
  fahrenheit:0,
  setFahrenheit:() => {}
})
function App() {
  const [kelvin, setKelvin]=useState(75)
  const [celsius, setCelsius]=useState(30)
  const [fahrenheit, setFahrenheit]=useState(25)
  const changeValue=(e:any)=>{
    
    
    
    setCelsius(celsius=>celsius=e.target.value)
  }
  console.log(celsius);
  return (
    <div className="App">
      <AppContext.Provider value={{ kelvin, setKelvin, celsius, setCelsius,fahrenheit, setFahrenheit }}>
    <Thermometers/>
    <Input
     onChange={changeValue}
     
    />
    </AppContext.Provider>
    </div>
  )
}

export default App

import { useContext } from 'react'
import { AppContext } from '../App'

const Thermometers = () => {
  const { kelvin } = useContext(AppContext)
  const { celsius } = useContext(AppContext)
  const { fahrenheit } = useContext(AppContext)
  return (
    <div className='thermometers'>
      <div className='wrapper kel'>
        <div
          className='column kel'
          style={{ height: `${kelvin}px` }}
        ></div>
      </div>
      <div className='tank kel'>ºK</div>
      <div className='wrapper cel'>
        <div
          className='column cel'
          style={{ height: `${celsius}px` }}
        ></div>
      </div>
      <div className='tank cel'>ºC</div>
      <div className='wrapper far'>
        <div
          className='column far'
          style={{ height: `${fahrenheit}px` }}
        ></div>
      </div>
      <div className='tank far'>ºF</div>
    </div>
  )
}

export default Thermometers

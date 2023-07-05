
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CityComponent from './component/CityComponent';
import { getCities } from './redux/City/CityRepository';

function App() {
  const cities = useSelector(state=> {
    return state.cityStore.city
  })
  const dispatch = useDispatch()
  useEffect(()=>{
   dispatch(getCities())
  },[])

  return (
    <>
    <div style={{display : 'flex',flexWrap : 'wrap', justifyContent : 'space-evenly'}}>
      {cities? cities.map(i=><CityComponent key={i} cityname={i}/>) : null}
    </div>
    </>

  );
}

export default App;

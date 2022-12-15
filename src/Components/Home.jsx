import React , {useState , useEffect} from 'react'
import {fetchCockets} from '../redux/Slice/cocktailSlice'
import {useDispatch , useSelector} from 'react-redux' 
import Cocktails from './Cocktails'

export default function Home() {
    const [modifyCocktails , setmodifyCocktails] = useState([])
    const {loading , error , cocktails} = useSelector(state=>({
        ...state.app
    }))
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchCockets())
    },[])

  return (
    <>
    {
        loading ? <h2>Loading...</h2> : error ? {error} : <Cocktails cocktails={cocktails} />
    }
    </>
  )
}

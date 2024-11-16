import { useContext } from 'react'
import { GlobalContext } from '../components/contexts/GlobalContextProvider'

export const useGlobalContext = () => useContext(GlobalContext)

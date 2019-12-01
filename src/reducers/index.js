import {combineReducers} from 'redux'
import {countriesReducers} from './countriesReducers'
import {countryReducers} from  './countryReducers'
import {aircraftReducers} from './aircraftReducers'
import {aircraftsReducers} from './aircraftsReducers'

export default combineReducers({
    countriesReducers,
    countryReducers,
    aircraftReducers,
    aircraftsReducers
  })
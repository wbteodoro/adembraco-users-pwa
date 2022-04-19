import {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect
} from 'react'
import { placesGroupsOptions, placeOptions, placeSchedules } from '@/mocks'
import { ServiceContextData } from './types'
import { setStorageItem, getStorageItem } from '@/utils/local-storage'

const ServiceContext = createContext<ServiceContextData>(
  {} as ServiceContextData
)

type ServiceProviderProps = {
  children: React.ReactNode
}

export const ServiceProvider = ({ children }: ServiceProviderProps) => {
  const [placesOptionsByGroup, setPlacesOptionsByGroup] = useState([])
  const [schedulesByDate, setSchedulesByDate] = useState([])
  const [selectedPlaceId, setSelectedPlaceId] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedSchedule, setSelectedSchedule] = useState([])

  const [reservationsData, setReservationsData] = useState({
    place: {},
    date: '',
    schedules: []
  })

  useEffect(() => {
    const schedules = placeSchedules.filter(
      schedule => schedule.placeId === selectedPlaceId
    )
    setSchedulesByDate(schedules)
  }, [selectedPlaceId])

  const choosePlaceCardOption = useCallback(
    option => {
      if (option.placeId !== selectedPlaceId) {
        setSelectedSchedule([])
        setSchedulesByDate([])
      }
      setSelectedPlaceId(option.placeId)
    },
    [selectedPlaceId]
  )

  const choosePlaceGroup = useCallback(group => {
    const placesFiltered = placeOptions.filter(
      option => option.placeGroup === group
    )
    setPlacesOptionsByGroup(placesFiltered)
    setSelectedSchedule([])
    setSchedulesByDate([])
    setSelectedPlaceId(null)
  }, [])

  const getSchedulesByDate = useCallback(
    event => {
      setSelectedDate(event.target.value)

      const schedules = placeSchedules.filter(
        schedule => schedule.placeId === selectedPlaceId
      )
      setSchedulesByDate(schedules)
      setSelectedSchedule([])
    },
    [selectedPlaceId]
  )

  const getReservationsData = useCallback(() => {
    const data = getStorageItem('reservations')

    if (data) {
      const { selectedPlaceId, selectedDate, selectedSchedule } = data

      setReservationsData({
        place: placeOptions.find(place => selectedPlaceId === place.placeId),
        date: selectedDate.split('-').reverse().join('/'),
        schedules: selectedSchedule.map(schedule =>
          placeSchedules.filter(
            placeSchedule => placeSchedule.scheduleId === schedule
          )
        )
      })
    }
  }, [])

  const saveReservations = useCallback(() => {
    setStorageItem('reservations', {
      selectedDate,
      selectedPlaceId,
      selectedSchedule
    })
  }, [selectedDate, selectedPlaceId, selectedSchedule])

  return (
    <ServiceContext.Provider
      value={{
        placesOptionsByGroup,
        selectedPlaceId,
        placesGroupsOptions,
        schedulesByDate,
        choosePlaceGroup,
        choosePlaceCardOption,
        getSchedulesByDate,
        setSelectedSchedule,
        selectedSchedule,
        selectedDate,
        saveReservations,
        getReservationsData,
        reservationsData
      }}
    >
      {children}
    </ServiceContext.Provider>
  )
}

const useService = () => {
  const context = useContext(ServiceContext)
  if (!context) {
    throw new Error('useService with problem')
  }
  return context
}

export default useService

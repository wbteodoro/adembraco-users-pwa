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
  const [placesOptionsByGroup, setPlacesOptionsByGroup] = useState<
    ServiceContextData['placesOptionsByGroup']
  >([])
  const [schedulesByDateAndPlace, setSchedulesByDateAndPlace] = useState<
    ServiceContextData['schedulesByDateAndPlace']
  >([])
  const [selectedPlaceId, setSelectedPlaceId] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedSchedule, setSelectedSchedule] = useState<
    ServiceContextData['selectedSchedule']
  >([])

  const [reservationsData, setReservationsData] = useState<
    ServiceContextData['reservationsData']
  >({
    place: {} as typeof placeOptions[0],
    date: '',
    schedules: [],
    totalPrice: 0
  })

  useEffect(() => {
    const schedules = placeSchedules.filter(
      schedule => schedule.placeId === selectedPlaceId
    )
    setSchedulesByDateAndPlace(schedules)
    setSelectedDate(new Date().toISOString().split('T')[0])
  }, [selectedPlaceId])

  const choosePlaceCardOption = useCallback(
    option => {
      if (option.placeId !== selectedPlaceId) {
        setSelectedSchedule([])
        setSchedulesByDateAndPlace([])
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
    setSchedulesByDateAndPlace([])
    setSelectedPlaceId(null)
  }, [])

  const getSchedulesByDate = useCallback(
    event => {
      setSelectedDate(event.target.value)

      const schedules = placeSchedules.filter(
        schedule => schedule.placeId === selectedPlaceId
      )
      setSchedulesByDateAndPlace(schedules)
      setSelectedSchedule([])
    },
    [selectedPlaceId]
  )

  const getReservationsData = useCallback(() => {
    const data = getStorageItem('reservations')

    if (data) {
      const { selectedPlaceId, selectedDate, selectedSchedule } = data

      const schedules: typeof schedulesByDateAndPlace = []

      for (let i = 0; i < selectedSchedule.length; i++) {
        for (let j = 0; j < schedulesByDateAndPlace.length; j++) {
          if (schedulesByDateAndPlace[j].scheduleId === selectedSchedule[i]) {
            schedules.push(schedulesByDateAndPlace[j])
          }
        }
      }

      console.log(selectedDate)

      setReservationsData({
        place: placeOptions.find(place => selectedPlaceId === place.placeId),
        date: selectedDate.split('-').reverse().join('/'),
        schedules,
        totalPrice: schedules.reduce(
          (total, schedule) => total + schedule.price,
          0
        )
      })
    }
  }, [schedulesByDateAndPlace])

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
        schedulesByDateAndPlace,
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

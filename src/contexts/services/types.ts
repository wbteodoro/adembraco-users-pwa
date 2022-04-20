import { ChangeEvent } from 'react'
import {
  GenericOptionType,
  PlaceOptionsData,
  PlaceSchedulesType
} from '@/types'

export type ServiceContextData = {
  placesOptionsByGroup: PlaceOptionsData[]
  placesGroupsOptions: GenericOptionType[]
  schedulesByDateAndPlace: PlaceSchedulesType[]
  selectedPlaceId: PlaceSchedulesType['placeId']
  choosePlaceGroup(value: string): void
  choosePlaceCardOption(option: PlaceOptionsData): void
  getSchedulesByDate(event: ChangeEvent<HTMLInputElement>): void
  setSelectedSchedule: (
    value:
      | PlaceSchedulesType['scheduleId'][]
      | ((
          prevState: PlaceSchedulesType['scheduleId'][]
        ) => PlaceSchedulesType['scheduleId'][])
  ) => void
  selectedSchedule: PlaceSchedulesType['scheduleId'][]
  selectedDate: string
  saveReservations(): void
  getReservationsData(): void
  reservationsData: {
    place: PlaceOptionsData
    date: string
    schedules: PlaceSchedulesType[]
    totalPrice: number
  }
}

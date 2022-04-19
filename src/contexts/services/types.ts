import { ChangeEvent } from 'react'
import {
  GenericOptionType,
  PlaceOptionsData,
  PlaceSchedulesType
} from '@/types'

export type ServiceContextData = {
  placesOptionsByGroup: PlaceOptionsData[]
  placesGroupsOptions: GenericOptionType[]
  schedulesByDate: PlaceSchedulesType[]
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
  reservationsData: Record<string, any>
}

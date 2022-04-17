import Head from 'next/head'
import { useState } from 'react'
import TemplateReservations from '@/templates/reservations'
import { placesGroupsOptions, placeOptions } from '@/mocks'

export default function ReservationsPage() {
  const [placesOptionsByGroup, setPlacesOptionsByGroup] = useState([])

  const handleChooseCard = option => {
    console.log(option)
  }

  const handleChooseGroup = group => {
    const placesFiltered = placeOptions.filter(
      option => option.placeGroup === group
    )
    setPlacesOptionsByGroup(placesFiltered)
  }

  return (
    <>
      <Head>
        <title>ADEMBRACO - Reservas</title>
      </Head>
      <TemplateReservations
        placeOptions={placesOptionsByGroup}
        placesGroupsOptions={placesGroupsOptions}
        onChooseGroup={handleChooseGroup}
        onChooseCard={handleChooseCard}
      />
    </>
  )
}

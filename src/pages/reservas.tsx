import Head from 'next/head'
import TemplateReservations from '@/templates/reservations'

export default function ReservationsPage() {
  return (
    <>
      <Head>
        <title>ADEMBRACO - Reservas</title>
      </Head>
      <TemplateReservations />
    </>
  )
}

import Head from 'next/head'
import TemplateReservations from '@/templates/reservations'

const placeOptions = [
  {
    placeId: '1',
    placeGroup: 'Quadra',
    name: 'Espaço 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, nisi sed consectetur sagittis, nisl erat cursus lacus, eget condimentum nunc nisl eu nisi.',
    imgUrl: '/images/image_place.jpg'
  },
  {
    placeId: '2',
    name: 'Espaço 2',
    placeGroup: 'Quadra',
    description:
      'Nullam consectetur, nisi sed consectetur sagittis, nisl erat cursus lacus, eget condimentum nunc nisl eu nisi.',
    imgUrl: '/images/image_place.jpg'
  },
  {
    placeId: '3',
    name: 'Área Lazer 1',
    placeGroup: 'Quiosque',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, nisi sed consectetur sagittis, nisl erat cursus lacus, eget condimentum nunc nisl eu nisi.',
    imgUrl: '/images/image_place.jpg'
  },
  {
    placeId: '4',
    name: 'Área Lazer 2',
    placeGroup: 'Quiosque',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, nisi sed consectetur sagittis, nisl erat cursus lacus, eget condimentum nunc nisl eu nisi.',
    imgUrl: '/images/image_place.jpg'
  }
]

export default function ReservationsPage() {
  return (
    <>
      <Head>
        <title>ADEMBRACO - Reservas</title>
      </Head>
      <TemplateReservations placeOptions={placeOptions} />
    </>
  )
}

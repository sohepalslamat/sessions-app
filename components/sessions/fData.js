// type Session = {
//     company_name: string
//     company_logo: string
//     company_description: string
//     start_date: string
//     end_date: string
//     zoom_link: string
// }

// type SData = {
//   day: number
//   sessions: Session[]
// }
import moment from "moment"
export default [
  {
    day: +moment().format('DD'),
    sessions: [
      {
        company_name: 'Baraka (YC S21)',
        company_logo:
          'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/640px-Starbucks_Corporation_Logo_2011.svg.png',
        company_description: 'Investing. Empowered.',
        start_date: '2022-12-07 11:00:06',
        end_date: '2022-12-07 11:30:06',

        zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
      },
      {
        company_name: 'Memorisely',
        company_logo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi16u9yD2j4H1UhDIEcw6JxbNjBvShnDRL6_-17iNKjiXbQgFQpM0yQzPa7SDNLU3JeVs&usqp=CAU',
        company_description: 'E-Learning',
        start_date: '2023-01-07 11:00:06',
        end_date: '2023-01-07 11:30:06',
        zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
      },
      {
        company_name: 'Memorisely',
        company_logo:
          'https://img.freepik.com/premium-vector/saudi-arabia-tour-travel-logo-umrah-hajj-company-icon_18099-3718.jpg',
        company_description: 'The Evolution of A Revolution',
        start_date: '2023-01-08 11:00:06',
        end_date: '2023-01-08 11:30:06',
        zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
      },
      {
        company_name: 'Swvl',
        company_logo:
          'https://miro.medium.com/max/936/1*dn6zull3VcGzGMVDdjYItA.jpeg',
        company_description: 'الشوبنغ لعبتنا - Shopping is our thing',
        start_date: '2023-01-10 11:00:06',
        end_date: '2023-01-10 11:30:06',
        zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
      },
      {
        company_name: 'Basket باسكت',
        company_logo:
          'https://cdn2.hubspot.net/hub/145335/file-407359001-png/blog-files/pepsi.png',
        company_description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        start_date: '2023-01-10 11:00:06',
        end_date: '2023-01-10 11:30:06',
        zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
      },
    ],
  },
  { day: 26, sessions: [] },
  { day: 27, sessions: [] },
]

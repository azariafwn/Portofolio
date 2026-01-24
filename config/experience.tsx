import { Link } from '@chakra-ui/react'

export type Company = 'ZeroTech' | 'Bapenda' | 'Winnicode'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  ZeroTech: {
    name: 'Zero Tech',
    longName: 'Zero Tech Indonesia',
    subDetail: 'Smart IoT CMMS Platform',
    url: 'https://zerotech.id/', 
    position: 'QA Engineer',
    duration: 'Sep 2025 - Nov 2025',
    logo: {
      light: '/worked_at_logos/check_logo.png',
      dark: '/worked_at_logos/check_logo.png',
    },
    roles: [
      <>
        Executed manual end-to-end, functional, and UI/UX testing for Smart IoT CMMS platforms 
        to ensure high product quality standards.
      </>,
      <>
        Authored and managed comprehensive test documentation covering over 100+ test cases.
      </>,
      <>
        Conducted detailed bug reporting and collaborated with the engineering team to 
        validate technical fixes and system stability.
      </>,
    ],
  },
  Bapenda: {
    name: 'BAPENDA',
    longName: 'BAPENDA Kota Surabaya',
    subDetail: 'Government Agency',
    url: 'https://bapenda.surabaya.go.id/',
    position: 'Fullstack Developer Intern',
    duration: 'July 2025 - Aug 2025',
    logo: {
      light: '/worked_at_logos/bapenda_logo.png',
      dark: '/worked_at_logos/bapenda_logo.png',
    },
    roles: [
      <>
        Optimized system performance by 95.8% by implementing advanced query optimization 
        and server-side logic improvements using .NET Core.
      </>,
      <>
        Developed and maintained MonPD Reborn (tax management web applications), ensuring seamless 
        integration between the frontend and local government databases.
      </>,
      <>
        Collaborated with the IT department to modernize legacy features into a more 
        responsive and user-friendly interface.
      </>,
    ],
  },
  Winnicode: {
    name: 'Winnicode',
    longName: 'Winnicode Garuda Teknologi',
    subDetail: 'Software House',
    url: 'https://winnicode.com/',
    position: 'Fullstack Developer Intern',
    duration: 'May 2025 - Aug 2025',
    logo: {
      light: '/worked_at_logos/winnicode_logo.png',
      dark: '/worked_at_logos/winnicode_logo.png',
    },
    roles: [
      <>
        Engineered a full-stack news portal from UI/UX design to system implementation using ASP.NET Core MVC., focusing on 
        clean UI/UX and efficient state management.
      </>,
      <>
        Built a Role-Based Access Control (RBAC) system for Readers, Writers, and Editors using Entity Framework Core and MySQL. 
      </>,
      <>
        Participated in daily stand-ups and sprint planning to deliver high-quality 
        features within tight deadlines.
      </>,
      <>
        Managed cloud deployment to Microsoft Azure through automated CI/CD pipelines. 
      </>
    ],
  },
}

export const ExperiencesList = [
  Experiences.ZeroTech,
  Experiences.Bapenda,
  Experiences.Winnicode,
]
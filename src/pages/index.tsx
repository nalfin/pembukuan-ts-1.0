import React from 'react'
import { Calendar } from '@/components/ui/calendar'
import LoginPage from './auth/login'


export default function Home() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <LoginPage />
    )
}

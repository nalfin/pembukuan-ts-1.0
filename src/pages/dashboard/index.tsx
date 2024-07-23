/* eslint-disable react-hooks/exhaustive-deps */
import Header from "@/components/header"
import { Separator } from "@/components/ui/separator"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const DashboardPembukuan = () => {
    const { push } = useRouter()

    return (
        <>
            <Header />
            <Separator />
        </>
    )
}

export default DashboardPembukuan
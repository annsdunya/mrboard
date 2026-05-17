"use client"
import * as React from "react"

import { useOrganization } from "@clerk/nextjs"
import { EmptyOrg } from "@/app/(dashboard)/_components/empty-org"
import { BoardList } from "@/app/(dashboard)/_components/board-list"
import { useSearchParams } from "next/navigation"



const DashboardPage = () => {
  const { organization } = useOrganization()
  const searchParmas = useSearchParams()

  const search = searchParmas.get('search') || undefined
  const favorites = searchParmas.get('favorites') || undefined

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? <EmptyOrg /> :  <BoardList orgId={organization.id} query={{ search, favorites }} />}
    </div>
  )
}

export default DashboardPage
"use client"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useDebounceValue } from "usehooks-ts"
import qs from "query-string"

export const SearchInput = () => {
  const router = useRouter()
  const [debouncedValue, setValue] = useDebounceValue('', 500)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    const url = qs.stringifyUrl({
      url: "/",
      query: {
        search: debouncedValue
      }
    }, { skipEmptyString: true, skipNull : true }) 

    router.push(url)
  }, [debouncedValue, router])

  return (
    <div className="w-full relative">
      <div className="hidden lg:flex lg:flex-1">
        {/* top-1/2 moves the element down by 50% of its own height, while -translate-y-1/2 moves it up by 50% of its own height. When used together, they effectively center the element vertically within its container.
         */}
        <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input 
          className="w-full max-w-129 pl-9" 
          placeholder="Search boards"
          onChange={handleChange}
         />
      </div>
    </div>
  )
}
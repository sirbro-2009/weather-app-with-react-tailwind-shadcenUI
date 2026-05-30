import SelectBar from "@/components/components/header_components/selectBar"
import SearchBar from "@/components/components/header_components/searchBar"
import {LocateFixed  } from "lucide-react";
import SharProps from "@/components/components/Hooks/SharProps"
import { useContext } from "react"
import { useTranslation } from "react-i18next"
import { fetchLocal } from "@/function";

export function Header() {
  const {t} = useTranslation()
  const {setWetherProp,setShowAlert,setCoordinates} = useContext(SharProps)
  const handelFunction = ()=>{
                      fetchLocal(setShowAlert,setCoordinates,setWetherProp)
                      }
const style = "cursor-pointer duration-1000 transition-all text-white text-center text-sm mb-1 block"
const liStyle = "text-white text-center w-1/3 flex flex-col items-center justify-start  min-h-[120px]"


return (
  <ul className="w-full p-4 flex justify-between items-start   max-w-5xl mx-auto">
    
    <li className={liStyle}>
      <h1 className={style}>{t('language_label')}</h1>
      <SelectBar />
    </li>
    
    <li className={liStyle}>
      <h1 className={style}>{t('select_language')}</h1>
      <SearchBar />
    </li>
    
    <li className={liStyle}>
      <h1 className={style}>{t('theme')}</h1>
      <div className="pt-2 flex items-center justify-center">
        <LocateFixed 
          onClick={handelFunction}
          className="duration-500 transition-all hover:scale-125 cursor-pointer scale-110" 
        />
      </div>
    </li>

  </ul>
)

}
/**




 */
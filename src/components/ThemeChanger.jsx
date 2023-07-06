import { useEffect } from 'react'
import { themeChange } from "theme-change";
export default function ThemeChanger () {
  const themes = [ "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter", ]
  useEffect(() => {
    themeChange(false)
  }, [])
  return (
    <select data-choose-theme className='fixed py-2 px-4 z-20 top-2 right-2'>
      { themes.map((element) => {
        return  <option value={element}>{element}</option>
      })}
    </select>
  )
}

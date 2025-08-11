import { Menu } from "../Menu/Menu"
import { Filters } from "./Filters"
import { Options } from "./Options"

export function Sidebar() {
  return (
    <>
      <aside className="col-span-3 space-y-4">
        {/** Navegacion principal */}
        <div className="rounded-lg bg-spotimy-green p-4">
          <Menu />
        </div>

        <Options />

        <Filters />
      </aside>
    </>
  )
}

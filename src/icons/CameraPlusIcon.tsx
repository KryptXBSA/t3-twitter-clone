import * as React from "react"
import { SVGProps } from "react"

const CameraPlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="fill-white w-6 h-6"
    {...props}
  >
    <path d="M9.697 3H11v2h-.697l-3 2H5a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5V10h2v8.5A2.5 2.5 0 0 1 19 21H5a2.5 2.5 0 0 1-2.5-2.5v-11A2.5 2.5 0 0 1 5 5h1.697l3-2zM12 10.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 10.5zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0zM17 2a3 3 0 0 1-3 3v1a3 3 0 0 1 3 3h1a3 3 0 0 1 3-3V5a3 3 0 0 1-3-3h-1z" />
  </svg>
)

export default CameraPlusIcon

import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ProjetNav({width, height, fill}) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 19"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M9.328.046H.87v8.458h8.458V.046zM5.1 18.372a4.229 4.229 0 100-8.458 4.229 4.229 0 000 8.458zM19.196 9.914h-8.458v8.458h8.458V9.914zM14.967 8.504a4.229 4.229 0 100-8.458 4.229 4.229 0 000 8.458z"
        fill={fill}
        fillOpacity={0.6}
      />
    </Svg>
  )
}

export default ProjetNav

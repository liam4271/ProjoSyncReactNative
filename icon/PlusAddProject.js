import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PlusAddProject({width, height, fill})  {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 23 23"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <Path
        d="M10.506.94v10.355H.15v1.255h10.356v10.356h1.255V12.55h10.356v-1.255H11.761V.939h-1.255z"
        fill={fill}
      />
      <Path
        d="M11.761 11.545h10.106v.755H11.511v10.356h-.755V12.3H.4v-.755h10.356V1.189h.755v10.356h.25z"
        stroke="#1C1C1C"
        strokeOpacity={0.5}
        strokeWidth={0.5}
      />
    </Svg>
  )
}

export default PlusAddProject
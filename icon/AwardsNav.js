import * as React from "react"
import Svg, { Rect } from "react-native-svg"

function AwardsNav({width, height, fill}) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 17 20"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <Rect
        x={0.0932617}
        y={7.22412}
        width={2.54118}
        height={9.52942}
        rx={1.27059}
        fill={fill}
        fillOpacity={0.6}
      />
      <Rect
        x={14.0527}
        y={2.06287}
        width={2.54118}
        height={12.7059}
        rx={1.27059}
        fill={fill}
        fillOpacity={0.6}
      />
      <Rect
        x={4.74585}
        y={0.570557}
        width={2.54118}
        height={19.0588}
        rx={1.27059}
        fill={fill}
        fillOpacity={0.6}
      />
      <Rect
        x={9.39917}
        y={3.65112}
        width={2.54118}
        height={15.8824}
        rx={1.27059}
        fill={fill}
        fillOpacity={0.6}
      />
    </Svg>
  )
}

export default AwardsNav

import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ResearchIcon({width, height, fill}) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M7.45 2.093a4.11 4.11 0 00-5.806 0 4.11 4.11 0 000 5.807 4.108 4.108 0 005.648.143l3.643 3.644.303-.303L7.595 7.74a4.107 4.107 0 00-.144-5.647zm-.302 5.503a3.682 3.682 0 01-5.201 0 3.682 3.682 0 010-5.2 3.682 3.682 0 015.201 0 3.682 3.682 0 010 5.2z"
        fill={fill}
      />
    </Svg>
  )
}

export default ResearchIcon

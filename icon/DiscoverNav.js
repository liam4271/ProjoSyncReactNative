import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DiscoverNav({width, height, fill}) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 19 19"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    
    >
      <Path
        d="M9.554.304C4.5.304.392 4.413.392 9.467s4.108 9.162 9.162 9.162c5.054 0 9.163-4.108 9.163-9.162 0-5.054-4.108-9.163-9.163-9.163zm0 16.59c-4.09 0-7.426-3.319-7.426-7.427 0-4.11 3.337-7.427 7.426-7.427 4.09 0 7.427 3.337 7.427 7.427s-3.337 7.426-7.427 7.426z"
        fill={fill}
        fillOpacity={0.6}
      />
      <Path
        d="M12.525 5.32L7.799 7.21a.914.914 0 00-.502.501l-1.89 4.726c-.29.733.444 1.466 1.177 1.177l4.726-1.89a.914.914 0 00.501-.502l1.89-4.726c.29-.733-.443-1.466-1.176-1.177zm-2.97 5.246a1.099 1.099 0 111.099-1.1c0 .618-.482 1.1-1.1 1.1z"
        fill={fill}
        fillOpacity={0.6}
      />
    </Svg>
  )
}

export default DiscoverNav
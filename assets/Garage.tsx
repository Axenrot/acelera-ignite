import { useState } from "react"

interface GarageProps {
  fill?: string
  hoverColor?: string
  size?: number
}

const Garage = ({
  fill = "white",
  hoverColor = "#fe3838",
  size = 32,
}: GarageProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 32 32`}
      width={size}
      height={size}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      id="garage"
      style={{
        fill: isHovered ? hoverColor : fill,
        transition: "fill 200ms ease-in-out",
      }}
      // className={`fill-${fill} hover:fill-acered-hover`}
    >
      <path
        d="M29.42,8.09l-13-6a1,1,0,0,0-.84,0l-13,6A1,1,0,0,0,2,9V29a1,1,0,0,0,1,1H29a1,1,0,0,0,1-1V9A1,1,0,0,0,29.42,8.09ZM24,20H8V18H24ZM8,22H24v2H8Zm16-6H8V14H24ZM8,28V26H24v2Zm20,0H26V13a1,1,0,0,0-1-1H7a1,1,0,0,0-1,1V28H4V9.64L16,4.1,28,9.64Z"
        data-name="Layer 2"
      ></path>
    </svg>
  )
}

export default Garage

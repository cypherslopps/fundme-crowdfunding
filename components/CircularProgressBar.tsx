import { FC } from "react";

interface CircularProgressBarProps {
    size?: number;
    progress: number;
    trackWidth?: number;
    trackColor?: string;
    indicatorWidth?: number;
    indicatorColor?: string;
    indicatorCap?: string;
    spinnerMode?: boolean;
    spinnerSpeed?: number;
}

const CircularProgressBar: FC<CircularProgressBarProps> = ({
  size = 150,
  progress = 0,
  trackWidth = 10,
  trackColor = `#d1d5dbe6`,
  indicatorWidth = 10,
  indicatorColor = `#07c`,
  indicatorCap = `round`,
  spinnerMode = false,
  spinnerSpeed = 1
}) => {  
  const center = size / 2,
        radius = center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth),
        dashArray = 2 * Math.PI * radius,
        dashOffset = dashArray * ((100 - progress) / 100)

  return (
    <>
      <div
        className="svg-pi-wrapper text-white"
        style={{ width: size, height: size }}
      >
        <svg
          className="svg-pi" 
          style={{ width: size, height: size }}
        >
          <circle
            className="svg-pi-track"
            cx={center}
            cy={center}
            fill="transparent"
            r={radius}
            stroke={trackColor}
            strokeWidth={trackWidth}
          />
          <circle
            className={`svg-pi-indicator ${
              spinnerMode ? "svg-pi-indicator--spinner" : ""
            }`}
            style={{ animationDuration: `${spinnerSpeed * 1000}` }}
            cx={center}
            cy={center}
            fill="transparent"
            r={radius}
            stroke={indicatorColor}
            strokeWidth={indicatorWidth}
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset}
            strokeLinecap={indicatorCap as never}
          />
        </svg>

        <div 
          className="svg-pi-label flex flex-col items-center justify-center -space-y-1" 
        >
          {!spinnerMode && (
            <span className="svg-pi-label__progress font-extrabold" style={{ color: "#07c" }}>
              {`${
                progress > 100 ? 100 : progress
              }%`}
            </span>
          )}
        </div>
      </div>
    </>
  )
}

export default CircularProgressBar;
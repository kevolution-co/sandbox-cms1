"use client"

import React from "react"

import { cn } from "@/lib/utils"

export interface LoaderProps {
  className?: string
  size?: "lg" | "md" | "sm"
  text?: string
  variant?:
    | "bars"
    | "circular"
    | "classic"
    | "dots"
    | "loading-dots"
    | "pulse"
    | "pulse-dot"
    | "terminal"
    | "text-blink"
    | "text-shimmer"
    | "typing"
    | "wave"
}

export function BarsLoader({
  className,
  size = "md",
}: {
  className?: string
  size?: "lg" | "md" | "sm"
}) {
  const barWidths = {
    lg: "w-2",
    md: "w-1.5",
    sm: "w-1",
  }

  const containerSizes = {
    lg: "h-6 gap-2",
    md: "h-5 gap-1.5",
    sm: "h-4 gap-1",
  }

  return (
    <div className={cn("flex", containerSizes[size], className)}>
      {[...Array(3)].map((_, i) => (
        <div
          className={cn(
            "bg-primary h-full animate-[wave-bars_1.2s_ease-in-out_infinite]",
            barWidths[size]
          )}
          key={i}
          style={{
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
      <span className="sr-only">Loading</span>
    </div>
  )
}

export function CircularLoader({
  className,
  size = "md",
}: {
  className?: string
  size?: "lg" | "md" | "sm"
}) {
  const sizeClasses = {
    lg: "size-6",
    md: "size-5",
    sm: "size-4",
  }

  return (
    <div
      className={cn(
        "border-primary animate-spin rounded-full border-2 border-t-transparent",
        sizeClasses[size],
        className
      )}
    >
      <span className="sr-only">Loading</span>
    </div>
  )
}

export function ClassicLoader({
  className,
  size = "md",
}: {
  className?: string
  size?: "lg" | "md" | "sm"
}) {
  const sizeClasses = {
    lg: "size-6",
    md: "size-5",
    sm: "size-4",
  }

  const barSizes = {
    lg: { height: "10px", width: "2.5px" },
    md: { height: "8px", width: "2px" },
    sm: { height: "6px", width: "1.5px" },
  }

  return (
    <div className={cn("relative", sizeClasses[size], className)}>
      <div className="absolute h-full w-full">
        {[...Array(12)].map((_, i) => (
          <div
            className="bg-primary absolute animate-[spinner-fade_1.2s_linear_infinite] rounded-full"
            key={i}
            style={{
              animationDelay: `${i * 0.1}s`,
              height: barSizes[size].height,
              left: "50%",
              marginLeft:
                size === "sm" ? "-0.75px" : size === "lg" ? "-1.25px" : "-1px",
              opacity: 0,
              top: "0",
              transform: `rotate(${i * 30}deg)`,
              transformOrigin: `${size === "sm" ? "0.75px" : size === "lg" ? "1.25px" : "1px"} ${size === "sm" ? "10px" : size === "lg" ? "14px" : "12px"}`,
              width: barSizes[size].width,
            }}
          />
        ))}
      </div>
      <span className="sr-only">Loading</span>
    </div>
  )
}

export function DotsLoader({
  className,
  size = "md",
}: {
  className?: string
  size?: "lg" | "md" | "sm"
}) {
  const dotSizes = {
    lg: "h-2.5 w-2.5",
    md: "h-2 w-2",
    sm: "h-1.5 w-1.5",
  }

  const containerSizes = {
    lg: "h-6",
    md: "h-5",
    sm: "h-4",
  }

  return (
    <div
      className={cn(
        "flex items-center space-x-1",
        containerSizes[size],
        className
      )}
    >
      {[...Array(3)].map((_, i) => (
        <div
          className={cn(
            "bg-primary animate-[bounce-dots_1.4s_ease-in-out_infinite] rounded-full",
            dotSizes[size]
          )}
          key={i}
          style={{
            animationDelay: `${i * 160}ms`,
          }}
        />
      ))}
      <span className="sr-only">Loading</span>
    </div>
  )
}

export function PulseDotLoader({
  className,
  size = "md",
}: {
  className?: string
  size?: "lg" | "md" | "sm"
}) {
  const sizeClasses = {
    lg: "size-3",
    md: "size-2",
    sm: "size-1",
  }

  return (
    <div
      className={cn(
        "bg-primary animate-[pulse-dot_1.2s_ease-in-out_infinite] rounded-full",
        sizeClasses[size],
        className
      )}
    >
      <span className="sr-only">Loading</span>
    </div>
  )
}

export function PulseLoader({
  className,
  size = "md",
}: {
  className?: string
  size?: "lg" | "md" | "sm"
}) {
  const sizeClasses = {
    lg: "size-6",
    md: "size-5",
    sm: "size-4",
  }

  return (
    <div className={cn("relative", sizeClasses[size], className)}>
      <div className="border-primary absolute inset-0 animate-[thin-pulse_1.5s_ease-in-out_infinite] rounded-full border-2" />
      <span className="sr-only">Loading</span>
    </div>
  )
}

export function TerminalLoader({
  className,
  size = "md",
}: {
  className?: string
  size?: "lg" | "md" | "sm"
}) {
  const cursorSizes = {
    lg: "h-5 w-2.5",
    md: "h-4 w-2",
    sm: "h-3 w-1.5",
  }

  const textSizes = {
    lg: "text-base",
    md: "text-sm",
    sm: "text-xs",
  }

  const containerSizes = {
    lg: "h-6",
    md: "h-5",
    sm: "h-4",
  }

  return (
    <div
      className={cn(
        "flex items-center space-x-1",
        containerSizes[size],
        className
      )}
    >
      <span className={cn("text-primary font-mono", textSizes[size])}>
        {">"}
      </span>
      <div
        className={cn(
          "bg-primary animate-[blink_1s_step-end_infinite]",
          cursorSizes[size]
        )}
      />
      <span className="sr-only">Loading</span>
    </div>
  )
}

export function TextBlinkLoader({
  className,
  size = "md",
  text = "Thinking",
}: {
  className?: string
  size?: "lg" | "md" | "sm"
  text?: string
}) {
  const textSizes = {
    lg: "text-base",
    md: "text-sm",
    sm: "text-xs",
  }

  return (
    <div
      className={cn(
        "animate-[text-blink_2s_ease-in-out_infinite] font-medium",
        textSizes[size],
        className
      )}
    >
      {text}
    </div>
  )
}

export function TextDotsLoader({
  className,
  size = "md",
  text = "Thinking",
}: {
  className?: string
  size?: "lg" | "md" | "sm"
  text?: string
}) {
  const textSizes = {
    lg: "text-base",
    md: "text-sm",
    sm: "text-xs",
  }

  return (
    <div
      className={cn("inline-flex items-center", className)}
    >
      <span className={cn("text-primary font-medium", textSizes[size])}>
        {text}
      </span>
      <span className="inline-flex">
        <span className="text-primary animate-[loading-dots_1.4s_infinite_0.2s]">
          .
        </span>
        <span className="text-primary animate-[loading-dots_1.4s_infinite_0.4s]">
          .
        </span>
        <span className="text-primary animate-[loading-dots_1.4s_infinite_0.6s]">
          .
        </span>
      </span>
    </div>
  )
}

export function TextShimmerLoader({
  className,
  size = "md",
  text = "Thinking",
}: {
  className?: string
  size?: "lg" | "md" | "sm"
  text?: string
}) {
  const textSizes = {
    lg: "text-base",
    md: "text-sm",
    sm: "text-xs",
  }

  return (
    <div
      className={cn(
        "bg-[linear-gradient(to_right,var(--muted-foreground)_40%,var(--foreground)_60%,var(--muted-foreground)_80%)]",
        "bg-size-[200%_auto] bg-clip-text font-medium text-transparent",
        "animate-[shimmer_4s_infinite_linear]",
        textSizes[size],
        className
      )}
    >
      {text}
    </div>
  )
}

export function TypingLoader({
  className,
  size = "md",
}: {
  className?: string
  size?: "lg" | "md" | "sm"
}) {
  const dotSizes = {
    lg: "h-2 w-2",
    md: "h-1.5 w-1.5",
    sm: "h-1 w-1",
  }

  const containerSizes = {
    lg: "h-6",
    md: "h-5",
    sm: "h-4",
  }

  return (
    <div
      className={cn(
        "flex items-center space-x-1",
        containerSizes[size],
        className
      )}
    >
      {[...Array(3)].map((_, i) => (
        <div
          className={cn(
            "bg-primary animate-[typing_1s_infinite] rounded-full",
            dotSizes[size]
          )}
          key={i}
          style={{
            animationDelay: `${i * 250}ms`,
          }}
        />
      ))}
      <span className="sr-only">Loading</span>
    </div>
  )
}

export function WaveLoader({
  className,
  size = "md",
}: {
  className?: string
  size?: "lg" | "md" | "sm"
}) {
  const barWidths = {
    lg: "w-1",
    md: "w-0.5",
    sm: "w-0.5",
  }

  const containerSizes = {
    lg: "h-6",
    md: "h-5",
    sm: "h-4",
  }

  const heights = {
    lg: ["10px", "15px", "20px", "15px", "10px"],
    md: ["8px", "12px", "16px", "12px", "8px"],
    sm: ["6px", "9px", "12px", "9px", "6px"],
  }

  return (
    <div
      className={cn(
        "flex items-center gap-0.5",
        containerSizes[size],
        className
      )}
    >
      {[...Array(5)].map((_, i) => (
        <div
          className={cn(
            "bg-primary animate-[wave_1s_ease-in-out_infinite] rounded-full",
            barWidths[size]
          )}
          key={i}
          style={{
            animationDelay: `${i * 100}ms`,
            height: heights[size][i],
          }}
        />
      ))}
      <span className="sr-only">Loading</span>
    </div>
  )
}

function Loader({
  className,
  size = "md",
  text,
  variant = "circular",
}: LoaderProps) {
  switch (variant) {
    case "bars":
      return <BarsLoader className={className} size={size} />
    case "circular":
      return <CircularLoader className={className} size={size} />
    case "classic":
      return <ClassicLoader className={className} size={size} />
    case "dots":
      return <DotsLoader className={className} size={size} />
    case "loading-dots":
      return <TextDotsLoader className={className} size={size} text={text} />
    case "pulse":
      return <PulseLoader className={className} size={size} />
    case "pulse-dot":
      return <PulseDotLoader className={className} size={size} />
    case "terminal":
      return <TerminalLoader className={className} size={size} />
    case "text-blink":
      return <TextBlinkLoader className={className} size={size} text={text} />
    case "text-shimmer":
      return <TextShimmerLoader className={className} size={size} text={text} />
    case "typing":
      return <TypingLoader className={className} size={size} />
    case "wave":
      return <WaveLoader className={className} size={size} />
    default:
      return <CircularLoader className={className} size={size} />
  }
}

export { Loader }

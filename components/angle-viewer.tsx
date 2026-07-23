'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export type AngleFrame = {
  src: string
  alt: string
}

type AngleViewerProps = {
  frames: AngleFrame[]
  className?: string
  glow?: string
  sizes?: string
}

const DRAG_STEP_PX = 70
const MAX_TILT = 8

export function AngleViewer({
  frames,
  className,
  glow = 'var(--color-primary)',
  sizes = '(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw',
}: AngleViewerProps) {
  const startX = useRef(0)
  const startIndex = useRef(0)
  const [index, setIndex] = useState(Math.floor((frames.length - 1) / 2))
  const [dragging, setDragging] = useState(false)
  const [tilt, setTilt] = useState(0)

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    setDragging(true)
    startX.current = e.clientX
    startIndex.current = index
    e.currentTarget.setPointerCapture?.(e.pointerId)
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!dragging) return
    const dx = e.clientX - startX.current
    setTilt(Math.max(-MAX_TILT, Math.min(MAX_TILT, dx / 8)))
    const stepsMoved = Math.round(dx / DRAG_STEP_PX)
    const next = Math.min(
      frames.length - 1,
      Math.max(0, startIndex.current + stepsMoved),
    )
    setIndex((prev) => (prev !== next ? next : prev))
  }

  function handlePointerUp() {
    setDragging(false)
    setTilt(0)
  }

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className={cn(
        'group/angle relative h-full w-full touch-none select-none',
        className,
      )}
      style={{ perspective: 900 }}
    >
      <div
        className="relative h-full w-full"
        style={{
          transform: `rotateY(${tilt}deg) scale(${dragging ? 1.04 : 1})`,
          transition: dragging
            ? 'transform 0.05s linear'
            : 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
          cursor: dragging
            ? "url('/cursor-claw-active.svg') 16 3, grabbing"
            : "url('/cursor-claw.svg') 16 3, grab",
        }}
      >
        {frames.map((frame, i) => (
          <Image
            key={frame.src}
            src={frame.src}
            alt={frame.alt}
            fill
            sizes={sizes}
            draggable={false}
            className="object-cover transition-opacity duration-150 ease-out"
            style={{ opacity: i === index ? 1 : 0 }}
          />
        ))}

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/angle:opacity-100"
          style={{
            background: `linear-gradient(115deg, transparent 30%, color-mix(in oklch, ${glow} 30%, transparent) 50%, transparent 70%)`,
          }}
        />

        <span className="pointer-events-none absolute bottom-2 right-2 rounded-full bg-background/80 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-foreground opacity-0 backdrop-blur transition-opacity duration-300 group-hover/angle:opacity-100">
          Drag to rotate
        </span>

        <div className="pointer-events-none absolute bottom-2 left-2 flex gap-1">
          {frames.map((frame, i) => (
            <span
              key={frame.src}
              className="h-1.5 w-1.5 rounded-full transition-colors duration-200"
              style={{
                backgroundColor:
                  i === index ? glow : 'color-mix(in oklch, white 35%, transparent)',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

type TiltViewerProps = {
  src: string
  alt: string
  className?: string
  glow?: string
  sizes?: string
}

const MAX_TILT = 14

export function TiltViewer({
  src,
  alt,
  className,
  glow = 'var(--color-primary)',
  sizes = '(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw',
}: TiltViewerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)

  function updateFromPoint(clientX: number, clientY: number, active: boolean) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (clientX - rect.left) / rect.width
    const py = (clientY - rect.top) / rect.height
    const intensity = active ? 1 : 0.5
    const y = (px - 0.5) * 2 * MAX_TILT * intensity
    const x = (0.5 - py) * 2 * MAX_TILT * intensity
    setRotate({ x, y })
  }

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    setDragging(true)
    e.currentTarget.setPointerCapture?.(e.pointerId)
    updateFromPoint(e.clientX, e.clientY, true)
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    updateFromPoint(e.clientX, e.clientY, dragging)
  }

  function handlePointerUp() {
    setDragging(false)
    setRotate({ x: 0, y: 0 })
  }

  return (
    <div
      ref={ref}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className={cn(
        'group/tilt relative h-full w-full touch-none select-none',
        className,
      )}
      style={{ perspective: 900 }}
    >
      <div
        className="relative h-full w-full"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(${dragging ? 1.05 : 1})`,
          transition: dragging
            ? 'transform 0.05s linear'
            : 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
          transformStyle: 'preserve-3d',
          cursor: dragging
            ? "url('/cursor-claw-active.svg') 16 3, grabbing"
            : "url('/cursor-claw.svg') 16 3, grab",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          draggable={false}
          className="object-cover"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/tilt:opacity-100"
          style={{
            background: `linear-gradient(${115 + rotate.y * 2}deg, transparent 30%, color-mix(in oklch, ${glow} 35%, transparent) 50%, transparent 70%)`,
          }}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-2 right-2 rounded-full bg-background/80 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-foreground opacity-0 backdrop-blur transition-opacity duration-300 group-hover/tilt:opacity-100"
        >
          Drag to tilt
        </span>
      </div>
    </div>
  )
}

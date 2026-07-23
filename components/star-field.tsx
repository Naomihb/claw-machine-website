// A restrained night-sky field: mostly soft white and cool cyan points,
// with only one or two stars carrying a faint brand tint. Twinkling is
// slow and randomized (8-15s) so it reads as ambient rather than animated.
const stars = [
  { top: '8%', left: '12%', size: 2, color: '#f8fafc', opacity: 0.55, duration: 11 },
  { top: '18%', left: '84%', size: 1.6, color: '#e0f2fe', opacity: 0.45, duration: 13 },
  { top: '32%', left: '6%', size: 2.2, color: '#f8fafc', opacity: 0.5, duration: 9.5 },
  { top: '46%', left: '93%', size: 1.6, color: '#a5f3fc', opacity: 0.4, duration: 14 },
  { top: '64%', left: '18%', size: 2, color: '#e0f2fe', opacity: 0.45, duration: 12 },
  { top: '76%', left: '72%', size: 1.6, color: '#f8fafc', opacity: 0.4, duration: 10 },
  { top: '90%', left: '42%', size: 2, color: '#a5f3fc', opacity: 0.4, duration: 15 },
  { top: '5%', left: '55%', size: 1.6, color: '#f8fafc', opacity: 0.4, duration: 8.5 },
  { top: '54%', left: '48%', size: 1.4, color: '#e0f2fe', opacity: 0.35, duration: 13.5 },
  { top: '96%', left: '86%', size: 1.8, color: '#f8fafc', opacity: 0.4, duration: 11.5 },
  // A single subtle brand-tinted star per field, per the "rare accent" rule.
  { top: '40%', left: '78%', size: 1.8, color: '#7dd3fc', opacity: 0.4, duration: 12.5 },
]

export function StarField() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {stars.map((star, i) => (
        <span
          key={i}
          className="twinkle absolute rounded-full"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            backgroundColor: star.color,
            boxShadow: `0 0 ${star.size * 3}px ${star.color}`,
            ['--twinkle-min' as string]: 0.15,
            ['--twinkle-max' as string]: star.opacity,
            animationDuration: `${star.duration}s`,
            animationDelay: `${(i * 0.7) % star.duration}s`,
          }}
        />
      ))}
    </div>
  )
}

export function Stop() {
  return <div style={{ minWidth: 22, minHeight: 22, borderRadius: 4, background: '#fff5ee' }} />
}

export function Play() {
  return (
    <svg fill="none" height={24} width={21} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.288 9.45c2.026 1.096 2.026 4.004 0 5.1L4.28 22.673C2.348 23.72 0 22.32 0 20.123V3.877C0 1.68 2.348.28 4.28 1.327L19.288 9.45Z"
        fill="#FFF5EE"
      />
    </svg>
  )
}

export function Pause() {
  return (
    <svg fill="none" height={22} width={20} xmlns="http://www.w3.org/2000/svg">
      <path d="M17 3v16M3 3v16" stroke="#FFF5EE" strokeLinecap="round" strokeWidth={6} />
    </svg>
  )
}

export function Next() {
  return (
    <svg fill="none" height={26} width={22} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.308 10.858c1.635.968 1.635 3.335 0 4.303L3.774 23.766C2.107 24.752 0 23.55 0 21.615V4.404c0-1.937 2.107-3.138 3.774-2.152l14.534 8.605Z"
        fill="#773f29"
      />
      <path d="M20 4v18" stroke="#773f29" strokeLinecap="round" strokeWidth={4} />
    </svg>
  )
}

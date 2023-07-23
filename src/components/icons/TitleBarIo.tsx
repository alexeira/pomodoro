export function Config() {
  return (
    <svg fill="none" height={24} width={24} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.621 5.678c.351-1.445 2.407-1.445 2.758 0a1.419 1.419 0 0 0 2.116.877c1.27-.774 2.724.68 1.95 1.95-.5.82-.057 1.89.877 2.116 1.445.351 1.445 2.407 0 2.758a1.419 1.419 0 0 0-.877 2.116c.774 1.27-.68 2.724-1.95 1.95-.82-.5-1.89-.057-2.116.877-.351 1.445-2.407 1.445-2.758 0a1.419 1.419 0 0 0-2.116-.877c-1.27.774-2.724-.68-1.95-1.95.5-.82.057-1.89-.877-2.116-1.445-.351-1.445-2.407 0-2.758a1.419 1.419 0 0 0 .877-2.116c-.774-1.27.68-2.724 1.95-1.95.82.5 1.89.057 2.116-.877Z"
        fill="#572D1C"
      />
      <circle cx={12} cy={12} fill="#FFF5EE" r={2} />
    </svg>
  )
}

export function Min() {
  return (
    <svg fill="none" height={2} width={13} xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1h11" stroke="#572D1C" strokeLinecap="round" strokeWidth={2} />
    </svg>
  )
}

export function Exit() {
  return (
    <svg fill="none" height={12} width={13} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 1 1 11M1 1l11 10" stroke="#572D1C" strokeLinecap="round" strokeWidth={2} />
    </svg>
  )
}

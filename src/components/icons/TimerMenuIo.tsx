export function Stop() {
  return (
    <svg fill="none" height={50} width={50} xmlns="http://www.w3.org/2000/svg">
      <circle cx={25} cy={25} fill="#572D1C" r={25} />
      <rect fill="#FFF5EE" height={22} rx={4} width={22} x={14} y={14} />
    </svg>
  )
}

export function Play() {
  return (
    <svg fill="none" height={50} width={49} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx={24.621} cy={25} fill="#572D1C" rx={24.379} ry={25} />
      <path
        className="play"
        d="M35.615 22.849c1.635.968 1.635 3.334 0 4.302l-14.534 8.605c-1.666.987-3.774-.214-3.774-2.151v-17.21c0-1.937 2.108-3.138 3.774-2.151l14.534 8.605Z"
        fill="#FFF5EE"
      />
    </svg>
  )
}

export function Pause() {
  return (
    <svg fill="none" height={50} width={49} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx={24.379} cy={25} fill="#572D1C" rx={24.379} ry={25} />
      <path d="M16 15v19M32 15v19" stroke="#FFF5EE" strokeLinecap="round" strokeWidth={8} />
    </svg>
  )
}

export function Next() {
  return (
    <svg fill="none" height={26} width={22} xmlns="http://www.w3.org/2000/svg">
      <path
        className="next"
        d="M18.308 10.858c1.635.968 1.635 3.335 0 4.303L3.774 23.766C2.107 24.752 0 23.55 0 21.615V4.404c0-1.937 2.107-3.138 3.774-2.152l14.534 8.605Z"
        fill="#773f29"
      />
      <path className="next" d="M20 4v18" stroke="#773f29" strokeLinecap="round" strokeWidth={4} />
    </svg>
  )
}

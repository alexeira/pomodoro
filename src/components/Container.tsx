type Props = {
  children?: any
}

export function Container({ children }: Props) {
  return <main className="container">{children}</main>
}

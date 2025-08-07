import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/assist')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/assist"!</div>
}

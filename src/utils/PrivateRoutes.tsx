import { Navigate } from 'react-router-dom'

function Private({ children }: { children: React.ReactElement }) {
  const user = localStorage.getItem('userInfo')
  const userInfo = JSON.parse(`${user}`)

  if (!userInfo) {
    return <Navigate to="/" replace />
  }
  return children
}
export default Private
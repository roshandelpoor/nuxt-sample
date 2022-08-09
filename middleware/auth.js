export default function ({ route, redirect }) {
  const token = localStorage.getItem('jwtRefreshKey')

  if (route.fullPath !== '/users' && !token) {
    return redirect('/users')
  } else if (route.fullPath === '/users' && !!token) {
    return redirect('/')
  }
}

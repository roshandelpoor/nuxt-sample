export default function ({ route, redirect }) {
  const token = localStorage.getItem('Nuxt_jwtToken')

  if (route.fullPath !== '/login' && !token) {
    return redirect('/login')
  } else if (route.fullPath === '/login' && !!token) {
    return redirect('/')
  }
}

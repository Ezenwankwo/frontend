export default function ({ app, redirect }) {
  const userId = app.$cookies.get('userId')
  // If the user is not authenticated
  if (!userId) {
    return redirect('/login')
  }
}

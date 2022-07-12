export default function ({ store, redirect, route }) {
  // you cannot access verify page if you have not signed up.
  if (!store.state.auth.user.email) {
    return redirect(route.from)
  }
}

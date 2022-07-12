export default function ({ store, redirect }) {
  // you cannot access profile page if you have not been verified.
  if (!store.state.auth.user.verify) {
    return redirect('/verify')
  }
}

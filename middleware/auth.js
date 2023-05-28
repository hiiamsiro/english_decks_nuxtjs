export default function (context) {
  if (context.store.getters.isAuthenticated == null) context.redirect('/login')
}

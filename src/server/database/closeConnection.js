export default function closeConnection(db) {
  if (typeof db.destroy === 'function') {
    db.destroy()
  }
}

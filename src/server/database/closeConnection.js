export default function closeConnection(db) {
  if (db.open && typeof db.close === 'function') {
    db.close()
  }
}

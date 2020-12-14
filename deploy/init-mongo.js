db.createUser(
  {
    user : "juan",
    pwd : "juan",
    roles : [
      {
        role : "readWrite",
        db : "nsqli"
      }
    ]
  }
)

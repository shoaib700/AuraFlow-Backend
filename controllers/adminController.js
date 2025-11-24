export function adminVerify(req, res) {
  const { username, password } = req.body;

  if (
    username === process.env.ADMIN_USER &&
    password === process.env.ADMIN_PASS
  ) {
    return res.json({ message: "Admin verified" });
  }

  return res.status(401).json({ message: "Invalid admin credentials" });
}

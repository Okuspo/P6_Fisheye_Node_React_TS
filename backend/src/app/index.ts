import Express from 'express'

const app = Express()
const port = 3001
app.listen(port, () => console.log(`⚡️[server]: Server is running at https://localhost:${port}`))

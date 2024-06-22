// server.js
const app = require("./app.js");

const PORT = process.env.PORT || 2025;

app.listen(PORT, () => {
    console.log(`Running At http://localhost:${PORT}`);
});

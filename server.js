const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// GET API
app.get("/api/:pathParam", (req, res) => {
  const pathParam = req.params.pathParam;
  const queryParam = req.query.queryParam;

  // Return both values as JSON
  res.json({
    status: "success",
    message: "Data retrieved successfully",
    data: {
      pathParam: pathParam,
      queryParam: queryParam,
    },
  });
});

// POST API
app.post("/api/data", (req, res) => {
  const jsonData = req.body;
  // Return the data as an array
  res.json({
    status: "success",
    message: "Data received successfully",
    data: [jsonData],
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

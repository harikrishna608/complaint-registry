const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: { origin: '*' }
});

io.on('connection', (socket) => {
  console.log('User connected');
});

app.set('io', io); // Attach to app so controllers can use it

http.listen(PORT, () => console.log(`Server running on port http://localhost:3000`));
const adminRoutes = require('/routes/adminRoutes');
app.use('/api/admin', adminRoutes);
const express = require('express');
const errorHandler = require('/middleware/errorHandler');

// ... your middleware & routes
app.use('/api/auth', require('/routes/authRoutes'));
app.use('/api/complaints', require('/routes/complaintRoutes'));
app.use('/api/admin', require('/routes/adminRoutes'));

// Place this at the end after all routes
app.use(errorHandler);

module.exports = app;


// Database connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/beopardyUsers', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
// Checks connection
mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');
});
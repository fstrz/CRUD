module.exports = {
    port: process.env.PORT || 3000,
    db: process.env.MONGODB || 'mongodb+srv://fstrz:1234@cluster0.yv7u7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',

    urlParser : {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }
}
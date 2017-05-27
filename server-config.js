module.exports = {
    PORT: 8080,            //Server Port
    PUBLIC: '/client/',    //Public Folder
    HOMEFILE: 'index.html', //Default File to load
    //APP SETTINGS
    MONGO_URI: process.env.MONGO_URI || 'localhost',
    TOKEN_SECRET: process.env.TOKEN_SECRET || '381',
    GOOGLE_SECRET: process.env.GOOGLE_SECRET || 'KasN5r9fA37WAPJbxiZ1U2pi'
};

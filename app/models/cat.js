var mongoose = require('mongoose');

module.exports = mongoose.model('Cat', {
    name : {type: String, default: ''}
});

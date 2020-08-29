import moment from "moment";

module.exports = {
    dateOf: function(d) {
      return moment(d, 'MM/DD/YYYY');
    },

    toFormat: function(d) {
        return module.exports.dateOf(d).format('MMM d YYYY');
    },

    isBefore: function(d) {
        return module.exports.dateOf(d).isBefore(moment());
    },

    isAfter: function(d) {
        return module.exports.dateOf(d).isAfter(moment());
    }
};

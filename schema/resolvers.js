const { userList } = require('../fakeData')
const _ = require('lodash')

const resolvers = {
  Query: {
    users: () => {
    return userList;
    },
    user: (parent, args) => {
     const id =  parseInt(args.id);
     const user = _.find(userList, {id});
     return user
    }
  },
};

module.exports = {resolvers};
const { userList } = require('../fakeData')
const { services } = require('../services')
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
    },
    services: () => {
      return services;
    },
    service: (parent, args) => {
      const id = args.id;
      const service = _.find(services, { id: Number(id) });
      return service;
    },
    available: (parent, args) => {
      const isAvailable = args.isAvailable;
      const service = _.filter(services, { isAvailable });
      return service;
    }
  },
  User: {
    favService: () => {
      return _.filter(services, (service) => service.price < 1000 && service.price > 500)
    }
  },

  Mutation: {
    createUser: (parent, args) => {
      const newUser = args.input;
      const lastId = userList[userList.length - 1].id;
      newUser.id = lastId + 1
      userList.push(newUser);
      return newUser;
    },

    createService: (parent, args) => {
      const service = args.input;
      const lastId = services[services.length - 1].id;
      service.id = lastId + 1
      services.push(service)
      return service
    }

  }

};

module.exports = {resolvers};
'use strict';

var Handlebars = require('hbsfy/runtime');


var getPermissions = require('../templates/getPermissions.handlebars')
var getUsers = require('../templates/getUsers.handlebars')
var getName = require('../templates/getName.handlebars')



module.exports = {
  getPermissions: getPermissions,
  getUsers: getUsers,
  getName: getName

}

  
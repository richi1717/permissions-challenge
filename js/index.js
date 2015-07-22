'use strict';

var $ = require('jquery')
var tmpl = require('./template.js')


$(function () {
  var usersUrl = 'http://localhost:3000/users/'


  function getUsers() {
    return $.get(usersUrl)
  }
  function permissionsByUser(id) {
    return $.get(usersUrl + id +'/permissions')
  }
  var users = getUsers()
  
  $('main').on('click', 'button', function (event) {
    event.preventDefault()
    $('ul').remove()

    users.done(function (usersData) {
    usersData.forEach(function (user) {

      $('main').append(renderUser(user))  
    })
  })
  }) 

  $('main').on('click', 'a', function(event) {
    event.preventDefault()
    $('ul').remove()

    users.done(function (usersData) {
    usersData.forEach(function (user) {

      permissionsByUser(user.id)
        .done(function (permission) {

          permission.forEach(function (permission) {

            $('main').append(renderPermissions(user, permission))
          })
        })

    
      })
    })
  })  


  function renderPermissions(user, permission) {
    var html = tmpl.getName({
        name: user.name,
        userId: user.id,
        permissions: tmpl.getPermissions({
          permissions: permission.permissions
        })

    })
    console.log(html)
    return html
  }

  function renderUser(user) {
    var html = tmpl.getUsers({
          id: user.id,
          name: user.name
        
        })
    return html
  }

  function renderName(user) {
    var html = tmpl.getName({
      id: user.id,
      name: user.name
    })
    return html
  }


  // .remove will take away dom

});
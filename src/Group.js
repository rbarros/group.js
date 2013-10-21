/*
 * Group
 * https://github.com/ramon/group.js
 *
 * Copyright (c) 2013 Ramon Barros
 * Licensed under the MIT license.
 */

(function (window) {
  'use strict';
  var Group = function(group) {
    this.version = '1.0';
    this.groups = [];

    if (typeof group === 'undefined') {
      return this;
    }

    this.string = group.toString();
    this.setGroup(this.string);
    return this.groups;
  };

  Group.prototype.setGroup = function(string) {
    var i, group, caracter;
    for (i = 0; string.length > i; i += 1) {
      caracter = string[i];
      if (typeof caracter !== 'undefined') {
        group = this.arrHasDupes(caracter);
        if (group === false) {
          this.groups.push({ caracter: caracter, group: caracter });
        } else {
          this.groups = group;
        }
      }
    }
  };

  Group.prototype.arrHasDupes = function (caracter) {
      var i;
      for (i = 0; this.groups.length > i; i += 1) {
          if (this.groups[i].caracter === caracter) {
            this.groups[i].group += caracter;
            return this.groups;
          }
      }
      return false;
  };

  window.Group = Group;

}(window));

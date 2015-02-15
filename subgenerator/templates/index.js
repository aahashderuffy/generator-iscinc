'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.log('You called the <%= generatorName %> subgenerator with the argument ' + this.name + '.');

    this.argument('MEDIAWIKI', {
      required: true,
      type: String,
      desc: 'The subgenerator MediaWiki'
    });
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('somefile.js'),
      this.destinationPath('somefile.js')
    );
  }
});

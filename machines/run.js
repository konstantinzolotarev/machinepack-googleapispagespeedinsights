'use strict';

var _ = require('lodash');
var google = require('googleapis');

module.exports = {


  friendlyName: 'Run',


  description: 'Run PageSpeed analizer',


  cacheable: true,


  sync: false,


  idempotent: false,


  inputs: {
    key: {
      example: 'YOUR_API_KEY',
      description: 'Your API key'
    },

    url: {
      example: 'http://google.com',
      description: 'URL of the resource you need to analize',
      required: true
    },

    filterThirdPartyResources: {
      example: true,
      description: 'Indicates if third party resources should be filtered out before PageSpeed analysis'
    },

    locale: {
      example: 'en',
      description: 'The locale used to localize formatted results'
    },

    screenshot: {
      example: true,
      description: 'Indicates if binary data containing a screenshot should be included'
    },

    rule: {
      example: 'test',
      description: 'A PageSpeed rule to run; if none are given, all rules are run'
    },

    fields: {
      example: 'formattedResults,id,invalidRules,kind,pageStats,responseCode,ruleGroups,screenshot,title,version/major,version/minor',
      description: 'Selector specifying which fields to include in a partial response'
    },

    key: {
      example: 'YOUR_API_KEY',
      description: 'Your API Key'
    }
  },


  exits: {

    success: {
      variableName: 'result',
      description: 'Done.',
    }

  },


  fn: function(inputs, exits) {
    var params = {};
    _.merge(params, inputs);
    return exits.success();
  }

};

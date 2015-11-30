require.config({
  shim: {
    bootstrap: {
      deps: ['jquery'],
      exports: 'jquery'
    },
  },
  paths: {
    jquery: '../jquery/dist/jquery',
    jqueryui: '../jquery-ui/jquery-ui',
    jquerycookie: '../jquery-cookie/jquery.cookie',
    backbone: '../backbone/backbone',
    underscore: '../underscore/underscore',
    bootstrap: '../bootstrap/dist/js/bootstrap',
    router: './routers/qbdb',
    text: '../requirejs-text/text'
  }
});

require([
  'backbone',
  'jquery',
  'underscore',
  'router',
  'jquerycookie'
], function(Backbone, $, _, Router) {
  $(function() {

    // set up the custom header for csrf tokens
    var csrf = $.cookie('csrftoken')
    $.ajaxSetup({
      headers: {
        "X-CSRFToken": csrf
      }
    });

    var router = new Router;

  })
})

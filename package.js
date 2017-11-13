Package.describe({
  name: 'ipstas:autoform-tags',
  summary: 'Tags input for aldeed:autoform, forked from https://github.com/yogiben/meteor-autoform-tags, updated to autoform > 6.0',
  version: '0.2.1',
  git: 'https://github.com/ipstas/meteor-autoform-tags'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');

  api.use([
    'templating',
    'coffeescript',
    'reactive-var',
    'aldeed:autoform',
    'ajduke:bootstrap-tagsinput'
  ], 'client');

  api.addFiles([
    'lib/client/autoform-tags.html',
    'lib/client/autoform-tags.css',
    'lib/client/autoform-tags.coffee',
    'lib/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js',
    'lib/bootstrap-tagsinput/dist/bootstrap-tagsinput.css',
  ], 'client');
});

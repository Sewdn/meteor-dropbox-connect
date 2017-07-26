Package.describe({
  name: "sewdn:dropbox-connect",
  summary: "Dropbox Connect package to connect dropbox users to existing meteor users.",
  description: "Dropbox Connect package to connect dropbox users to existing users.",
	version: '0.0.1',
	homepage: "https://github.com/Sewdn/meteor-dropbox-connect",
  author: "Pieter Soudan <pieter.soudan@solarapps.be> (http://www.solarapps.be)",
  git: "https://github.com/Sewdn/meteor-dropbox-connect.git"
});

Package.on_use(function (api) {
  api.use('accounts-base', ['client', 'server']);

  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('oauth');

  //add dependency for overriding core
  api.use('oauth-encryption', 'server', {weak: true});

  api.use(['nitrolabs:dropbox-oauth@1.4.0'], ['client', 'server']);


  api.add_files(["client.js"], 'client');
  api.add_files(["server.js"], 'server');
});

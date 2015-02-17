/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  templateNameConverter: 'upperCamelCase',
  routeControllerNameConverter: 'upperCamelCase'
});

Router.map(function () {
	this.route('home', {path: '/'});
  	this.route('makers', {path: '/makers'});
  	this.route('maker', {path: '/maker'});
  this.route('products', {path: '/products'});
});

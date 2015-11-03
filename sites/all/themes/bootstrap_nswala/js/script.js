jQuery(document).ready(function($) {
	// add bootstrap classes
	$('.navbar').removeClass('container');
	$('.navbar-header').addClass('col-lg-3 col-md-3 col-sm-3 col-xs-12 no-pad');
	$('.navbar-collapse').addClass('col-lg-9 col-md-9 col-sm-9 col-xs-12 text-right pull-right');

	$('.bootstrap-threecol-stacked .row:nth-child(2)').addClass('main-content');

	$('.pane-home-page-my-announcements .views-row').addClass('col-lg-6 col-md-6 col-sm-6 col-xs-12 announce_descp no-pad');
	$('.pane-home-page-my-announcements .views-row-first').removeClass('col-lg-6 col-md-6 col-sm-6 col-xs-12 announce_descp no-pad');
	$('.pane-home-page-my-announcements .views-row-first').addClass('col-lg-12 col-md-12 col-sm-12 col-xs-12 announce_descp no-pad');
	$('.pane-home-page-my-announcements .views-row img').addClass('img-responsive');


	$('.region-footer').addClass('container');
	$('footer .block-copyright-block').addClass('col-lg-3 col-md-3 col-sm-3 col-xs-12');
	$('footer .block-menu').addClass('col-lg-6 col-md-6 col-sm-6 col-xs-12 footer_left');
	$('footer .block-widgets').addClass('col-lg-3 col-md-3 col-sm-3 col-xs-12 footer_right');
});
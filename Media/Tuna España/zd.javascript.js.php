function visit_url(url) {
	var mysack = new sack("http://www.tunaespana.es/wp-content/plugins/zdstats/zd.wp.ajax.php" );
	 mysack.execute = 1;
	mysack.method = 'POST';
	mysack.setVar( "url", url );
	mysack.onError = function() { alert('Ajax error in outlink collection' )};
	mysack.runAJAX();
}
 jQuery(document).ready(function() {
	jQuery("a[href^=http]").not("[@href*=http://www.tunaespana.es]").mousedown(function(event) { 
		if (jQuery.browser.msie==true) {
			if (((event.button==4)&&(jQuery.browser.version>=7))||(event.button==1)) {
				visit_url(this.href);
			}
		} else {
			if ((event.button==0)||(event.button==1)) {
				visit_url(this.href);
			}
		}
		return true;
	})
});
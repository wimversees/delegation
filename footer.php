</div>

	<?php if(get_the_title() != 'contact' && get_the_title() != 'Contact') { ?>
		<section class="contact-block section-gray-100 py-3">
			<div class="row">
				<div class="col-sm-10 col-md-8 ml-auto mr-auto">
					<div>
						<p>Contacteer Delegation voor meer informatie. Wij maken graag een vrijblijvende offerte voor u op. Wij werken
							op afspraak, zodat wij uitgebreid de tijd kunnen nemen om uw project tot in detail te bespreken.</p>
					</div>
					<div class="text-center">
						<a href="/contact" class="btn btn-primary btn-lg mt-2">Contacteer ons</a>
					</div>
				</div>
			</div>			
		</section> 
	<?php } ?>
	

		<footer class="page-footer section-gray-200">
			<div class="container">
				<div class="page-footer-header pt-2">
					<img class="page-footer-logo" src="<?php echo get_stylesheet_directory_uri() ?>/design/img/delegation.png" alt="logo delegation">

					<div class="page-footer-header-actions">
						<a href="/contact">
							<i class="fa fa-envelope"></i>
						</a>
						<a href="/contact">
							<i class="fa fa-map"></i>
						</a>
					</div>
				</div>
				<div class="page-footer-body pb-1">
					<div class="row">
						<div class="col-sm-6 col-md-4">
							<p>BTW: BE 0631.530.574</p>
							<p>Starrenhoflaan 28-4,
								<br>2950 Kapellen</p>
						</div>
						<div class="col-sm-6 col-md-4">
							<p>Tel.:
								<a href="tel:+324 79 94 62 63">+324 79 94 62 63</a>
								<br>Email:
								<a href="mailto:info@delegation.be">info@delegation.be</a>
							</p>
						</div>
						<div class="col-sm-12 col-md-4">
							<div class="row">
								<div class="col-sm-6">
									<nav class="page-footer-nav">
										<ul>
											<li>
												<a href="#">Home</a>
											</li>
											<li>
												<a href="/producten">Producten</a>
											</li>
											<li>
												<a href="/verhuur">Verhuur</a>
											</li>
										</ul>
									</nav>
								</div>
								<div class="col-sm-6">
									<nav class="page-footer-nav">
										<ul>
											<li>
												<a href="/referenties-fotos">Referenties</a>
											</li>
											<li>
												<a href="/referenties-fotos">Foto's</a>
											</li>
											<li>
												<a href="/contact">Contact</a>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="page-footer-copy text-center section-black pt-2 pb-1">
				<div class="container">
					<p>© 2018
						<br>
						<p>Proudly powered by <a href="https://www.wiver.be" target="_blank" title="WIVER Webdesign & Display Advertising">WIVER</a></p>
					</p>
				</div>
			</div>
		</footer>
		<script src="<?php echo get_stylesheet_directory_uri(); ?>/design/js/applib.js"></script>
		<script src="<?php echo get_stylesheet_directory_uri(); ?>/design/js/lib.js"></script>	

<?php wp_footer(); ?>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-121308706-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-121308706-1');
</script>

</body>
</html>

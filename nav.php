<nav class="navbar navbar-light navbar-expand-lg">
	<div class="container">
        <a class="navbar-brand" href="/">
            <img class="navbar-brand-logo" src="<?php echo get_stylesheet_directory_uri() . '/design/img/delegation.png' ?>" alt="Delegation logo">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navigation">
								
			<?php // Primary navigation 
				wp_nav_menu( array(
					'menu' => 'header',
					'depth' => 5,
					'container' => false,
					'menu_class' => 'navbar-nav ml-auto',
					//Process nav menu using our custom nav walker
					'walker' => new wp_bootstrap_navwalker())
				);
				?>
		</div>
	</div>
</nav>
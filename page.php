<?php
/**
 * The template for displaying pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages and that
 * other "pages" on your WordPress site will use a different template.
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */
 

get_header(); ?>



<section class="hero hero-default hero-small dark-bg" style="background-image: url('<?php echo get_the_post_thumbnail_url(get_the_ID(),'full'); ?>');">
    <div class="container">
        <div class="hero-body text-center my-auto">
            <div class="hero-body-header">
                <h1 class="page-title"><?php the_title() ?></h1>
            </div>
        </div>
    </div>
</section>

<section class="main-content my-3">
	<div class="container">
		<div class="row">
			
				<?php
					// Start the loop.
					while ( have_posts() ) : the_post();

						// Include the page content template.
						get_template_part( 'content', 'page' );

						
					// function addStartSlash($haystack) {
					// 	$needle = "/";
					// 	if($needle === "" || strrpos($haystack, $needle, -strlen($haystack)) !== FALSE){
					// 		return $haystack;
					// 	}
					// 	return "/" . $haystack;
					// }

					// $result = ""; 
					// $albumSlug = "referentie-fotos";
				
					

					// End the loop.
					endwhile;
				?>
			
		</div>
	</div>
</section>

<?php get_footer(); ?>

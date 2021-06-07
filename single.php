<?php
/**
 * The template for displaying all single posts and attachments
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */

get_header(); ?>

<div class="row">
	<div class="col-xs-12 col-sm-8">
		<article class="row">			
			<?php
				// Start the loop.
				while ( have_posts() ) : the_post();

					get_template_part( 'content', get_post_format() );
					
				endwhile;
				?>
				
		</article>
	</div>
	<div class="col-xs-12 col-sm-4 bleft">
		<?php get_sidebar(); ?>
	</div>
</div>

<?php get_footer(); ?>

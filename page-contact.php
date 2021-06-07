<?php
/**
 * Template Name: Contact Page
 *
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
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
        <h2 class="accent"><?php the_title(); ?></h2>
		<div class="row">

            <?php
                // Start the loop.
                while ( have_posts() ) : the_post();
            ?>

            <div class="col-sm-8">
                <?php echo do_shortcode('[contact-form-7 id="113" title="Contact form"]') ?>
            </div>

            <div class="col-sm-4">
                <?php the_content() ?>
            </div>
           

            <?php
                // End the loop.
                endwhile;
            ?>

		</div>

        <div class="mt-3 text-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62871.37508822608!2d4.358027794753068!3d51.3325275489041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c4094043ee6a7b%3A0x4cc8c6a39ba4da4b!2sDELEGATION+-+Sound+-+Light+-+Vision!5e0!3m2!1sen!2sbe!4v1520539696247" width="600" height="450" frameborder="0" style="border:0" allowfullscreen=""></iframe>
        </div>
	</div>
</section>

<?php get_footer(); ?>
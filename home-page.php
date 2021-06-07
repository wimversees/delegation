<?php
/**
 * Template Name: Home Page
 *
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */


get_header(); ?>

<section class="hero hero-default dark-bg" style="background-image: url('<?php echo get_the_post_thumbnail_url(get_the_ID(),'full'); ?>');">
    <div class="container">
        <div class="hero-body text-center mt-auto">
            <div class="hero-body-header">
                <h1 class="page-title">Licht- en geluidsinstallaties</h1>
            </div>
            <div class="hero-body-actions">
                <div class="row">
                    <div class="col-3">
                        <a href="/producten" class="hero-body-action">
                            <div class="aspect-ratio-box">
                                <div class="aspect-ratio-box-inside">
                                    <div class="hero-body-action-icon">
                                        <i class="fa fa-sliders fa-rotate-90"></i>
                                    </div>
                                </div>
                            </div>
                            <span class="hero-body-action-text">Producten</span>
                        </a>
                    </div>
                    <div class="col-3">
                        <a href="/verhuur" class="hero-body-action">
                            <div class="aspect-ratio-box">
                                <div class="aspect-ratio-box-inside">
                                    <div class="hero-body-action-icon">
                                        <i class="fa fa-shopping-cart"></i>
                                    </div>
                                </div>
                            </div>
                            <span class="hero-body-action-text">Verhuur</span>
                        </a>
                    </div>
                    <div class="col-3">
                        <a href="/referentie-fotos" class="hero-body-action">
                            <div class="aspect-ratio-box">
                                <div class="aspect-ratio-box-inside">
                                    <div class="hero-body-action-icon">
                                        <i class="fa fa-camera-retro"></i>
                                    </div>
                                </div>
                            </div>
                            <span class="hero-body-action-text">Media</span>
                        </a>
                    </div>
                    <div class="col-3">
                        <a href="/tweedehands" class="hero-body-action">
                            <div class="aspect-ratio-box">
                                <div class="aspect-ratio-box-inside">
                                    <div class="hero-body-action-icon">
                                        <i class="fa fa-shopping-cart"></i>
                                    </div>
                                </div>
                            </div>
                            <span class="hero-body-action-text">Tweedehands</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php
    // Start the loop.
    while ( have_posts() ) : the_post();
?>

<section class="main-content my-3">
    <div class="container">
        <div class="row">
            <div class="col-sm-9">
                <?php the_content() ?>
            </div>
            <div class="col-sm-3">
                <a href="/contact" class="btn btn-primary btn-lg">Contacteer ons</a>
            </div>
        </div>
    </div>
</section>

<?php
    // End the loop.
    endwhile;
?>

<?php get_footer(); ?>
<?php
/**
 * Template Name: Referentie Page
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
	<div class="container gallery gallery-media">
		<div class="row">

		<?php
			$albumSlug = "referentie-fotos";
			$galleryId = $albumSlug[0]["ngg_id"];
			$result = $wpdb->get_results( 
				$wpdb->prepare('SELECT * 
					FROM wp_ngg_gallery
					WHERE slug = %s
					ORDER BY gid DESC', $albumSlug));

			if(count($result) > 0){
				$images = $wpdb->get_results( 
					$wpdb->prepare('SELECT * 
						FROM wp_ngg_pictures
						WHERE galleryid = %s
						ORDER BY pid ASC', $result[0]->gid));
				
				 for($x = 0; $x < count($images); $x++) {
					$filename = $images[$x]->filename; 
					$alt = $images[$x]->alt;
					$path = $result[0]->path . "/" . $filename; ?>
					
					 <div class="col-sm-4">
						<a href="<?php echo $path; ?>" class="gallery-link">
							<img src="<?php echo $path; ?>" alt="<?php echo $filename; ?>" class="hoverZoomLink">
						</a>
					</div>
				 <?php }
			}
		?>
		</div>
	</div>
</sevction>

<?php get_footer(); ?>

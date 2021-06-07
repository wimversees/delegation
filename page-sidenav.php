<?php
/**
 * Template Name: Page with Side nav
 *
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */

get_header(); ?>

<section class="hero hero-default hero-small dark-bg"
    style="background-image: url('<?php echo get_the_post_thumbnail_url(get_the_ID(), 'full'); ?>');">
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
while (have_posts()): the_post();
    ?>

            <!-- Build Side Navigation -->
            <div class="col-sm-3">
                <ul class="hidden-sm sidebar-menu section-gray-100">
                    <?php
    //GET PARENT PAGE IF THERE IS ONE
    $parent = $post->post_parent;

    //DO WE HAVE SIBLINGS?
    if (get_the_title() == "Verhuur") {
        $menuItems = get_pages('child_of=' . get_the_ID());
    } else {
        $menuItems = get_pages('child_of=' . $parent);
    }

    foreach ($menuItems as $menuItem) {
        if (get_the_title($menuItem) == get_the_title()) {
            echo '<li class="sidebar-menu-item active">';
        } else {
            echo '<li class="sidebar-menu-item">';
        }
        echo '<a href="' . get_page_link($menuItem) . '">' . get_the_title($menuItem) . '</a>';
        echo '</li>';
    }
    ?>
                </ul>
            </div>


            <div class="col-sm-9">
                <h2 class="accent"><?php the_title() ?></h2>
                <?php the_content(); ?>

                <div class="text-center mt-2">
                    <a href="/contact" class="btn btn-primary btn-lg">Contacteer ons</a>
                </div>

                <?php
    $category = get_page_category();

    $the_query = new WP_Query(array(
        'post_type' => 'Product',
        'tax_query' => array(
            array(
                'taxonomy' => 'category',
                //'field'    => 'slug',
                 'terms'    => $category,
            ),
        ),
    ));

    if ($the_query->have_posts()) {
        ?>

                <table class="table table-striped my-2">
                    <thead>
                        <td>Omschrijving</td>
                        <td>Prijs</td>
                    </thead>
                    <tbody>

                        <?php
    while ($the_query->have_posts()):
            $the_query->the_post();
            echo '<tr>';
            echo '<td>' . get_the_title();
            echo '</br>';
            echo get_the_content() . '</td>';
            $price = get_post_meta(get_the_ID(), 'wpcf-product-price', true);
            echo '<td>';
            if (!empty($price)) {
                if ($price == 'per stuk') {
                    echo $price;
                } else {
                    echo '€' . $price;
                }
            }
            echo '</td>';
            echo '</tr>';
        endwhile;

        ?>

                    </tbody>
                </table>

                <?php
    }

    wp_reset_query(); ?>
            </div>

            <?php
    // End the loop.
endwhile;
?>
        </div>


        <?php
$galleryId = get_post_meta(get_the_ID(), 'wpcf-gallery-id', true);
/*
global $nggdb;
$gallery    = $nggdb->get_gallery($galleryId, 'sortorder', 'ASC', true, 0, 0);
$imageCount = 1;

if (isset($gallery) && !empty($gallery) && is_array($gallery) && count($gallery) > 0) {
?>
        <div class="mt-2">
            <?php
foreach ($gallery as $image) {
if ($imageCount == 4) {$imageCount = 1;}

if ($imageCount == 1) {
echo '<div class="row">';
} ?>
            <div class="col-sm-4">
                <a href="<?php echo $image->imageURL ?>" class="img-link">
                    <img src="<?php echo $image->imageURL ?>" alt="<?php echo $image->alttext ?>" class="hoverZoomLink">
                </a>
            </div>
            <?php
if ($imageCount == 3) {
echo '</div>';
}

$imageCount++;
} ?>
        </div>

        <?php } */ ?>
    </div>
</section>

<?php get_footer(); ?>
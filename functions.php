<?php

// /* Remove Contact Form 7 Links from dashboard menu items if not admin */
if (!(current_user_can('administrator'))) {
    function remove_wpcf7()
    {
        remove_menu_page('wpcf7');
    }
    add_action('admin_menu', 'remove_wpcf7');
}

// Add Menu's item to wordpress admin
add_theme_support('menus');

// function to get title of the page
function page_title()
{
    $default = get_bloginfo('name');
    if (is_home() || is_front_page()) {
        echo $default;
    } /*else if(is_404()){
    echo t('404_title') . " - " . $default;
    }*/elseif (is_post_type_archive()) {
        post_type_archive_title();
        echo " - " . $default;
    } else {
        echo get_the_title() . " - " . $default;
    }
}

//this function generates the og:image url
function get_og_image()
{
    if (!is_home() || !is_front_page()) {
        // general thumbnail defined
        $currentThumb = get_the_post_thumbnail_url();
        if (strlen($currentThumb) > 0) {
            return $currentThumb;
        }

    }
    // default image
    return get_stylesheet_directory_uri() . '/img/default-og-image.png';
}

//this function generates the og:desciption text
function get_og_description()
{
    if (!is_home() || !is_front_page()) {
        $postId = get_the_ID();

        $content_post = get_post($postId);
        if (isset($content)) {
            $content = str_replace("&nbsp;", " ", substr(wp_strip_all_tags($content_post->post_content, true), 0, 225));
            if (strlen($content) > 0) {
                return $content . "...";
            }}
    }
    return 'Licht en geluidsapparatuur Kapellen | Delegation';
}

// Add default posts and comments RSS feed links to head.
// add_theme_support('automatic-feed-links');
add_theme_support('title-tag');
add_theme_support('post-thumbnails');
set_post_thumbnail_size(825, 510, true);

add_theme_support('html5', array(
    'search-form', 'comment-form', 'comment-list', 'gallery', 'caption',
));

// Register custom navigation walker
require_once 'lib/wp_bootstrap_navwalker.php';

// this function generates an excerpt for a given length
function get_the_excerpt_max_charlength($charlength = 160)
{
    $excerpt = get_the_excerpt();
    $charlength++;
    if (mb_strlen($excerpt) > $charlength) {
        $subex   = mb_substr($excerpt, 0, $charlength - 5);
        $exwords = explode(' ', $subex);
        $excut   = -(mb_strlen($exwords[count($exwords) - 1]));
        $result  = "";
        if ($excut < 0) {
            echo mb_substr($subex, 0, $excut) . "...";
        } else {
            echo $subex . "...";
        }
    } else {
        echo $excerpt;
    }
}

function get_menu_array($current_menu)
{

    $array_menu = wp_get_nav_menu_items($current_menu);
    $menu       = array();
    foreach ($array_menu as $m) {
        if (empty($m->menu_item_parent)) {
            $menu[$m->ID]             = array();
            $menu[$m->ID]['ID']       = $m->ID;
            $menu[$m->ID]['title']    = $m->title;
            $menu[$m->ID]['url']      = $m->url;
            $menu[$m->ID]['children'] = array();
        }
    }
    $submenu = array();
    foreach ($array_menu as $m) {
        if ($m->menu_item_parent) {
            $submenu[$m->ID]                                = array();
            $submenu[$m->ID]['ID']                          = $m->ID;
            $submenu[$m->ID]['title']                       = $m->title;
            $submenu[$m->ID]['url']                         = $m->url;
            $menu[$m->menu_item_parent]['children'][$m->ID] = $submenu[$m->ID];
        }
    }
    return $menu;

}

function get_sibling_menu($parent)
{
    //GET PARENT PAGE IF THERE IS ONE
    $parent = $post->post_parent;

    //DO WE HAVE SIBLINGS?
    $siblings = get_pages('child_of=' . $parent);

    return $siblins;
}

function get_page_category()
{
    // Get a list of categories and extract their names
    $post_categories = get_the_category();
    if (!empty($post_categories) && !is_wp_error($post_categories)) {
        $categories = wp_list_pluck($post_categories, 'slug');
        $category   = $categories[0];
        return $category;
    }
}
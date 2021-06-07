<div class="col-md-8 footer-contact">
    <div class="col-xs-12">
        <h2>Info</h2>
    </div>
    <div class="col-md-4">
        <?php printfooternav(2); ?>
    </div>
    <div class="col-md-4">
        <?php printfooternav(31); ?>
        <?php printfooternav(22); ?>
        <?php printfooternav(29); ?>
        <?php printfooternav(30); ?>
    </div>
    <div class="col-md-4">
        <?php printfooternav(15); ?>
    </div>
</div>
<div class="col-md-4 footer-contact">
    <h2>Contact</h2>
    <p>Wim Eennaes</p>
    <p><a href="tel:+32498939454" target="_blank"><i class="fa fa-phone"></i>+32 498 93 94 54</a></p>
    <p><a href="/contact"><i class="fa fa-envelope"></i>Contacteer!</a></p>
</div>


<?php function printfooternav($id){ ?>
    <?php $args = array(
        'sort_column' => 'ID',
        'parent' => 0
    ); 
    $level0 = get_pages($args); 
    $index = 0;
    foreach($level0 as $page){
        ?>
        <div>
        <?php if($page->ID == $id){ ?> 
            <a href="<?php echo get_page_link( $page->ID ); ?>" title="<?php echo $page->post_title; ?>"><?php echo $page->post_title; ?></a>
            <?php $args = array(
                'parent' => $page->ID
            ); 
            $level1 = get_pages($args); 
            if(count($level1)){ ?>
                <ul>
                    <?php foreach($level1 as $page1){ ?>
                        <li>
                            <a href="<?php echo get_page_link( $page1->ID ); ?>" title="<?php echo $page1->post_title; ?>"><?php echo $page1->post_title; ?></a>
                            <?php $args2 = array(
                                'sort_column' => 'ID',
                                'parent' => $page1->ID
                            ); 
                            $level2 = get_pages($args2); 
                            if(count($level2)){ ?>
                                <ul>
                                    <?php foreach($level2 as $page2){ ?>
                                        <a href="<?php echo get_page_link( $page2->ID ); ?>" title="<?php echo $page2->post_title; ?>"><?php echo $page2->post_title; ?></a>
                                    <?php } ?>
                            </ul>
                            <?php } ?>
                        </li>
                    <?php } ?>
                </ul>
            <?php } ?><?php } ?></div>
        <?php
    }
    ?>
<?php } ?>
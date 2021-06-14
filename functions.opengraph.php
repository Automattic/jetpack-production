<?php
/**
 * Open Graph Tags
 *
 * Add Open Graph tags so that Facebook (and any other service that supports them)
 * can crawl the site better and we provide a better sharing experience.
 *
 * @link http://ogp.me/
 * @link http://developers.facebook.com/docs/opengraph/
 */
add_action( 'wp_head', 'jetpack_og_tags' );

function jetpack_og_tags() {
	if ( false === apply_filters( 'jetpack_enable_opengraph', true ) ) {
		_deprecated_function( 'jetpack_enable_opengraph', '2.0.3', 'jetpack_enable_open_graph' );
		return;
	}

	$og_output = "\n<!-- Jetpack Open Graph Tags -->\n";
	$tags = array();

	$image_width  = absint( apply_filters( 'jetpack_open_graph_image_width', 200 ) );
	$image_height = absint( apply_filters( 'jetpack_open_graph_image_height', 200 ) );
	$description_length = 197;

	if ( is_home() || is_front_page() ) {
		$site_type = get_option( 'open_graph_protocol_site_type' );
		$tags['og:type'] = ! empty( $site_type ) ? $site_type : 'blog';
		$tags['og:title'] = get_bloginfo( 'name' );
		$tags['og:url'] = is_home() ? get_permalink( get_option( 'page_for_posts' ) ) : home_url( '/' );
		$tags['og:description'] = get_bloginfo( 'description' );

		// Associate a blog's root path with one or more Facebook accounts
		$facebook_admins = get_option( 'facebook_admins' );
		if ( ! empty( $facebook_admins ) )
			$tags['fb:admins'] = $facebook_admins;

	} else if ( is_author() ) {
		$tags['og:type'] = 'author';

		$author = get_queried_object();

		$tags['og:title'] = $author->display_name;
		$tags['og:url'] = get_author_posts_url( $author->ID );
		$tags['og:description'] = $author->description;

	} else if ( is_singular() ) {
		global $post;
		setup_postdata( $post );

		$tags['og:type'] = 'article';
		$tags['og:title'] = get_the_title();
		$tags['og:url'] = get_permalink();
		$tags['og:description'] = strip_tags( get_the_excerpt() );

		// Force a description, to avoid FB getting its own
		if ( empty( $tags['og:description'] ) )
			$tags['og:description'] = ' ';

	}

	if ( empty( $tags ) )
		return;

	$tags['og:site_name'] = get_bloginfo( 'name' );
	$tags['og:image'] = jetpack_og_get_image( $image_width, $image_height );

	// Facebook whines if you give it an empty title
	if ( empty( $tags['og:title'] ) )
		$tags['og:title'] = __( '(no title)', 'jetpack' );

	// Shorten the description if it's too long
	$tags['og:description'] = strlen( $tags['og:description'] ) > $description_length ? mb_substr( $tags['og:description'], 0, $description_length ) . '...' : $tags['og:description'];

	// Add any additional tags here, or modify what we've come up with
	$tags = apply_filters( 'jetpack_open_graph_tags', $tags, compact( 'image_width', 'image_height' ) );

	foreach ( (array) $tags as $tag_property => $tag_content ) {
		// to accomodate multiple images
		$tag_content = (array) $tag_content;
		$tag_content = array_unique( $tag_content );

		foreach ( $tag_content as $tag_content_single ) {
			if ( empty( $tag_content_single ) )
				continue; // Don't ever output empty tags
			$og_tag = sprintf( '<meta property="%s" content="%s" />', esc_attr( $tag_property ), esc_attr( $tag_content_single ) );
			$og_output .= apply_filters( 'jetpack_open_graph_output', $og_tag );
			$og_output .= "\n";
		}
	}

	echo $og_output;
}

function jetpack_og_get_image( $width = 50, $height = 50, $max_images = 4 ) { // Facebook requires thumbnails to be a minimum of 50x50
	$image = '';

	if ( is_singular() && !is_home() && !is_front_page() ) {
		global $post;
		$image = '';

		// Attempt to find something good for this post using our generalized PostImages code
		if ( class_exists( 'Jetpack_PostImages' ) ) {
			$post_images = Jetpack_PostImages::get_images( $post->ID, array( 'width' => $width, 'height' => $height ) );
			if ( $post_images && !is_wp_error( $post_images ) ) {
				$image = array();
				foreach ( (array) $post_images as $post_image ) {
					$image[] = $post_image['src'];
				}
			}
		}
	} else if ( is_author() ) {
		$author = get_queried_object();
		if ( function_exists( 'get_avatar_url' ) ) {
			$avatar = get_avatar_url( $author->user_email, $width );

			if ( ! empty( $avatar ) ) {
				if ( is_array( $avatar ) )
					$image = $avatar[0];
				else
					$image = $avatar;
			}
		}
		else {
			$has_filter = has_filter( 'pre_option_show_avatars', '__return_true' );
			if ( !$has_filter ) {
				add_filter( 'pre_option_show_avatars', '__return_true' );
			}
			$avatar = get_avatar( $author->user_email, $width );
			if ( !$has_filter ) {
				remove_filter( 'pre_option_show_avatars', '__return_true' );
			}

			if ( !empty( $avatar ) && !is_wp_error( $avatar ) ) {
				if ( preg_match( '/src=["\']([^"\']+)["\']/', $avatar, $matches ) );
					$image = wp_specialchars_decode( $matches[1], ENT_QUOTES );
			}
		}
	}

	// Fallback to Blavatar if available
	if ( function_exists( 'blavatar_domain' ) ) {
		$blavatar_domain = blavatar_domain( site_url() );
		if ( empty( $image ) && blavatar_exists( $blavatar_domain ) )
			$image = blavatar_url( $blavatar_domain, 'img', $width );
	}

	return $image;
}
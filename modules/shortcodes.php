<?php

/**
 * Module Name: Shortcode Embeds
 * Module Description: Easily embed videos and more from sites like YouTube, Vimeo, and SlideShare.
 * Sort Order: 11
 * First Introduced: 1.1
 * Major Changes In: 1.2
 */

/**
 * Transforms the $atts array into a string that the old functions expected
 *
 * The old way was:
 * [shortcode a=1&b=2&c=3] or [shortcode=1]
 * This is parsed as array( a => '1&b=2&c=3' ) and array( 0 => '=1' ), which is useless
 *
 * @param Array $params
 * @param Bool $old_format_support true if [shortcode=foo] format is possible.
 * @return String $params
 */
function shortcode_new_to_old_params( $params, $old_format_support = false ) {
	$str = '';
	
	if ( $old_format_support && isset( $params[0] ) ) {
		$str = ltrim( $params[0], '=' );
	} elseif ( is_array( $params ) ) {
		foreach ( array_keys( $params ) as $key ) {
			if ( ! is_numeric( $key ) )
				$str = $key . '=' . $params[$key];
		}
	}
	
	return str_replace( array( '&amp;', '&#038;' ), '&', $str );  
}

function jetpack_load_shortcodes() {
	foreach ( Jetpack::glob_php( dirname( __FILE__ ) . '/shortcodes' ) as $file ) {
		include $file;
	}
}

/**
 * Runs preg_replace so that replacements don't happen within open tags.  
 * Parameters are the same as preg_replace, with an added optional search param for improved performance
 *
 * @param String $pattern
 * @param String $replacement
 * @param String $content
 * @param String $search
 * @return String $content
 */
function jetpack_preg_replace_outside_tags( $pattern, $replacement, $content, $search = null ) {
	if( ! function_exists( 'wp_html_split' ) ) {
		return $content;
	}

	if ( $search && false === strpos( $content, $search ) ) {
		return $content;
	}
	
	$textarr = wp_html_split( $content );
	unset( $content );
	foreach( $textarr as &$element ) {
	    if ( '' === $element || '<' === $element{0} )
	        continue;
	    $element = preg_replace( $pattern, $replacement, $element );
	}
	
	return join( $textarr );
}

/**
 * Runs preg_replace_callback so that replacements don't happen within open tags.  
 * Parameters are the same as preg_replace, with an added optional search param for improved performance
 *
 * @param String $pattern
 * @param String $replacement
 * @param String $content
 * @param String $search
 * @return String $content
 */
function jetpack_preg_replace_callback_outside_tags( $pattern, $callback, $content, $search = null ) {
	if( ! function_exists( 'wp_html_split' ) ) {
		return $content;
	}

	if ( $search && false === strpos( $content, $search ) ) {
		return $content;
	}
	
	$textarr = wp_html_split( $content );
	unset( $content );
	foreach( $textarr as &$element ) {
	    if ( '' === $element || '<' === $element{0} )
	        continue;
	    $element = preg_replace_callback( $pattern, $callback, $element );
	}
	
	return join( $textarr );
}

jetpack_load_shortcodes();

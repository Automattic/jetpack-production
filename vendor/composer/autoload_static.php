<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit7ae227418a0ad43464181afeeabda0ed
{
    public static $files = array (
        'bce4ecd6aabb2a2948e06d0e2c4ea9a6' => __DIR__ . '/..' . '/automattic/jetpack-connection/legacy/load-ixr.php',
        'd4eb94df91a729802d18373ee8cdc79f' => __DIR__ . '/..' . '/automattic/jetpack-backup/actions.php',
        '009de6aaa0d497eacea41fab13fc05f1' => __DIR__ . '/..' . '/automattic/jetpack-compat/functions.php',
    );

    public static $prefixLengthsPsr4 = array (
        'A' => 
        array (
            'Automattic\\Jetpack\\Autoloader\\' => 30,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Automattic\\Jetpack\\Autoloader\\' => 
        array (
            0 => __DIR__ . '/..' . '/automattic/jetpack-autoloader/src',
        ),
    );

    public static $prefixesPsr0 = array (
        'T' => 
        array (
            'Twitter\\Text\\' => 
            array (
                0 => __DIR__ . '/..' . '/nojimage/twitter-text-php/lib',
            ),
        ),
    );

    public static $classMap = array (
        'Automattic\\Jetpack\\A8c_Mc_Stats' => __DIR__ . '/..' . '/automattic/jetpack-a8c-mc-stats/src/class-a8c-mc-stats.php',
        'Automattic\\Jetpack\\Abtest' => __DIR__ . '/..' . '/automattic/jetpack-abtest/src/class-abtest.php',
        'Automattic\\Jetpack\\Assets' => __DIR__ . '/..' . '/automattic/jetpack-assets/src/class-assets.php',
        'Automattic\\Jetpack\\Assets\\Logo' => __DIR__ . '/..' . '/automattic/jetpack-logo/src/class-logo.php',
        'Automattic\\Jetpack\\Autoloader\\AutoloadFileWriter' => __DIR__ . '/..' . '/automattic/jetpack-autoloader/src/AutoloadFileWriter.php',
        'Automattic\\Jetpack\\Autoloader\\AutoloadGenerator' => __DIR__ . '/..' . '/automattic/jetpack-autoloader/src/AutoloadGenerator.php',
        'Automattic\\Jetpack\\Autoloader\\AutoloadProcessor' => __DIR__ . '/..' . '/automattic/jetpack-autoloader/src/AutoloadProcessor.php',
        'Automattic\\Jetpack\\Autoloader\\CustomAutoloaderPlugin' => __DIR__ . '/..' . '/automattic/jetpack-autoloader/src/CustomAutoloaderPlugin.php',
        'Automattic\\Jetpack\\Autoloader\\ManifestGenerator' => __DIR__ . '/..' . '/automattic/jetpack-autoloader/src/ManifestGenerator.php',
        'Automattic\\Jetpack\\Backup\\Helper_Script_Manager' => __DIR__ . '/..' . '/automattic/jetpack-backup/src/class-helper-script-manager.php',
        'Automattic\\Jetpack\\Blocks' => __DIR__ . '/..' . '/automattic/jetpack-blocks/src/class-blocks.php',
        'Automattic\\Jetpack\\Config' => __DIR__ . '/..' . '/automattic/jetpack-config/src/class-config.php',
        'Automattic\\Jetpack\\Connection\\Client' => __DIR__ . '/..' . '/automattic/jetpack-connection/src/class-client.php',
        'Automattic\\Jetpack\\Connection\\Error_Handler' => __DIR__ . '/..' . '/automattic/jetpack-connection/src/class-error-handler.php',
        'Automattic\\Jetpack\\Connection\\Manager' => __DIR__ . '/..' . '/automattic/jetpack-connection/src/class-manager.php',
        'Automattic\\Jetpack\\Connection\\Manager_Interface' => __DIR__ . '/..' . '/automattic/jetpack-connection/src/interface-manager.php',
        'Automattic\\Jetpack\\Connection\\Plugin' => __DIR__ . '/..' . '/automattic/jetpack-connection/src/class-plugin.php',
        'Automattic\\Jetpack\\Connection\\Plugin_Storage' => __DIR__ . '/..' . '/automattic/jetpack-connection/src/class-plugin-storage.php',
        'Automattic\\Jetpack\\Connection\\REST_Connector' => __DIR__ . '/..' . '/automattic/jetpack-connection/src/class-rest-connector.php',
        'Automattic\\Jetpack\\Connection\\Rest_Authentication' => __DIR__ . '/..' . '/automattic/jetpack-connection/src/class-rest-authentication.php',
        'Automattic\\Jetpack\\Connection\\Utils' => __DIR__ . '/..' . '/automattic/jetpack-connection/src/class-utils.php',
        'Automattic\\Jetpack\\Connection\\XMLRPC_Async_Call' => __DIR__ . '/..' . '/automattic/jetpack-connection/src/class-xmlrpc-async-call.php',
        'Automattic\\Jetpack\\Connection\\XMLRPC_Connector' => __DIR__ . '/..' . '/automattic/jetpack-connection/src/class-xmlrpc-connector.php',
        'Automattic\\Jetpack\\Constants' => __DIR__ . '/..' . '/automattic/jetpack-constants/src/class-constants.php',
        'Automattic\\Jetpack\\Device_Detection' => __DIR__ . '/..' . '/automattic/jetpack-device-detection/src/class-device-detection.php',
        'Automattic\\Jetpack\\Device_Detection\\User_Agent_Info' => __DIR__ . '/..' . '/automattic/jetpack-device-detection/src/class-user-agent-info.php',
        'Automattic\\Jetpack\\Error' => __DIR__ . '/..' . '/automattic/jetpack-error/src/class-error.php',
        'Automattic\\Jetpack\\Heartbeat' => __DIR__ . '/..' . '/automattic/jetpack-heartbeat/src/class-heartbeat.php',
        'Automattic\\Jetpack\\JITMS\\JITM' => __DIR__ . '/..' . '/automattic/jetpack-jitm/src/class-jitm.php',
        'Automattic\\Jetpack\\JITMS\\Post_Connection_JITM' => __DIR__ . '/..' . '/automattic/jetpack-jitm/src/class-post-connection-jitm.php',
        'Automattic\\Jetpack\\JITMS\\Pre_Connection_JITM' => __DIR__ . '/..' . '/automattic/jetpack-jitm/src/class-pre-connection-jitm.php',
        'Automattic\\Jetpack\\Jetpack_Lazy_Images' => __DIR__ . '/..' . '/automattic/jetpack-lazy-images/src/lazy-images.php',
        'Automattic\\Jetpack\\Licensing' => __DIR__ . '/..' . '/automattic/jetpack-licensing/src/class-licensing.php',
        'Automattic\\Jetpack\\Partner' => __DIR__ . '/..' . '/automattic/jetpack-partner/src/class-partner.php',
        'Automattic\\Jetpack\\Plugin\\Tracking' => __DIR__ . '/../..' . '/src/class-tracking.php',
        'Automattic\\Jetpack\\Redirect' => __DIR__ . '/..' . '/automattic/jetpack-redirect/src/class-redirect.php',
        'Automattic\\Jetpack\\Roles' => __DIR__ . '/..' . '/automattic/jetpack-roles/src/class-roles.php',
        'Automattic\\Jetpack\\Status' => __DIR__ . '/..' . '/automattic/jetpack-status/src/class-status.php',
        'Automattic\\Jetpack\\Sync\\Actions' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/class-actions.php',
        'Automattic\\Jetpack\\Sync\\Codec_Interface' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/interface-codec.php',
        'Automattic\\Jetpack\\Sync\\Defaults' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/class-defaults.php',
        'Automattic\\Jetpack\\Sync\\Functions' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/class-functions.php',
        'Automattic\\Jetpack\\Sync\\Health' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/class-health.php',
        'Automattic\\Jetpack\\Sync\\JSON_Deflate_Array_Codec' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/class-json-deflate-array-codec.php',
        'Automattic\\Jetpack\\Sync\\Listener' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/class-listener.php',
        'Automattic\\Jetpack\\Sync\\Lock' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/class-lock.php',
        'Automattic\\Jetpack\\Sync\\Main' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/class-main.php',
        'Automattic\\Jetpack\\Sync\\Modules' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/class-modules.php',
        'Automattic\\Jetpack\\Sync\\Modules\\Attachments' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/modules/class-attachments.php',
        'Automattic\\Jetpack\\Sync\\Modules\\Callables' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/modules/class-callables.php',
        'Automattic\\Jetpack\\Sync\\Modules\\Comments' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/modules/class-comments.php',
        'Automattic\\Jetpack\\Sync\\Modules\\Constants' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/modules/class-constants.php',
        'Automattic\\Jetpack\\Sync\\Modules\\Full_Sync' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/modules/class-full-sync.php',
        'Automattic\\Jetpack\\Sync\\Modules\\Full_Sync_Immediately' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/modules/class-full-sync-immediately.php',
        'Automattic\\Jetpack\\Sync\\Modules\\Import' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/modules/class-import.php',
        'Automattic\\Jetpack\\Sync\\Modules\\Menus' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/modules/class-menus.php',
        'Automattic\\Jetpack\\Sync\\Modules\\Meta' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/modules/class-meta.php',
        'Automattic\\Jetpack\\Sync\\Modules\\Module' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/modules/class-module.php',
        'Automattic\\Jetpack\\Sync\\Modules\\Network_Options' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/modules/class-network-options.php',
        'Automattic\\Jetpack\\Sync\\Modules\\Options' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/modules/class-options.php',
        'Automattic\\Jetpack\\Sync\\Modules\\Plugins' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/modules/class-plugins.php',
        'Automattic\\Jetpack\\Sync\\Modules\\Posts' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/modules/class-posts.php',
        'Automattic\\Jetpack\\Sync\\Modules\\Protect' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/modules/class-protect.php',
        'Automattic\\Jetpack\\Sync\\Modules\\Stats' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/modules/class-stats.php',
        'Automattic\\Jetpack\\Sync\\Modules\\Term_Relationships' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/modules/class-term-relationships.php',
        'Automattic\\Jetpack\\Sync\\Modules\\Terms' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/modules/class-terms.php',
        'Automattic\\Jetpack\\Sync\\Modules\\Themes' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/modules/class-themes.php',
        'Automattic\\Jetpack\\Sync\\Modules\\Updates' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/modules/class-updates.php',
        'Automattic\\Jetpack\\Sync\\Modules\\Users' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/modules/class-users.php',
        'Automattic\\Jetpack\\Sync\\Modules\\WP_Super_Cache' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/modules/class-wp-super-cache.php',
        'Automattic\\Jetpack\\Sync\\Modules\\WooCommerce' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/modules/class-woocommerce.php',
        'Automattic\\Jetpack\\Sync\\Queue' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/class-queue.php',
        'Automattic\\Jetpack\\Sync\\Queue_Buffer' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/class-queue-buffer.php',
        'Automattic\\Jetpack\\Sync\\Replicastore' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/class-replicastore.php',
        'Automattic\\Jetpack\\Sync\\Replicastore\\Table_Checksum' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/replicastore/class-table-checksum.php',
        'Automattic\\Jetpack\\Sync\\Replicastore_Interface' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/interface-replicastore.php',
        'Automattic\\Jetpack\\Sync\\Sender' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/class-sender.php',
        'Automattic\\Jetpack\\Sync\\Server' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/class-server.php',
        'Automattic\\Jetpack\\Sync\\Settings' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/class-settings.php',
        'Automattic\\Jetpack\\Sync\\Simple_Codec' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/class-simple-codec.php',
        'Automattic\\Jetpack\\Sync\\Users' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/class-users.php',
        'Automattic\\Jetpack\\Sync\\Utils' => __DIR__ . '/..' . '/automattic/jetpack-sync/src/class-utils.php',
        'Automattic\\Jetpack\\Terms_Of_Service' => __DIR__ . '/..' . '/automattic/jetpack-terms-of-service/src/class-terms-of-service.php',
        'Automattic\\Jetpack\\Tracking' => __DIR__ . '/..' . '/automattic/jetpack-tracking/src/class-tracking.php',
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'JetpackTracking' => __DIR__ . '/..' . '/automattic/jetpack-compat/legacy/class-jetpacktracking.php',
        'Jetpack_Client' => __DIR__ . '/..' . '/automattic/jetpack-compat/legacy/class-jetpack-client.php',
        'Jetpack_IXR_Client' => __DIR__ . '/..' . '/automattic/jetpack-connection/legacy/class-jetpack-ixr-client.php',
        'Jetpack_IXR_ClientMulticall' => __DIR__ . '/..' . '/automattic/jetpack-connection/legacy/class-jetpack-ixr-clientmulticall.php',
        'Jetpack_Options' => __DIR__ . '/..' . '/automattic/jetpack-options/legacy/class-jetpack-options.php',
        'Jetpack_Signature' => __DIR__ . '/..' . '/automattic/jetpack-connection/legacy/class-jetpack-signature.php',
        'Jetpack_Sync_Actions' => __DIR__ . '/..' . '/automattic/jetpack-compat/legacy/class-jetpack-sync-actions.php',
        'Jetpack_Sync_Modules' => __DIR__ . '/..' . '/automattic/jetpack-compat/legacy/class-jetpack-sync-modules.php',
        'Jetpack_Sync_Settings' => __DIR__ . '/..' . '/automattic/jetpack-compat/legacy/class-jetpack-sync-settings.php',
        'Jetpack_Tracks_Client' => __DIR__ . '/..' . '/automattic/jetpack-tracking/legacy/class-jetpack-tracks-client.php',
        'Jetpack_Tracks_Event' => __DIR__ . '/..' . '/automattic/jetpack-tracking/legacy/class-jetpack-tracks-event.php',
        'Jetpack_XMLRPC_Server' => __DIR__ . '/..' . '/automattic/jetpack-connection/legacy/class-jetpack-xmlrpc-server.php',
        'Twitter\\Text\\Autolink' => __DIR__ . '/..' . '/nojimage/twitter-text-php/lib/Twitter/Text/Autolink.php',
        'Twitter\\Text\\Configuration' => __DIR__ . '/..' . '/nojimage/twitter-text-php/lib/Twitter/Text/Configuration.php',
        'Twitter\\Text\\EmojiRegex' => __DIR__ . '/..' . '/nojimage/twitter-text-php/lib/Twitter/Text/EmojiRegex.php',
        'Twitter\\Text\\Extractor' => __DIR__ . '/..' . '/nojimage/twitter-text-php/lib/Twitter/Text/Extractor.php',
        'Twitter\\Text\\HitHighlighter' => __DIR__ . '/..' . '/nojimage/twitter-text-php/lib/Twitter/Text/HitHighlighter.php',
        'Twitter\\Text\\ParseResults' => __DIR__ . '/..' . '/nojimage/twitter-text-php/lib/Twitter/Text/ParseResults.php',
        'Twitter\\Text\\Parser' => __DIR__ . '/..' . '/nojimage/twitter-text-php/lib/Twitter/Text/Parser.php',
        'Twitter\\Text\\Regex' => __DIR__ . '/..' . '/nojimage/twitter-text-php/lib/Twitter/Text/Regex.php',
        'Twitter\\Text\\StringUtils' => __DIR__ . '/..' . '/nojimage/twitter-text-php/lib/Twitter/Text/StringUtils.php',
        'Twitter\\Text\\TldLists' => __DIR__ . '/..' . '/nojimage/twitter-text-php/lib/Twitter/Text/TldLists.php',
        'Twitter\\Text\\Validator' => __DIR__ . '/..' . '/nojimage/twitter-text-php/lib/Twitter/Text/Validator.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit7ae227418a0ad43464181afeeabda0ed::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit7ae227418a0ad43464181afeeabda0ed::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInit7ae227418a0ad43464181afeeabda0ed::$prefixesPsr0;
            $loader->classMap = ComposerStaticInit7ae227418a0ad43464181afeeabda0ed::$classMap;

        }, null, ClassLoader::class);
    }
}

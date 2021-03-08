<?php











namespace Composer;

use Composer\Autoload\ClassLoader;
use Composer\Semver\VersionParser;






class InstalledVersions
{
private static $installed = array (
  'root' => 
  array (
    'pretty_version' => 'dev-monorepo',
    'version' => 'dev-monorepo',
    'aliases' => 
    array (
    ),
    'reference' => NULL,
    'name' => 'automattic/jetpack',
  ),
  'versions' => 
  array (
    'automattic/jetpack' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => NULL,
    ),
    'automattic/jetpack-a8c-mc-stats' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '398486a9fd765f11f2d5eb06335da3b297e3224f',
    ),
    'automattic/jetpack-abtest' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => 'ccf2ee57562ced15ded3d3480ca2f2a8537f44ed',
    ),
    'automattic/jetpack-assets' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '5101b448c175eee89a2d012e69c485b69a78ee2f',
    ),
    'automattic/jetpack-autoloader' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '7a881666ec3be4b41476fe8156dd43b4fe82ceeb',
    ),
    'automattic/jetpack-backup' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '2df8da7c29258d716bbc0f48d45382c5cc7d65ae',
    ),
    'automattic/jetpack-blocks' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => 'c03fdef7e355e1d387019e7fd2686a397d2f4242',
    ),
    'automattic/jetpack-compat' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => 'cf9f893263ef2c6a98cfd6cc6f559539287ae425',
    ),
    'automattic/jetpack-config' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '3571a42078700a94929393a846c6f971c3a813fb',
    ),
    'automattic/jetpack-connection' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => 'dd697a78735f589a433b5ae84d22f19907596f91',
    ),
    'automattic/jetpack-connection-ui' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => 'cba2fe0f8b72b2d85d025e83e693dae6e09e30b2',
    ),
    'automattic/jetpack-constants' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '377a8017760530e1806d11a1c885edcb9cb85f01',
    ),
    'automattic/jetpack-device-detection' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '34a28a03254af3444081b1620569a8353105f56c',
    ),
    'automattic/jetpack-error' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => 'f34ecb8e6dd78ce231a7e8f88cb103eccc97bc24',
    ),
    'automattic/jetpack-heartbeat' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '99eecd6e092cccd280ae5f001ec0ddff3a46059a',
    ),
    'automattic/jetpack-jitm' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => 'b8d0d031927190701e4dd5c57abe2ae3d349b7d8',
    ),
    'automattic/jetpack-lazy-images' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '97d633b1407af1e0289edae9ac3bad1e38078bfd',
    ),
    'automattic/jetpack-licensing' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => 'b1144fa6146babd7234ba7c225ebba72bd1bed4b',
    ),
    'automattic/jetpack-logo' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '5dd8bdb147a7c97240a4c26394d6b577d5f8cd5c',
    ),
    'automattic/jetpack-options' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '089e1ac852eb88a6b7f9b8e5f610df26d383dd32',
    ),
    'automattic/jetpack-partner' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => 'f9b2bc94d9443df242a834abfcfa3bd52f0f451b',
    ),
    'automattic/jetpack-redirect' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => 'c309d3f31f6cb381040895df07e1ca83bc2bf34d',
    ),
    'automattic/jetpack-roles' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => 'fdd5aa97689895b58f5d2c1ed4f261bb8224977f',
    ),
    'automattic/jetpack-status' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => 'd1a47236db5f3c390bfcbbb6947d9fd2729d4161',
    ),
    'automattic/jetpack-sync' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '0088e5823357b67c5a36ef234a3f67a6773a68bb',
    ),
    'automattic/jetpack-terms-of-service' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => 'c9ff72f1314b33edb87febb9377b0ebc01d8d8b6',
    ),
    'automattic/jetpack-tracking' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => 'e0a71454366bb0ed64923b6ecb5a0a5287c795e9',
    ),
    'nojimage/twitter-text-php' => 
    array (
      'pretty_version' => 'v3.1.1',
      'version' => '3.1.1.0',
      'aliases' => 
      array (
      ),
      'reference' => '7f466b331cebfdd00e3568acaf45f2e90a39a320',
    ),
  ),
);
private static $canGetVendors;
private static $installedByVendor = array();







public static function getInstalledPackages()
{
$packages = array();
foreach (self::getInstalled() as $installed) {
$packages[] = array_keys($installed['versions']);
}


if (1 === \count($packages)) {
return $packages[0];
}

return array_keys(array_flip(\call_user_func_array('array_merge', $packages)));
}









public static function isInstalled($packageName)
{
foreach (self::getInstalled() as $installed) {
if (isset($installed['versions'][$packageName])) {
return true;
}
}

return false;
}














public static function satisfies(VersionParser $parser, $packageName, $constraint)
{
$constraint = $parser->parseConstraints($constraint);
$provided = $parser->parseConstraints(self::getVersionRanges($packageName));

return $provided->matches($constraint);
}










public static function getVersionRanges($packageName)
{
foreach (self::getInstalled() as $installed) {
if (!isset($installed['versions'][$packageName])) {
continue;
}

$ranges = array();
if (isset($installed['versions'][$packageName]['pretty_version'])) {
$ranges[] = $installed['versions'][$packageName]['pretty_version'];
}
if (array_key_exists('aliases', $installed['versions'][$packageName])) {
$ranges = array_merge($ranges, $installed['versions'][$packageName]['aliases']);
}
if (array_key_exists('replaced', $installed['versions'][$packageName])) {
$ranges = array_merge($ranges, $installed['versions'][$packageName]['replaced']);
}
if (array_key_exists('provided', $installed['versions'][$packageName])) {
$ranges = array_merge($ranges, $installed['versions'][$packageName]['provided']);
}

return implode(' || ', $ranges);
}

throw new \OutOfBoundsException('Package "' . $packageName . '" is not installed');
}





public static function getVersion($packageName)
{
foreach (self::getInstalled() as $installed) {
if (!isset($installed['versions'][$packageName])) {
continue;
}

if (!isset($installed['versions'][$packageName]['version'])) {
return null;
}

return $installed['versions'][$packageName]['version'];
}

throw new \OutOfBoundsException('Package "' . $packageName . '" is not installed');
}





public static function getPrettyVersion($packageName)
{
foreach (self::getInstalled() as $installed) {
if (!isset($installed['versions'][$packageName])) {
continue;
}

if (!isset($installed['versions'][$packageName]['pretty_version'])) {
return null;
}

return $installed['versions'][$packageName]['pretty_version'];
}

throw new \OutOfBoundsException('Package "' . $packageName . '" is not installed');
}





public static function getReference($packageName)
{
foreach (self::getInstalled() as $installed) {
if (!isset($installed['versions'][$packageName])) {
continue;
}

if (!isset($installed['versions'][$packageName]['reference'])) {
return null;
}

return $installed['versions'][$packageName]['reference'];
}

throw new \OutOfBoundsException('Package "' . $packageName . '" is not installed');
}





public static function getRootPackage()
{
$installed = self::getInstalled();

return $installed[0]['root'];
}







public static function getRawData()
{
return self::$installed;
}



















public static function reload($data)
{
self::$installed = $data;
self::$installedByVendor = array();
}




private static function getInstalled()
{
if (null === self::$canGetVendors) {
self::$canGetVendors = method_exists('Composer\Autoload\ClassLoader', 'getRegisteredLoaders');
}

$installed = array();

if (self::$canGetVendors) {
foreach (ClassLoader::getRegisteredLoaders() as $vendorDir => $loader) {
if (isset(self::$installedByVendor[$vendorDir])) {
$installed[] = self::$installedByVendor[$vendorDir];
} elseif (is_file($vendorDir.'/composer/installed.php')) {
$installed[] = self::$installedByVendor[$vendorDir] = require $vendorDir.'/composer/installed.php';
}
}
}

$installed[] = self::$installed;

return $installed;
}
}

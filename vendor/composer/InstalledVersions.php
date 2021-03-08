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
      'reference' => 'c2f807338583a9d504420964290483afb8d540df',
    ),
    'automattic/jetpack-abtest' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '67bd030126d364dc1d81e6103c56b3f67c43c665',
    ),
    'automattic/jetpack-assets' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => 'd8da6b7971cae985fe791d2107bc552dd2cd1b12',
    ),
    'automattic/jetpack-autoloader' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '6f65cb3ee20032439cb576a1aaf118b3755efd13',
    ),
    'automattic/jetpack-backup' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '72a1e68de6c1c85704f0c2fa6a752aeb2ab88374',
    ),
    'automattic/jetpack-blocks' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '38d16eb4ae40ba1dd4782a8a5ceac9f05f3511a7',
    ),
    'automattic/jetpack-compat' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '7f0ac52698a005b9d2e8be508f93522f640827c0',
    ),
    'automattic/jetpack-config' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '1e60943f1af667606437e6ce53f524bd1fda9e17',
    ),
    'automattic/jetpack-connection' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '1a1e327e3d0206b82199fa334ae2e83e72c9d376',
    ),
    'automattic/jetpack-connection-ui' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '90c1b66e786a9109b7a0e4e33bbc7376dade1941',
    ),
    'automattic/jetpack-constants' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '9f8ed1c0745f52511c2a5e126b419437deda6f66',
    ),
    'automattic/jetpack-device-detection' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '4ec20c4c651244eb653f55fac32f47527e73ef8e',
    ),
    'automattic/jetpack-error' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '4c6ada752e8bcb976b8d5502935aa1ce2b675f7e',
    ),
    'automattic/jetpack-heartbeat' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '200e1058b83c1092e4a0725886007e598dc33adb',
    ),
    'automattic/jetpack-jitm' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '9a7ba2b2b3dcd068b622657b947cbf4897d727d7',
    ),
    'automattic/jetpack-lazy-images' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => 'e6170c8e3accf9e887ffbea85067fb446bf7389f',
    ),
    'automattic/jetpack-licensing' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '01c4e9417bf376cc7d961a3866f85f4ff7a83b7e',
    ),
    'automattic/jetpack-logo' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => 'fe8674ad69a13b96f5f6c064c10ea4449cf8af13',
    ),
    'automattic/jetpack-options' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '03e5f24ded3522c912f5d5a1bc094d53a9ae1bc1',
    ),
    'automattic/jetpack-partner' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '5b79c8a08e90e6f86863b28f8450182ae7b2e045',
    ),
    'automattic/jetpack-redirect' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => 'ceae5a0eaccac1f2a0cde3a938e76e82f450b3ce',
    ),
    'automattic/jetpack-roles' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '90d8ece525e5cc0abec5f940590183133b0b5517',
    ),
    'automattic/jetpack-status' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '9adfa5092621b9d658f7bca3149534e377f2b438',
    ),
    'automattic/jetpack-sync' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '4ab8291c376eb507454b78cb5503006d8104d150',
    ),
    'automattic/jetpack-terms-of-service' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => 'a6655799313cb6d4b40c6bb3328120c87fd850d7',
    ),
    'automattic/jetpack-tracking' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => 'd4c348c1c4e78162dc05c269c435e4a8d13ca9f7',
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

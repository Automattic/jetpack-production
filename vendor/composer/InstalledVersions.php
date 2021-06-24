<?php











namespace Composer;

use Composer\Autoload\ClassLoader;
use Composer\Semver\VersionParser;








class InstalledVersions
{
private static $installed = array (
  'root' => 
  array (
    'pretty_version' => 'dev-master',
    'version' => 'dev-master',
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
      'pretty_version' => 'dev-master',
      'version' => 'dev-master',
      'aliases' => 
      array (
      ),
      'reference' => NULL,
    ),
    'automattic/jetpack-a8c-mc-stats' => 
    array (
      'pretty_version' => '1.4.x-dev',
      'version' => '1.4.9999999.9999999-dev',
      'aliases' => 
      array (
      ),
      'reference' => '1c4d93aacda335d99aa9364fb1694d19ae047f69',
    ),
    'automattic/jetpack-abtest' => 
    array (
      'pretty_version' => '1.9.x-dev',
      'version' => '1.9.9999999.9999999-dev',
      'aliases' => 
      array (
      ),
      'reference' => 'f8004255209eec592fcfc79f6cec0fd36efa565a',
    ),
    'automattic/jetpack-assets' => 
    array (
      'pretty_version' => '1.11.x-dev',
      'version' => '1.11.9999999.9999999-dev',
      'aliases' => 
      array (
      ),
      'reference' => 'aeb6d8ee4a2e297a55c713f2fdc4500ec8bd3f64',
    ),
    'automattic/jetpack-autoloader' => 
    array (
      'pretty_version' => '2.10.x-dev',
      'version' => '2.10.9999999.9999999-dev',
      'aliases' => 
      array (
      ),
      'reference' => '70d4b7cad4646a6370bcc2d2557b939691390c43',
    ),
    'automattic/jetpack-backup' => 
    array (
      'pretty_version' => '1.1.x-dev',
      'version' => '1.1.9999999.9999999-dev',
      'aliases' => 
      array (
      ),
      'reference' => '707700a99ecaa4ff0a45725c860ce88dcd6ea417',
    ),
    'automattic/jetpack-blocks' => 
    array (
      'pretty_version' => '1.4.x-dev',
      'version' => '1.4.9999999.9999999-dev',
      'aliases' => 
      array (
      ),
      'reference' => '23ca31e8f20c7c4a16e5151ab995d9f5bc9418b8',
    ),
    'automattic/jetpack-compat' => 
    array (
      'pretty_version' => '1.6.x-dev',
      'version' => '1.6.9999999.9999999-dev',
      'aliases' => 
      array (
      ),
      'reference' => '53f25e528b6c86b6b469668f2c9c7195e4200da8',
    ),
    'automattic/jetpack-config' => 
    array (
      'pretty_version' => '1.4.x-dev',
      'version' => '1.4.9999999.9999999-dev',
      'aliases' => 
      array (
      ),
      'reference' => '7cf9418990ec78a575e0a00893f8de32c32451a3',
    ),
    'automattic/jetpack-connection' => 
    array (
      'pretty_version' => '1.28.x-dev',
      'version' => '1.28.9999999.9999999-dev',
      'aliases' => 
      array (
      ),
      'reference' => '1eb1680b12c613bb6b02855cf851e13b308abf17',
    ),
    'automattic/jetpack-connection-ui' => 
    array (
      'pretty_version' => '1.2.x-dev',
      'version' => '1.2.9999999.9999999-dev',
      'aliases' => 
      array (
      ),
      'reference' => '7a72dcab6ad7e6d03881c4501734dcef7451a7f7',
    ),
    'automattic/jetpack-constants' => 
    array (
      'pretty_version' => '1.6.x-dev',
      'version' => '1.6.9999999.9999999-dev',
      'aliases' => 
      array (
      ),
      'reference' => 'b375c857ba8d83ac32cf2e6b5bbcc102212e3e2e',
    ),
    'automattic/jetpack-device-detection' => 
    array (
      'pretty_version' => '1.4.x-dev',
      'version' => '1.4.9999999.9999999-dev',
      'aliases' => 
      array (
      ),
      'reference' => '8a58bf4e9eeb1c6e34bb023a3c39f3ef6f755e3d',
    ),
    'automattic/jetpack-error' => 
    array (
      'pretty_version' => '1.3.x-dev',
      'version' => '1.3.9999999.9999999-dev',
      'aliases' => 
      array (
      ),
      'reference' => '1eb15857aab16d7c3c40df8898d09124f1d18a87',
    ),
    'automattic/jetpack-heartbeat' => 
    array (
      'pretty_version' => '1.3.x-dev',
      'version' => '1.3.9999999.9999999-dev',
      'aliases' => 
      array (
      ),
      'reference' => 'c6c535deabc5499711d47395f14406272b9e3daf',
    ),
    'automattic/jetpack-identity-crisis' => 
    array (
      'pretty_version' => '0.1.x-dev',
      'version' => '0.1.9999999.9999999-dev',
      'aliases' => 
      array (
      ),
      'reference' => 'c96db7d6900873d5e7e548f9db9a8f70668c3f7e',
    ),
    'automattic/jetpack-jitm' => 
    array (
      'pretty_version' => '1.16.x-dev',
      'version' => '1.16.9999999.9999999-dev',
      'aliases' => 
      array (
      ),
      'reference' => '97ee84455750ad74eff977ea1028a5a200e4dcc2',
    ),
    'automattic/jetpack-lazy-images' => 
    array (
      'pretty_version' => '1.5.x-dev',
      'version' => '1.5.9999999.9999999-dev',
      'aliases' => 
      array (
      ),
      'reference' => '62ca0afef2abb9b514ecb1bb438d803c967e0c09',
    ),
    'automattic/jetpack-licensing' => 
    array (
      'pretty_version' => '1.4.x-dev',
      'version' => '1.4.9999999.9999999-dev',
      'aliases' => 
      array (
      ),
      'reference' => '881bb5f3c3cdfbee75f5a5d08d0447dfe5a4a4b6',
    ),
    'automattic/jetpack-logo' => 
    array (
      'pretty_version' => '1.5.x-dev',
      'version' => '1.5.9999999.9999999-dev',
      'aliases' => 
      array (
      ),
      'reference' => 'c6489b7b9e0732433f3e2f57b776a5e0bcc0df85',
    ),
    'automattic/jetpack-options' => 
    array (
      'pretty_version' => '1.13.x-dev',
      'version' => '1.13.9999999.9999999-dev',
      'aliases' => 
      array (
      ),
      'reference' => 'dca10be7b61c45ff68c8a0f36cae170567403142',
    ),
    'automattic/jetpack-partner' => 
    array (
      'pretty_version' => '1.5.x-dev',
      'version' => '1.5.9999999.9999999-dev',
      'aliases' => 
      array (
      ),
      'reference' => '124a0048e91ecd8b33c0534f6aaef170f5b8062d',
    ),
    'automattic/jetpack-password-checker' => 
    array (
      'pretty_version' => '0.1.x-dev',
      'version' => '0.1.9999999.9999999-dev',
      'aliases' => 
      array (
      ),
      'reference' => 'b381dd92fb432dc7f09cf7bac2f29128ca2a0070',
    ),
    'automattic/jetpack-redirect' => 
    array (
      'pretty_version' => '1.6.x-dev',
      'version' => '1.6.9999999.9999999-dev',
      'aliases' => 
      array (
      ),
      'reference' => '11a8bc66ab61110aa054d805d267a3a0d8fa8477',
    ),
    'automattic/jetpack-roles' => 
    array (
      'pretty_version' => '1.4.x-dev',
      'version' => '1.4.9999999.9999999-dev',
      'aliases' => 
      array (
      ),
      'reference' => '9585385fe0835219f4dc57666dc787159c586ed5',
    ),
    'automattic/jetpack-status' => 
    array (
      'pretty_version' => '1.8.x-dev',
      'version' => '1.8.9999999.9999999-dev',
      'aliases' => 
      array (
      ),
      'reference' => 'd60d692dba6fd6440659cb83da54dd45805bf332',
    ),
    'automattic/jetpack-sync' => 
    array (
      'pretty_version' => '1.23.x-dev',
      'version' => '1.23.9999999.9999999-dev',
      'aliases' => 
      array (
      ),
      'reference' => '8fde91b504767dd2cb9d553a789c437b1e13972a',
    ),
    'automattic/jetpack-terms-of-service' => 
    array (
      'pretty_version' => '1.9.x-dev',
      'version' => '1.9.9999999.9999999-dev',
      'aliases' => 
      array (
      ),
      'reference' => '34c3a58c9666ec3c77831a6701e8b34eeb3219b0',
    ),
    'automattic/jetpack-tracking' => 
    array (
      'pretty_version' => '1.13.x-dev',
      'version' => '1.13.9999999.9999999-dev',
      'aliases' => 
      array (
      ),
      'reference' => '53505a13e574ab862793c03dc85ef994a17d4242',
    ),
    'nojimage/twitter-text-php' => 
    array (
      'pretty_version' => 'v3.1.2',
      'version' => '3.1.2.0',
      'aliases' => 
      array (
      ),
      'reference' => '979bcf6a92d543b61588c7c0c0a87d0eb473d8f6',
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
@trigger_error('getRawData only returns the first dataset loaded, which may not be what you expect. Use getAllRawData() instead which returns all datasets for all autoloaders present in the process.', E_USER_DEPRECATED);

return self::$installed;
}







public static function getAllRawData()
{
return self::getInstalled();
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

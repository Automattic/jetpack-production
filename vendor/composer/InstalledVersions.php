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
      'reference' => '027cf77320db85dd147ed9f9ba4c577c4f040bec',
    ),
    'automattic/jetpack-abtest' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => 'b9d528b1e5a05a983ee6eb577815ef8bef5660df',
    ),
    'automattic/jetpack-assets' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '94c5737d1a3fed53c47b9c60974df1d73bb75023',
    ),
    'automattic/jetpack-autoloader' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '253e8f1d977428c180d62012cc0df1fcbef283ee',
    ),
    'automattic/jetpack-backup' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '836dd9b95dda8bdfec3ee9b01f17a700b38b286f',
    ),
    'automattic/jetpack-blocks' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '25c2e9b30e94a10e67527ef59c1ea37708d43fa4',
    ),
    'automattic/jetpack-compat' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => 'afe786bb8478eb38897b321ec444ea3c85331300',
    ),
    'automattic/jetpack-config' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '92c40a7eaaa44ab7644e92e9bcb2e84d07ee6a74',
    ),
    'automattic/jetpack-connection' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '2b7433ca9f8e06e42b58a44a924b1c9628af3fde',
    ),
    'automattic/jetpack-connection-ui' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '11bda223d3a205687ac5400b5ff80532f0537e23',
    ),
    'automattic/jetpack-constants' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => 'a9af9eab75a3f7562c8aa608f2397706de97561b',
    ),
    'automattic/jetpack-device-detection' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '724096c4b6a931b6fab42a4a6684d644b9a0cc32',
    ),
    'automattic/jetpack-error' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => 'ada7159983b7abf22c98c65790066ee65853ec53',
    ),
    'automattic/jetpack-heartbeat' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '98e72b68d6f3616b8672b40e814af384a8b2c855',
    ),
    'automattic/jetpack-jitm' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '12c5dfda2dce5eecbb0c38b2e31a2892b119768b',
    ),
    'automattic/jetpack-lazy-images' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '0070c1572d155297cf2b24d6f93bb47bea80bbe0',
    ),
    'automattic/jetpack-licensing' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '2696201c2f5bf8da087be7f58fa690cad78a95e5',
    ),
    'automattic/jetpack-logo' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '1297dff1583a640669d7b880db67ee932b9694f2',
    ),
    'automattic/jetpack-options' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '87e8d1f957eec4c96eae4999292ccc6be682b01b',
    ),
    'automattic/jetpack-partner' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '14a63058e38dc6a2732b8a21392a9c8c315b95a6',
    ),
    'automattic/jetpack-redirect' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '4fcd3d82428a83ebd6334e3dc1d353af94bbeaf8',
    ),
    'automattic/jetpack-roles' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => 'b725a27b6d225cd6c9fca41ffa65da6537c140df',
    ),
    'automattic/jetpack-status' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '8aa2b73446208d74492573731eae4b38bdb4a4c2',
    ),
    'automattic/jetpack-sync' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => 'c07efe653775c74d514dda46e67ba1cce5336cd5',
    ),
    'automattic/jetpack-terms-of-service' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '29b1aa14c89e21e05775f463bd33b286c44ba50e',
    ),
    'automattic/jetpack-tracking' => 
    array (
      'pretty_version' => 'dev-monorepo',
      'version' => 'dev-monorepo',
      'aliases' => 
      array (
      ),
      'reference' => '3028806d7140edf7f8ee50dd4890abf84f6eec3f',
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

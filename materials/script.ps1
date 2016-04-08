$site = Get-SPweb "http://localhost"
$site.MasterUrl = "/_catalogs/masterpage/custom2.master"
$site.CustomMasterUrl = "/_catalogs/masterpage/custom2.master"
$site.Update()
$site.Dispose()
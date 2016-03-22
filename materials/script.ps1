$site = Get-SPweb "http://dev-spd2013"
$site.MasterUrl = "/_catalogs/masterpage/custom2.master"
$site.CustomMasterUrl = "/_catalogs/masterpage/custom2.master"
$site.Update()
$site.Dispose
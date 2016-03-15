using System;
using System.Runtime.InteropServices;
using System.Security.Permissions;
using Microsoft.SharePoint;

namespace SPSandboxedApp.Features.Feature1
{
    /// <summary>
    /// This class handles events raised during feature activation, deactivation, installation, uninstallation, and upgrade.
    /// </summary>
    /// <remarks>
    /// The GUID attached to this class may be used during packaging and should not be modified.
    /// </remarks>

    [Guid("f35f9c8e-1cc7-418f-92ba-0383b7fbf312")]
    public class Feature1EventReceiver : SPFeatureReceiver
    {
        // Uncomment the method below to handle the event raised after a feature has been activated.

        //public override void FeatureActivated(SPFeatureReceiverProperties properties)
        //{
        //    SPSite site = properties.Feature.Parent as SPSite;

        //    if (site != null)
        //    {
        //        SPWeb topLevelSite = site.RootWeb;

        //        // Calculate relative path to site from Web Application root.
        //        string webAppRelativePath = topLevelSite.ServerRelativeUrl;
        //        if (!webAppRelativePath.EndsWith("/"))
        //        {
        //            webAppRelativePath += "/";
        //        }

        //        // Activate publishing infrastructure
        //        site.Features.Add(new Guid("f6924d36-2fa8-4f0b-b16d-06b7250180fa"), true);

        //        // Enumerate through each site and apply branding.
        //        foreach (SPWeb web in site.AllWebs)
        //        {
        //            // Activate the publishing feature for all webs.
        //            web.Features.Add(new Guid("94c94ca6-b32f-4da9-a9e3-1f3d343d7ecb"), true);
        //            web.MasterUrl = webAppRelativePath + "_catalogs/masterpage/custom.master";
        //            web.CustomMasterUrl = webAppRelativePath + "_catalogs/masterpage/custom.master";

        //            web.Update();
        //        }
        //    }
        //}


        // Uncomment the method below to handle the event raised before a feature is deactivated.

        //public override void FeatureDeactivating(SPFeatureReceiverProperties properties)
        //{
        //}


        // Uncomment the method below to handle the event raised after a feature has been installed.

        //public override void FeatureInstalled(SPFeatureReceiverProperties properties)
        //{
        //}


        // Uncomment the method below to handle the event raised before a feature is uninstalled.

        //public override void FeatureUninstalling(SPFeatureReceiverProperties properties)
        //{
        //}

        // Uncomment the method below to handle the event raised when a feature is upgrading.

        //public override void FeatureUpgrading(SPFeatureReceiverProperties properties, string upgradeActionName, System.Collections.Generic.IDictionary<string, string> parameters)
        //{
        //}
    }
}

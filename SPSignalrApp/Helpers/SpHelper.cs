using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Script.Serialization;
using Microsoft.SharePoint;

namespace SPSignalrApp.Helpers
{
    public class Item
    {
        public string Title { get; set; }
    }

    public class SpHelper
    {
        public static string SiteUrl = @"http://localhost";
        //public static string ListUrl = @"Lists/VJDListInstance";

        public bool AddSpItem(string listUrl, string message)
        {
            using (var siteCollection = new SPSite(SiteUrl))
            {
                using (var currentSite = siteCollection.RootWeb)
                {
                    currentSite.AllowUnsafeUpdates = true;

                    var currentList = currentSite.GetList(listUrl);
                    var newItem = currentList.GetItems().Add();

                    newItem["Title"] = message;
                    newItem.Update();

                    currentSite.AllowUnsafeUpdates = false;
                }
            }

            return false;
        }

        public string GetSpItems(string listUrl, string spQuery)
        {
            var resultItems = new List<Item>();
            try
            {
                using (var siteCollection = new SPSite(SiteUrl))
                {
                    using (var currentSite = siteCollection.RootWeb)
                    {
                        var currentList = currentSite.GetList(listUrl);

                        var query = new SPQuery
                        {
                            Query = spQuery
                        };
                        query.RowLimit = 5;

                        SPListItemCollection items = currentList.GetItems(query);
                        if (items.Count > 0)
                        {
                            foreach (SPListItem item in items)
                            {
                                var userName = new SPFieldUserValue(currentSite, item["Author"].ToString()).User.Name;
                                if (item["Title"] != null)
                                    resultItems.Add(new Item { Title = userName + ": " + item["Title"].ToString() });

                            }
                            var jsSerializer = new JavaScriptSerializer();
                            var resultJson = jsSerializer.Serialize(resultItems);
                            return resultJson;
                        }
                    }
                }

            }
            catch (Exception ex)
            {
#if DEBUG
                throw;
#endif
            }
            return "no data";
        }
    }
}

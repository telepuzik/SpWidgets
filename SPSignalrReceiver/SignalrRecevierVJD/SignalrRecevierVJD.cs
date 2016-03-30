using Microsoft.AspNet.SignalR.ListItems;
using Microsoft.SharePoint;

namespace SPSignalrReceiver.SignalrRecevierVJD
{
    /// <summary>
    /// List Item Events
    /// </summary>
    public class SignalrRecevierVJD : SPItemEventReceiver
    {
        /// <summary>
        /// An item was added.
        /// </summary>
        public override void ItemAdded(SPItemEventProperties properties)
        {
            ListItems.Instance.NewItem("Новое " + properties.ListItem["ContentType"].ToString() + ": " + properties.ListItem["Title"].ToString());
            ListItems.Instance.GetListData();
            base.ItemAdded(properties);
        }

        /// <summary>
        /// An item was updated.
        /// </summary>
        public override void ItemUpdated(SPItemEventProperties properties)
        {
            ListItems.Instance.UpdatedItem("Изменено " + properties.ListItem["ContentType"].ToString() + ": " + properties.ListItem["Title"].ToString());
            ListItems.Instance.GetListData();
            base.ItemUpdated(properties);
        }

        /// <summary>
        /// An item was deleted.
        /// </summary>
        public override void ItemDeleting(SPItemEventProperties properties)
        {
            ListItems.Instance.DeletedItem("Удалено " + properties.ListItem["ContentType"].ToString() + ": " + properties.ListItem["Title"].ToString());
            ListItems.Instance.GetListData();
            base.ItemDeleted(properties);
        }


    }
}
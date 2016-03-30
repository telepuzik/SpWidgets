
using Microsoft.SharePoint;
using Microsoft.AspNet.SignalR.ListItems;

namespace SPSignalrReceiver.SignalrReceiverChat
{
    /// <summary>
    /// List Item Events
    /// </summary>
    public class SignalrReceiverChat : SPItemEventReceiver
    {
        /// <summary>
        /// An item was added.
        /// </summary>
        public override void ItemAdded(SPItemEventProperties properties)
        {
            ListItems.Instance.NewItem("Новое " + properties.ListItem["ContentType"].ToString() + ": " + properties.ListItem["Title"].ToString());
            ListItems.Instance.GetChatData();
            base.ItemAdded(properties);
        }

        /// <summary>
        /// An item was updated.
        /// </summary>
        public override void ItemUpdated(SPItemEventProperties properties)
        {
            ListItems.Instance.UpdatedItem("Изменено " + properties.ListItem["ContentType"].ToString() + ": " + properties.ListItem["Title"].ToString());
            ListItems.Instance.GetChatData();
            base.ItemUpdated(properties);
        }

        /// <summary>
        /// An item is being deleted.
        /// </summary>
        public override void ItemDeleting(SPItemEventProperties properties)
        {
            ListItems.Instance.DeletedItem("Удалено " + properties.ListItem["ContentType"].ToString() + ": " + properties.ListItem["Title"].ToString());
            ListItems.Instance.GetChatData();
            base.ItemDeleting(properties);
        }
    }
}
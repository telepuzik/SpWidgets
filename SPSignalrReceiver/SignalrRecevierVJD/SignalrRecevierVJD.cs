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
            var userName = new SPFieldUserValue(properties.Web, properties.ListItem["Author"].ToString()).User.Name;
            ListItems.Instance.NewEvent(new EventType().New,
                    properties.ListItem["Title"].ToString(),
                    properties.ListItem["ContentType"].ToString(), userName);
            base.ItemAdded(properties);
        }

        /// <summary>
        /// An item was updated.
        /// </summary>
        public override void ItemUpdated(SPItemEventProperties properties)
        {
            var userName = new SPFieldUserValue(properties.Web, properties.ListItem["Author"].ToString()).User.Name;
            ListItems.Instance.NewEvent(new EventType().Updated,
                    properties.ListItem["Title"].ToString(),
                    properties.ListItem["ContentType"].ToString(), userName);
            base.ItemUpdated(properties);
        }

        /// <summary>
        /// An item was deleted.
        /// </summary>
        public override void ItemDeleting(SPItemEventProperties properties)
        {
            var userName = new SPFieldUserValue(properties.Web, properties.ListItem["Author"].ToString()).User.Name;
            ListItems.Instance.NewEvent(new EventType().Deleted,
                    properties.ListItem["Title"].ToString(),
                    properties.ListItem["ContentType"].ToString(), userName);
            base.ItemDeleted(properties);
        }


    }
}
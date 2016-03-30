using Microsoft.AspNet.SignalR.Hubs;

namespace Microsoft.AspNet.SignalR.ListItems
{
    [HubName("listItems")]
    public class ListItemsHub : Hub
    {
        private readonly ListItems _listItems;

        public ListItemsHub() :
            this(ListItems.Instance)
        {}

        public ListItemsHub(ListItems listItems)
        {
            _listItems = listItems;
        }


        public void GetListData()
        {
            _listItems.GetListData();
        }

        public void GetChatData()
        {
            _listItems.GetChatData();
        }

        public void AddChatMessage(string message)
        {
            _listItems.AddChatMessage(message);
        }
    }
}
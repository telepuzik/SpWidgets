using System;
using System.Web.UI.WebControls;
using Microsoft.AspNet.SignalR.Hubs;
using SPSignalrApp.Helpers;

namespace Microsoft.AspNet.SignalR.ListItems
{
    public class ListItems
    {
        // Singleton instance
        private static readonly Lazy<ListItems> _instance = new Lazy<ListItems>(
            () => new ListItems(GlobalHost.ConnectionManager.GetHubContext<ListItemsHub>().Clients));

        private ListItems(IHubConnectionContext<dynamic> clients)
        {
            Clients = clients;
            //!!!!!!LoadDefaultStocks();
        }

        public static ListItems Instance => _instance.Value;

        private IHubConnectionContext<dynamic> Clients
        { get; }
        
        public void GetListData()
        {
            string query = "<Where>" +
                    "</Where>" +
                    "<OrderBy><FieldRef Name='Created' Ascending='False' /></OrderBy>" +
                    "<RowLimit>5</RowLimit>";

            var val = new SpHelper().GetSpItems("Lists/VJDListInstance", query);

            BroadcastGetListData(val);
        }

        private void BroadcastGetListData(string val)
        {
            Clients.All.listData(val);
        }

        public void GetChatData()
        {
            string query = "<Where>" +
                    "</Where>" +
                    "<OrderBy><FieldRef Name='Created' Ascending='False' /></OrderBy>" +
                    "<RowLimit>5</RowLimit>";

            var val = new SpHelper().GetSpItems("Lists/ChatList", query);

            BroadcastChatData(val);
        }

        private void BroadcastChatData(string val)
        {
            Clients.All.chatData(val);
        }

        public void AddChatMessage(string message)
        {
            var val = new SpHelper().AddSpItem("Lists/ChatList", message);

            //BroadcastChatData(val);
        }

        //Новый
        public void NewItem(string val)
        {
            BroadcastNewItem(val);
        }

        //Новый
        private void BroadcastNewItem(string val)
        {
            Clients.All.newListData(val);
        }

        //Обновление
        public void UpdatedItem(string val)
        {
            BroadcastUpdatedItem(val);
        }

        //Обновление
        private void BroadcastUpdatedItem(string val)
        {
            Clients.All.updatedListData(val);
        }


        //Удаление
        public void DeletedItem(string val)
        {
            BroadcastDeletedItem(val);
        }

        //Удаление
        private void BroadcastDeletedItem(string val)
        {
            Clients.All.deletedListData(val);
        }

        public void NewEvent(string eventType, string message, string messageContentType , string messageUser)
        {
            String resultString = eventType;
            if (messageContentType == "Элемент")
            {
                resultString += " сообщение";
            }
            else
            {
                resultString += messageContentType;
            }

            resultString += " от " + messageUser;

            resultString += ": " + message;

            BroadcastNewEvent(eventType.ToString(), resultString);
            GetChatData();
        }

        private void BroadcastNewEvent(string eventType, string message)
        {
            Clients.All.newEvent(eventType, message);
        }
    }

    public class EventType
    {
        public string New => "Новое";
        public string Updated => "Изменено";
        public string Deleted => "Deleted";
    }
}
<%@ Assembly Name="$SharePoint.Project.AssemblyFullName$" %>
<%@ Import Namespace="Microsoft.SharePoint.ApplicationPages" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="asp" Namespace="System.Web.UI" Assembly="System.Web.Extensions, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" %>
<%@ Import Namespace="Microsoft.SharePoint" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ChatAppPage.aspx.cs" Inherits="SPSignalrApp.Layouts.SPSignalrApp.ChatAppPage" DynamicMasterPageFile="~masterurl/default.master" %>

<asp:Content ID="PageHead" ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <script src="/_Layouts/15/SPSignalrApp/jquery-1.10.2.min.js"></script>
    <script src="/_Layouts/15/SPSignalrApp/jquery.color-2.1.2.min.js"></script>
    <script src="/_Layouts/15/SPSignalrApp/Scripts/jquery.signalR-2.2.0.js"></script>
    <script src="/_Layouts/15/SPSignalrApp/Scripts/toastr.min.js"></script>

    <link href="/_Layouts/15/SPSignalrApp/toastr.min.css" rel="stylesheet" />

    <script src="/_Layouts/15/SPSignalrApp/SignalR.Chat.js"></script>

    <script src="/signalr/hubs"></script>
</asp:Content>

<asp:Content ID="Main" ContentPlaceHolderID="PlaceHolderMain" runat="server">
    <input type="button" id="update" value="Update Items" />
    <div id="listitems">no data</div>
</asp:Content>

<asp:Content ID="PageTitle" ContentPlaceHolderID="PlaceHolderPageTitle" runat="server">
Application Page
</asp:Content>

<asp:Content ID="PageTitleInTitleArea" ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server" >
My Application Page
</asp:Content>

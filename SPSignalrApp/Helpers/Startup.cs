using System.Collections;
using System.Collections.Generic;
using System.Reflection;
using Microsoft.AspNet.SignalR.Hubs;
using Owin;

namespace Microsoft.AspNet.SignalR.StockTicker
{
    public static class Startup
    {
        public static void ConfigureSignalR(IAppBuilder app)
        {
            // For more information on how to configure your application using OWIN startup, visit http://go.microsoft.com/fwlink/?LinkID=316888

             app.MapSignalR();
        }
        public static void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
            GlobalHost.DependencyResolver.Register(typeof(Microsoft.AspNet.SignalR.Hubs.IAssemblyLocator), () => new AssemblyLocator());
        }
    }

    public class AssemblyLocator : IAssemblyLocator
    {
        public IList<Assembly> GetAssemblies()
        {
            // list your hubclass assemblies here
            return new System.Collections.Generic.List<Assembly>(new[] { typeof(StockTickerHub).Assembly});
        }
    }
}
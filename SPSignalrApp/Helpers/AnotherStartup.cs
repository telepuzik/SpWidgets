using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using Microsoft.AspNet.SignalR.StockTicker;
using Microsoft.AspNet.SignalR.Transports;
using Owin;

namespace SPSignalrApp.Helpers
{
    public static class AnotherStartup
    {
        public static void ConfigureSignalR(IAppBuilder app)
        {
            // For more information on how to configure your application using OWIN startup, visit http://go.microsoft.com/fwlink/?LinkID=316888

            app.MapSignalR();
        }
        public static void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
            //GlobalHost.DependencyResolver.Register(typeof(Microsoft.AspNet.SignalR.Hubs.IAssemblyLocator), () => new Microsoft.AspNet.SignalR.StockTicker.AssemblyLocator());
            GlobalHost.DependencyResolver.Register(typeof(IAssemblyLocator), () => new DefaultAssemblyLocator());
        }
    }

    public class AssemblyLocator : IAssemblyLocator
    {
        public IList<Assembly> GetAssemblies()
        {
            // list your hubclass assemblies here
            return new System.Collections.Generic.List<Assembly>(new[] { typeof(StockTickerHub).Assembly });
        }
    }
}

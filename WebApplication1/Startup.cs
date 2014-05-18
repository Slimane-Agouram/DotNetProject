using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(GaragisteProjet.Startup))]
namespace GaragisteProjet
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}

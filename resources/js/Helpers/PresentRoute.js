export function returnRoute(layout, routes) {
    var presentRoute = routes.reduce((proutes, nxt) => {
        var url = window.location.pathname;
        var route = `${layout}${nxt.route}`;
        if (route == url) {
            proutes.push(`menu-${nxt.name}`);
        } else {
            nxt.items &&
                nxt.items.forEach(item => {
                    var menu_route = `${layout}${item.route}`;
                    if (menu_route == url) {
                        proutes.push(`menu-${item.name}`);
                    }
                });
        }
        return proutes;
    }, []);
    var presentmenu;
    var dpresentroute = presentRoute[0] && presentRoute[0].split("-")[1];
    routes.forEach(route => {
        route.items &&
            route.items.forEach(item => {
                if (item.name === dpresentroute) {
                    presentmenu = [`menu-${route.name}`];
                }
            });
    });
    return [presentRoute, presentmenu];
}

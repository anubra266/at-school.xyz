export function returnRoute(routes) {
    var presentRoute = routes.reduce((proutes, nxt) => {
        if (nxt.route == window.location.pathname) {
            proutes.push(`menu-${nxt.name}`);
        } else {
            nxt.items &&
                nxt.items.forEach(item => {
                    if (`/${item.route}` == window.location.pathname) {
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

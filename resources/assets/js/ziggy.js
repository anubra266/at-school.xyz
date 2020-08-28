    var Ziggy = {
        namedRoutes: {"landing":{"uri":"\/","methods":["GET","HEAD"],"domain":null},"login":{"uri":"login","methods":["GET","HEAD"],"domain":null},"logout":{"uri":"logout","methods":["POST"],"domain":null},"register":{"uri":"register","methods":["GET","HEAD"],"domain":null},"password.request":{"uri":"password\/reset","methods":["GET","HEAD"],"domain":null},"password.email":{"uri":"password\/email","methods":["POST"],"domain":null},"password.reset":{"uri":"password\/reset\/{token}","methods":["GET","HEAD"],"domain":null},"password.update":{"uri":"password\/reset","methods":["POST"],"domain":null},"password.confirm":{"uri":"password\/confirm","methods":["GET","HEAD"],"domain":null},"home":{"uri":"home","methods":["GET","HEAD"],"domain":null},"organization.index":{"uri":"organization","methods":["GET","HEAD"],"domain":null},"organization.create":{"uri":"organization","methods":["POST"],"domain":null},"organization.change_code":{"uri":"organization\/{organization}\/newcode","methods":["PATCH"],"domain":null},"organization.edit":{"uri":"organization\/{organization}","methods":["PATCH"],"domain":null},"environ.index":{"uri":"environ","methods":["GET","HEAD"],"domain":null},"environ.create":{"uri":"environ","methods":["POST"],"domain":null},"environ.change_code":{"uri":"environ\/{environ}\/newcode","methods":["PATCH"],"domain":null},"environ.edit":{"uri":"environ\/{environ}","methods":["PATCH"],"domain":null},"class.index":{"uri":"class","methods":["GET","HEAD"],"domain":null},"class.join":{"uri":"class\/join","methods":["POST"],"domain":null},"class.leave":{"uri":"class\/{classroom}\/leave","methods":["PATCH"],"domain":null},"classroom.index":{"uri":"classroom","methods":["GET","HEAD"],"domain":null},"classroom.create":{"uri":"classroom","methods":["POST"],"domain":null},"classroom.change_code":{"uri":"classroom\/{classroom}\/newcode","methods":["PATCH"],"domain":null},"classroom.edit":{"uri":"classroom\/{classroom}","methods":["PATCH"],"domain":null},"classroom.home":{"uri":"classroom\/{classroom}","methods":["GET","HEAD"],"domain":null},"classroom.members":{"uri":"classroom\/{classroom}\/assessments\/theory","methods":["GET","HEAD"],"domain":null}},
        baseUrl: 'http://localhost/',
        baseProtocol: 'http',
        baseDomain: 'localhost',
        basePort: false,
        defaultParameters: []
    };

    if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
        for (var name in window.Ziggy.namedRoutes) {
            Ziggy.namedRoutes[name] = window.Ziggy.namedRoutes[name];
        }
    }

    export {
        Ziggy
    }

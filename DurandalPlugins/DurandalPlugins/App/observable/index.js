define(['plugins/router'], function(router) {

    var childRouter = router.createChildRouter()
        .makeRelative({
            moduleId: 'observable',
            fromParent: true
        }).map([
            { route: ['', 'simple'], moduleId: 'simple', title: 'Simplest Example'},
            { route: 'person', moduleId: 'person', title: 'Person'},
            { route: 'people', moduleId: 'people', title: 'People'}
        ]).buildNavigationModel();

    return {
        router: childRouter
    };
});
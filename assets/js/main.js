/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/XtN0RS by Jason Garber
 * ======================================================================== */

 SITENAME = {

    common: {

        init: function ()
        {
            /*
             * Check to see if the current browser supports DOM level 2 events e.g. `addEventListener`.
             * Internet Explorer 8 and below does not.
             * Based on: http://responsivenews.co.uk/post/18948466399/cutting-the-mustard
             */

            var isModernBrowser = ('addEventListener' in window) ? true : false;

            /* ==========================================================================
               Placeholder
               ========================================================================== */

            $('input, textarea').placeholder();
        }
    },

    controller: {

        init: function ()
        {

        },

        view: function ()
        {

        }
    }
};

UTIL = {

    exec: function (controller, action)
    {
        var ns = SITENAME;
        action = ( action === undefined ) ? 'init' : action;

        if (controller !== '' && ns[controller] && typeof ns[controller][action] == 'function')
        {
            ns[controller][action]();
        }
    },

    init: function ()
    {
        var body = document.body;
        var controller = body.getAttribute('data-controller');
        var action = body.getAttribute('data-action');

        UTIL.exec('common');
        UTIL.exec(controller);
        UTIL.exec(controller, action);
    }
};

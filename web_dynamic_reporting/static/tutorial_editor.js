(function() {
    'use strict';
    var website = odoo.website;
    website.odoo_website = {};
    website.snippet.options.web_dynamic_snippet_1_options = website.snippet.Option.extend({
        on_focus: function() {
            alert("Warning! You are focusing on the snippet");
        }
    })
})();




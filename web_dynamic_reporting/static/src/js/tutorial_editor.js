// (function() {
//     'use strict';
//     var website = odoo.website;
//     website.openerp_website = {};
//     website.snippet.options.web_dynamic_field_snippet = website.snippet.Option.extend({
//         on_focus: function() {
//             alert("Warning! You are focusing on the snippet");
//         }
//     })
// })();

options.registry.gallery = options.Class.extend({
images_add : function(type) {
    if(type !== "click") return;
    var self = this;
    var $container = this.$target.find(".container:first");
    var editor = new widget.MediaDialog(this.$target.closest('.o_editable'), null, {select_images: true});
    editor.appendTo(document.body);
    var index = Math.max(0, _.max(_.map(this.$target.find("img").get(), function (img) { return img.dataset.index | 0; })) + 1);
    editor.on('saved', this, function (attachments) {
        for (var i = 0 ; i < attachments.length; i++) {
            var img = $('<img class="img img-responsive mb8 mt8"/>')
                .attr("src", attachments[i].src)
                .attr('data-index', index+i)
                .data('index', index+i)
                .appendTo($container);
        }
        self.reapply(); // refresh the $target
        setTimeout(function () {
            self.buildingBlock.make_active(self.$target);
        },0);
    });
},
}); // options.Class.extend
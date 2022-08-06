layui.config({
    version: true,
    base: 'module/'
}).extend({
    cascader: 'cascader/cascader',
    tags: 'tags/tags',
    formDesign: 'formDesign/formDesign',
}).use(['form', 'jquery', 'flow', 'formDesign', 'tags'], function () {
    var form = layui.form;
    var $ = layui.jquery;
    var tags = layui.tags;
    var formDesign = layui.formDesign;

    formDesign.render({
        elem: '#formBuilder'
        , eval: '#formdesign'
    });

    console.log('success');

    layui.flow.load({
        elem: '#item-list'
        , done: function (page, next) {
            var list = [];
            $.get('//api.swiftadmin.net/form/?page=' + page, function (res) {
                layui.each(res.data, function (index, item) {
                    list.push(item);
                });
                next(list.join(''), page < res.total);
            })
        }
    });
})

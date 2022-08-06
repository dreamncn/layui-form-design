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


})

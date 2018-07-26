Vue.component('v-input', {
    data: function() {
        return {
            firstEdit: true
        }
    },
    template: "<div class=\"form-group\">\n" +
    '<label :style="[!firstEdit? {\'color\': \'red\'}: {}]" >{{field.name}}</label>\n' +
    "<input type=\"text\" class=\"form-control\" v-model='field.value' v-on:input='firstEdit = false'>\n" +
    "</div>",
    props: ['field']
});

var form = new Vue({
    el: '.l3-form',
    data: {
        info: [
            {
                name: 'Name',
                value: '',
                pattern: /^[a-zA-Z ]{2,30}$/
            },
            {
                name: 'Phone',
                value: '',
                pattern: /^[0-9]{7,14}$/
            },
            {
                name: 'Email',
                value: '',
                pattern: /.+/
            },
            {
                name: 'Some Field 1',
                value: '',
                pattern: /.+/
            },
            {
                name: 'Some Field 2',
                value: '',
                pattern: /.+/
            }
        ]
    }
});
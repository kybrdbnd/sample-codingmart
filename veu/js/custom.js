new Vue({
    el: '#app',
    data: {
        firstname: '',
        lastname: '',
        email: '',
        form_data: [],
        update_index: '',
        submit_btn: true,
        update_btn: false,
        cancel_btn: false,
    },
    methods: {
        submitData: function() {
            table_row = { firstname: this.firstname, lastname: this.lastname, email: this.email }
            this.form_data.push(table_row);
            this.firstname = ''
            this.lastname = ''
            this.email = ''
        },
        deleteData: function(id) {
            // console.log(id);
            this.form_data.splice(id, 1);
            this.firstname = ''
            this.lastname = ''
            this.email = ''
            this.submit_btn = true;
            this.update_btn = false;
            this.cancel_btn = false;
        },
        editData: function(id) {
            for (var i = 0; i < this.form_data.length; i++) {
                if (i == id) {
                    this.firstname = this.form_data[id].firstname;
                    this.lastname = this.form_data[id].lastname;
                    this.email = this.form_data[id].email;
                    this.update_index = id;
                    this.submit_btn = false;
                    this.update_btn = true;
                    this.cancel_btn = true;
                }else{
                	this.edit_btn = false;
                	this.del_btn = false;
                }
            }

        },
        updateData: function() {
            this.form_data[this.update_index].firstname = this.firstname;
            this.form_data[this.update_index].lastname = this.lastname;
            this.form_data[this.update_index].email = this.email;
            this.firstname = ''
            this.lastname = ''
            this.email = ''
            this.submit_btn = true;
            this.cancel_btn = false;
            this.update_btn = false;
        },
        cancelData: function() {
            this.firstname = ''
            this.lastname = ''
            this.email = ''
            this.submit_btn = true;
            this.cancel_btn = false;
            this.update_btn = false;

        }
    }
})

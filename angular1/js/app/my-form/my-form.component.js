'use strict';

angular.module('myForm').
component('myForm', {
    templateUrl: '/templates/my-form.html',
    controller: function($scope) {
        var update_index = -1;
        var always_present;
        // $scope.check_condition = false;
        $scope.cancelbutton = true;
        $scope.updatebutton = true;
        $scope.submitdata = true;
        $scope.savedata = true;
        var table_items = []
        var click = 0;
        $scope.reverse = true;
        $scope.sortBy = function(propertyName) {
            $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
            $scope.propertyName = propertyName;
        }
        $scope.submitData = function() {
            if ($scope.userform.$valid) {
                click += 1;
                var form_date = new Date();
                var single_row = { id: click, firstname: $scope.firstname, lastname: $scope.lastname, email: $scope.email, date: form_date }
                table_items.push(single_row);
                $scope.items = table_items;
                $scope.firstname = '';
                $scope.lastname = '';
                $scope.email = '';
            }
        }
        $scope.deleteData = function(id) {
            table_items.splice(id, 1);
            $scope.firstname = '';
            $scope.lastname = '';
            $scope.email = '';
            $scope.updatebutton = true;
            $scope.submitdata = true;
            $scope.cancelbutton = true;
            $scope.del_btn = {}
            $scope.upd_btn = {}
        }

        $scope.editData = function(id) {
            $scope.del_btn = {}
            $scope.upd_btn = {}
            $scope.updatebutton = false;
            $scope.submitdata = false;
            $scope.cancelbutton = false;
            for (var i = 0; i < table_items.length; i++) {
                if (table_items[i].id == id) {
                    $scope.firstname = table_items[i].firstname;
                    $scope.lastname = table_items[i].lastname;
                    $scope.email = table_items[i].email;
                    update_index = i;
                } else {
                    $scope.del_btn[table_items[i].id] = true;
                    $scope.upd_btn[table_items[i].id] = true;
                }

            }
        }

        $scope.updateData = function() {
            $scope.savedata = false;
            table_items[update_index].firstname = $scope.firstname;
            table_items[update_index].lastname = $scope.lastname;
            table_items[update_index].email = $scope.email;
            $scope.firstname = '';
            $scope.lastname = '';
            $scope.email = '';
        }
        $scope.cancelData = function() {
            $scope.updatebutton = true;
            $scope.submitdata = true;
            $scope.cancelbutton = true;
            $scope.firstname = '';
            $scope.lastname = '';
            $scope.email = '';
            $scope.del_btn = {}
            $scope.upd_btn = {}
        }
        $scope.saveData = function() {
            $scope.updatebutton = true;
            $scope.submitdata = true;
            $scope.cancelbutton = true;
            $scope.savedata = true;
            $scope.del_btn = {};
            $scope.upd_btn = {};

        }
    }
})

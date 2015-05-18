/* 
 * The MIT License
 *
 * Copyright 2015 Leonardo.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* global angular */

angular.module('everemindApp').controller('ngDashboardCtrl', function ($scope, ngNotifier, $localStorage) {
    $scope.$storage = $localStorage;

    $scope.data = {
        adding: false,
        add: {
            name: "",
            color: "#FFFFFF",
            style: {
                'background-color': '#FFFFFF'
            }
        },
        categories: []
    };
    
    $scope.createStyle = function(color){
        return {'background-color': color};
    };
    
    $scope.$watch(
        function() { 
            return $scope.data.add.color; 
        }, 
        function() {
            $scope.data.add.style = {'background-color': $scope.data.add.color};
        }
    );
    
    $scope.getUserName = function () {
        return $scope.$storage.sessionUser.fullName;
    };
    
    $scope.cancelAddCategory = function(){
        $scope.data.add = {
            name: "",
            color: "#FFFFFF",
            style: {
                'background-color': '#FFFFFF'
            }
        };
        $scope.data.adding = false;
    };
    
    $scope.getUserCategories = function(){
        $.getJSON("ServletGetUserCategories?idUser=" + $scope.$storage.sessionUser._id, {}, function (data) {
            updateCategories(data);
        });
    };
    
    $scope.saveAddCategory = function(){
        $.ajax({
            dataType: "text",
            url: "ServletCreateCategory?name=" + $scope.data.add.name + "&color=" + $scope.data.add.color + "&idConta=" + $scope.$storage.sessionUser._id,
            success: function () {
                cleanAndAdd();
                $scope.cancelAddCategory();
                $scope.getUserCategories();
                ngNotifier.notify("dashboard.addCategory");
            }
        });
    };

    $scope.addCategory = function () {
        $scope.data.adding = true;
        loadJQuery();
    };
    
    $scope.loadJQuery = function(){
        loadJQuery();
    };
    
    var updateCategories = function(data){
        $scope.data.categories = data;
        $scope.$save;
    };
    
    var cleanAndAdd = function(){
        $scope.data.categories.push({name: $scope.data.add.name, color: $scope.data.add.color});
        $scope.data.add = {
            name: "",
            color: "#FFFFFF",
            style: {
                'background-color': '#FFFFFF'
            }
        };
        $scope.data.adding = false;
        $scope.$apply();
    };
});
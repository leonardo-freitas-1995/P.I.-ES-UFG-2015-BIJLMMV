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

/* global angular, pageID */

angular.module('everemindApp').controller('ngNavbarCtrl', function ($scope, ngNotifier, $localStorage) {
    $scope.$storage = $localStorage;
    
    $scope.pageID = pageID;
    
    $scope.home = "index.jsp";
    
    $scope.data = {
        email: "",
        password: ""
    };
    
    $scope.forms = {
        
    };
    
    var email = "";
    
    $scope.isLogged = function(){
        return $scope.$storage.sessionUser;
    };
    
    if ($scope.isLogged())
        $scope.home = "dashboard.jsp";
    
    $scope.getUserName = function(){
        return $scope.$storage.sessionUser.fullName;
    };
    
    $scope.login = function(){
        email = $scope.data.email;
        if ($scope.forms.loginForm.inputLogin.$error.required){
            ngNotifier.error("navbar.errors.requiredEmail");
            return;
        }
        if ($scope.forms.loginForm.inputLogin.$error.email){
            ngNotifier.error("navbar.errors.notAnEmail");
            return;
        }
        if ($scope.forms.loginForm.inputPassword.$error.required){
            ngNotifier.error("navbar.errors.requiredPassword");
            return;
        }
        $.getJSON("ServletAuthenticate?email=" + $scope.data.email + "&password=" + $scope.data.password, {}, function (data) {
            if (!data.auth) {
                ngNotifier.error("navbar.errors.auth");
                return;
            }
            startUserSession(data);
        });
    };
    
    $scope.logout = function(){
        $scope.$storage.exiting = true;
        $scope.$storage.pendingMessage = {msg: "navbar.logout" + randomMsg(3), msgType: "notify", param: {name:$scope.getUserName()}};
        $scope.$storage.$save();
        window.location.href = "index.jsp";
    };
    
    var randomMsg = function (max) {
        return Math.floor((Math.random() * max) + 1).toString();
    };
    
    var startUserSession = function(){
        $.getJSON("ServletGetUserJSON?email=" + email, {}, function (data) {
            setUserSession(data);
        });
    };
    
    var setUserSession = function(json){
        $scope.$storage.sessionUser = json;
        if (!json.verifiedPrimaryEmail)
            $scope.$storage.pendingMessage = {msg: "navbar.verifyPrimary", msgType: "warning"};
        else if (!json.verifiedSecondaryEmail)
            $scope.$storage.pendingMessage = {msg: "navbar.verifySecondary", msgType: "warning"};
        else
            $scope.$storage.pendingMessage = {msg: "navbar.login" + randomMsg(3), msgType: "notify", param: {name:$scope.getUserName()}};
        $scope.$storage.$save();
        window.location.href = "dashboard.jsp";
    };
});
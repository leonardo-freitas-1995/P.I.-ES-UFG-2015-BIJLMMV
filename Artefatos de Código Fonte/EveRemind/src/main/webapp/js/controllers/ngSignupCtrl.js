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

/* global angular, pagesConfig, pageID */

angular.module('everemindApp').controller('ngSignupCtrl', function ($scope, ngNotifier, $localStorage) {
    $scope.$storage = $localStorage;

    $scope.data = {
        email: "",
        password: "",
        passwordAgain: "",
        name: ""
    };

    $scope.forms = {
    };

    $scope.signup = function () {
        if ($scope.forms.signupForm.$error.required) {
            ngNotifier.error("signup.errors.required");
            return;
        }
        if ($scope.forms.signupForm.inputEmail.$error.email) {
            ngNotifier.error("signup.errors.notAnEmail");
            return;
        }
        var onlyLN = /^([a-zA-Z0-9]+)$/;
        var hasL = /[A-Z]/i;
        var hasN = /\d/;
        if ($scope.forms.signupForm.$error.minlength || !onlyLN.test($scope.data.password) || !hasL.test($scope.data.password) || !hasN.test($scope.data.password)) {
            ngNotifier.error("signup.errors.passwordRegex");
            return;
        }
        if ($scope.data.password !== $scope.data.passwordAgain) {
            ngNotifier.error("signup.errors.notMatch");
            return;
        }
        $.getJSON("ServletCheckEmail?email=" + $scope.data.email, {}, function (data) {
            if (data.registered) {
                ngNotifier.error("signup.errors.registered");
                return;
            }
            createUser();
        });
    };

    var createUser = function () {
        $.ajax({
            dataType: "text",
            url: "ServletCreateUser?email=" + $scope.data.email + "&name=" + $scope.data.name + "&password=" + $scope.data.password,
            success: function () {
                finishSignup();
            }
        });
    };

    var finishSignup = function () {
        $scope.$storage.pendingMessage = {msg: "signup.success", msgType: "notify"};
        $scope.$storage.$save();
        window.location.href = "index.jsp";
    };
});
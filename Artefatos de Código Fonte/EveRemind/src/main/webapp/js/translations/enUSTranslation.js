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

angular.module('everemindApp').config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('en-US', {
            pages: {
                titles: {
                    index: "Index",
                    signup: "Sign Up",
                    dashboard: "Home",
                    listView: "List",
                    calendarView: "Calendar",
                    account: "Account",
                    passwordRecovery: "Password Recovery",
                    emailVerification: "Email Verification"
                }
            },
            home: {
                mainTitle: "Organize your everyday.",
                mainText: "With EveRemind, your tasks and assignments are always tracked" +
                        " so you never miss them, eliminating concerns of oblivion and" +
                        "increasing your productivity.",
                createAccount: "Start to remind by creating your account",
                register: "Sign Up",
                forgot: "Forgot your password?",
                modalTitle: "Request Password Recover",
                email: "Email",
                obs: "*Your email must be verified in order to recover your password.",
                send: "Recover",
                sucessfulSend: "A message with instructions to redefine your password was sent to the given email.",
                errorSend: "The given email doesn't belong to an account or isn't verified."
            },
            signup: {
                title: "New Account",
                textA: "Please fill in the requested information below to register a new account to use EveRemind.",
                textB: "It takes no time at all!",
                name: "Name",
                email: "Email",
                password: "Password",
                repeatPassword: "Repeat Password",
                finish: "Get My Account",
                confirmEmail: "A verification message will be sent to your email. Verifying your email" +
                        " grants access to task notification and password recover features.",
                errors: {
                    required: "Please fill in all the information fields.",
                    notMatch: "The given passwords do not match.",
                    registered: "The given e-mail is already registered to another account.",
                    passwordRegex: "A valid password has a minimum of 8 characters between" +
                            " letters and numbers with at least one letter and one number.",
                    notAnEmail: "The given e-mail is not valid."
                },
                success: "Nice! Your new account is ready for use."
            },
            navbar: {
                errors: {
                    auth: "Given e-mail and password are not relative or registered",
                    requiredEmail: "Please inform your e-mail.",
                    requiredPassword: "Please inform your password.",
                    notAnEmail: "Given e-mail is not valid."
                },
                menu: {
                    colapsedMenu: "Open Navigation",
                    dashboard: "Home",
                    view: "View",
                    listView: "List",
                    calendarView: "Calendar",
                    account: "Account",
                    exit: "Sign Out",
                    email: "E-mail",
                    password: "Password",
                    login: "Sign In"
                },
                verifyEmail: "Your email is still unverified. Verify it by following the email message instructions" +
                        " to make use of the task notification and password recover services.",
                logout1: "Bye, {{name}}",
                logout2: "See you, {{name}}",
                logout3: "Take care, {{name}}",
                login1: "Hi, {{name}}",
                login2: "Hello, {{name}}",
                login3: "Greetings, {{name}}"
            },
            dashboard: {
                newCategory: {
                    name: "Category Name",
                    color: "Category Color",
                    cancel: "Cancel",
                    save: "Save"
                },
                editCategory: {
                    name: "Category New Name",
                    color: "Category New Color",
                    cancel: "Cancel",
                    save: "Save"
                },
                deleteCategory: {
                    cancel: "Cancel",
                    doDelete: "Erase",
                    modalTitle: "Erasing category <strong>{{category}}</strong>",
                    modalText: "Erasing the category <strong>{{category}}</strong> also erases" +
                            " all related activities. Do you wish to proceed?"
                },
                addActivity: {
                    modalTitle: "New activity in category <strong>{{category}}</strong>",
                    title: "Name",
                    description: "Description",
                    priority: "Priority",
                    priorities: {
                        low: "Low",
                        mid: "Moderate",
                        high: "High",
                        critical: "Critical"
                    },
                    date: "Date",
                    time: "Time",
                    notify: "Email Notification",
                    on: "ON",
                    off: "OFF",
                    cancel: "Cancel",
                    create: "Create"
                },
                showActivity: {
                    modalTitle: "<strong>{{category}}</strong> | {{activity}}",
                    cancel: "Cancel",
                    delete: "Erase",
                    edit: "Edit",
                    update: "Update",
                    setDone: "Mark as Done"
                },
                tooltips: {
                    markDone: "Mark as done is irreversible. It will deactivate email notifications for" +
                            " this activity and it removes this activity from the home page.",
                    addCategory: "Add category of activities",
                    editCategory: "Edit category",
                    deleteCategory: "Erase category",
                    addActivity: "Add new activity",
                    priorityHelpTitle: "<p align='justify'>Priority choice affects notification behavior in the following manner:</p>",
                    priorityHelp: "<p align='left'><strong class='span-primary'>Low:</strong> Sends emails weekly, 1 day and 1 hour from deadline date/time.<br>" +
                            "<strong class='span-success'>Moderate:</strong> Sends emails in 3 days interval, 1 day, 6 and 1 hour from deadline date/time.<br>" +
                            "<strong class='span-warning'>High:</strong> Sends emails daily, 6, 3 and 1 hour from deadline date/time.<br>" +
                            "<strong class='span-danger'>Critical:</strong> Sends emails in 12 hours interval, 6, 3 and 1 hour from deadline date/time.</p>"
                },
                errors: {
                    change: "There are no changes to update.",
                    invalidTime: "Invalid time.",
                    minSpace: "The occurrence of an activty has to be at least in 1 hour from now." +
                            " In other words, at {{minDateTime}}.",
                    addCategoryName: "Category name is empty.",
                    alreadyRegistered: "This name is already assigned to a category.",
                    editingCategory: "Please finish editing a category before editing another.",
                    addActivityInput: "Please fill in all fields.",
                    addActivityLength: "Activity name can have up to 80 characters.",
                    addCategoryLength: "Category name can have up to 20 characters."
                },
                addCategory: "Category created.",
                editCategoryMsg: "Category updated.",
                deleteCategoryMsg: "Category erased.",
                createdActivity: "Activity created.",
                updatedActivity: "Activity updated.",
                deleteActivityMsg: "Activity erased.",
                markDoneActivityMsg: "Activity was set as done."
            },
            listView: {
                categories: "Categories",
                activities: "Activities",
                allCategory: "All categories",
                actions: "Actions",
                orderingBy: "Ordering by ",
                dateTime: "Date/Time",
                at: "at",
                stat: "Status",
                sortBy: {
                    label: "Order by ",
                    date: "Date",
                    priority: "Priority"
                },
                status: {
                    done: "Activity concluded",
                    expired: "Activity expired",
                    inTime: "Activity in progress"
                },
                showDone: "Show concluded",
                notShowDone: "Hide concluded",
                showExpired: "Show expired",
                notShowExpired: "Hide expired"
            },
            calendarView: {
                months: {
                    jan: "January",
                    feb: "February",
                    mar: "March",
                    apr: "April",
                    may: "May",
                    jun: "June",
                    jul: "July",
                    aug: "August",
                    sep: "September",
                    oct: "October",
                    nov: "November",
                    dec: "December"
                },
                days: {
                    sun: "Sunday",
                    mon: "Monday",
                    tue: "Tuesday",
                    wed: "Wednesday",
                    thu: "Thursday",
                    fri: "Friday",
                    sat: "Saturday"
                },
                colorBy: "Show activity color by ",
                showingBy: "Showing activities by color of ",
                category: "Category",
                priority: "Priority",
                previous: "Last Week",
                today: "View Today",
                next: "Next Week"
            },
            verifyEmail: {
                title: "Verify email",
                email: "Email",
                token: "Verification Code",
                verify: "Verify",
                empty: "Please fill in all data fields.",
                checkError: "Email/token not existent or already verified.",
                finishedVerify: "Email verified sucessfully."
            },
            passwordRecover: {
                title: "Recover Password",
                email: "Email",
                token: "Recovery Code",
                proceed: "Proceed",
                empty: "Please fill in all data fields.",
                checkError: "Email/token not existent or already used.",
                newPassword: "New Password",
                repeatNewPassword: "Repeat New Password",
                reset: "Reset Password",
                finishedVerify: "Password updated sucessfully."
            },
            account: {
                success: "Your account data was updated.",
                passwordSuccess: "Your password was updated.",
                delete: "Your account was deleted. EveRemind me and FAREWELL!",
                title: "Edit account information",
                name: "Name",
                email: "Email",
                password: "Password",
                save: "Update Info",
                changePassword: "Update password",
                deleteAccount: "Delete Account",
                cancel: "Cancel",
                confirmEmail: "Updating email adress requires a new verification process.",
                confirmed: "E-mail verified.",
                notConfirmed: "Pending verification.",
                resentToken: "The verification code was resent to your email.",
                modalPassword: {
                    title: "Update Password",
                    currentPassword: "Current Password",
                    newPassword: "New Password",
                    repeatNewPassword: "Repeat New Password",
                    save: "Update"
                },
                modalDelete: {
                    title: "Delete Account",
                    text: "Deleting your account also deletes all your information. To continue" +
                            ", insert email and password below.",
                    email: "Email",
                    password: "Password",
                    exclude: "Delete Account"
                },
                errors: {
                    required: "Please fill in all data fields.",
                    change: "No changes were made.",
                    auth: "Given current password is not correct.",
                    authDelete: "Email and password do not match.",
                    notUser: "This email is not currently logged in.",
                    samePassword: "The current and new passwords are the same.",
                    notAnEmail: "Given e-mail is not valid.",
                    resendToken: "There was an error in resending the verification code because it's already verified."
                }
            },
            general: {
                notifications: {
                    notAuthorized: "You have to be signed in to acess this page."
                }
            }
        });
    }]);
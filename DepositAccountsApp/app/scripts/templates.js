angular.module("app.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("views/account-create.tpl.html","<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <div class=\"panel panel-info\" >\n            <div class=\"panel-heading\">\n                <div class=\"panel-title\">Nueva Cuenta de Depósito</div>\n            </div>\n\n            <div class=\"panel-body\" >\n                <form name=\"createAccount\" class=\"form-horizontal\" role=\"form\" ng-submit=\"accountcreate.create()\">\n                    <fieldset>\n                        <legend>Datos de la Cuenta de Depósito</legend>\n                        <div class=\"form-group\">\n                            <label class=\"col-sm-3 control-label\" for=\"number\">Id</label>\n                            <div class=\"col-sm-9\">\n                                <input ng-model=\"accountcreate.account.id\" type=\"text\" class=\"form-control\" name=\"account_id\" id=\"account_id\" disabled>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-sm-3 control-label\" for=\"title\">Banco</label>\n                            <div class=\"col-sm-9\">\n                                <input ng-model=\"accountcreate.account.bank\" type=\"text\" class=\"form-control\" name=\"account_bank\" id=\"account_bank\" required>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-sm-3 control-label\" for=\"title\">Sucursal</label>\n                            <div class=\"col-sm-9\">\n                                <input ng-model=\"accountcreate.account.branch\" type=\"text\" class=\"form-control\" name=\"account_branch\" id=\"account_branch\" required>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-sm-3 control-label\" for=\"title\">Cuenta</label>\n                            <div class=\"col-sm-9\">\n                                <input ng-model=\"accountcreate.account.account\" type=\"text\" class=\"form-control\" name=\"account_account\" id=\"account_account\" required>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-sm-3 control-label\" for=\"title\">Referencia</label>\n                            <div class=\"col-sm-9\">\n                                <input ng-model=\"accountcreate.account.reference\" type=\"text\" class=\"form-control\" name=\"account_reference\" id=\"account_reference\" required>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-sm-3 control-label\" for=\"title\">Grupo</label>\n                            <div class=\"col-sm-9\">\n                                <input ng-model=\"accountcreate.account.ownerGroup\" type=\"text\" class=\"form-control\" name=\"account_ownerGroup\" id=\"account_ownerGroup\" required>\n                            </div>\n                        </div>\n                    </fieldset>\n                    <div class=\"col-sm-offset-4 col-sm-2\">\n                      <button type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"!createAccount.$valid\">\n                          <span>Grabar</span>\n                      </button>\n                    </div>\n                    <div class=\"col-sm-offset-2 col-sm-4\">\n                        <a ng-click=\"accountcreate.back()\" class=\"btn btn-primary\">Volver</a>\n                    </div>\n                </form>\n            </div>\n            <div class=\"panel-footer\" ng-hide=\"accountcreate.message===\'\'\">\n              <div class=\"alert alert-info\" role=\"alert\" >\n                  <span class=\"glyphicon glyphicon-info-sign\" aria-hidden=\"true\"></span>\n                  {{accountcreate.message}}\n              </div>\n            </div>\n        </div>\n    </div>\n\n\n</div>\n");
$templateCache.put("views/account-detail.tpl.html","<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <div class=\"panel panel-info\" >\n            <div class=\"panel-heading\">\n                <div class=\"panel-title\">Cuenta de Depósito {{accountdetail.account.id}}</div>\n            </div>\n\n            <div class=\"panel-body\" >\n                <form name=\"updateAccount\" class=\"form-horizontal\" role=\"form\" ng-submit=\"accountdetail.update()\">\n                    <fieldset>\n                        <legend>Datos de la Cuenta de Depósito</legend>\n                        <div class=\"form-group\">\n                            <label class=\"col-sm-3 control-label\" for=\"number\">Id</label>\n                            <div class=\"col-sm-9\">\n                                <input ng-model=\"accountdetail.account.id\" type=\"text\" class=\"form-control\" name=\"account_id\" id=\"account_id\" disabled>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-sm-3 control-label\" for=\"title\">Banco</label>\n                            <div class=\"col-sm-9\">\n                                <input ng-model=\"accountdetail.account.bank\" type=\"text\" class=\"form-control\" name=\"account_bank\" id=\"account_bank\" required>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-sm-3 control-label\" for=\"title\">Sucursal</label>\n                            <div class=\"col-sm-9\">\n                                <input ng-model=\"accountdetail.account.branch\" type=\"text\" class=\"form-control\" name=\"account_branch\" id=\"account_branch\" required>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-sm-3 control-label\" for=\"title\">Cuenta</label>\n                            <div class=\"col-sm-9\">\n                                <input ng-model=\"accountdetail.account.account\" type=\"text\" class=\"form-control\" name=\"account_account\" id=\"account_account\" required>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-sm-3 control-label\" for=\"title\">Referencia</label>\n                            <div class=\"col-sm-9\">\n                                <input ng-model=\"accountdetail.account.reference\" type=\"text\" class=\"form-control\" name=\"account_reference\" id=\"account_reference\" required>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-sm-3 control-label\" for=\"title\">Grupo</label>\n                            <div class=\"col-sm-9\">\n                                <input ng-model=\"accountdetail.account.ownerGroup\" type=\"text\" class=\"form-control\" name=\"account_ownerGroup\" id=\"account_ownerGroup\" required>\n                            </div>\n                        </div>\n                    </fieldset>\n                    <div>\n                      <div class=\"col-sm-offset-4 col-sm-2\">\n                        <button type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"!updateAccount.$valid\">\n                            <span>Grabar</span>\n                        </button>\n                      </div>\n                      <div class=\"col-sm-offset-2 col-sm-4\">\n                          <a ng-click=\"accountdetail.back()\" class=\"btn btn-primary\">Volver</a>\n                      </div>\n                    </div>\n\n                </form>\n            </div>\n            <div class=\"panel-footer\"  ng-hide=\"accountdetail.message===\'\'\">\n              <div class=\"alert alert-info\" role=\"alert\">\n                  <span class=\"glyphicon glyphicon-info-sign\" aria-hidden=\"true\"></span>\n                  {{accountdetail.message}}\n              </div>\n            </div>\n        </div>\n    </div>\n\n\n</div>\n");
$templateCache.put("views/account-list.tpl.html","<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <div class=\"panel panel-info\" >\n            <div class=\"panel-heading\">\n                <div class=\"panel-title\">Listado de Cuentas de Depósito</div>\n                <div style=\"float:right; position: relative; top:-28px\">\n                  <a ng-click=\"accountlist.new()\"  class=\"btn btn-primary\">Añadir</a>\n                </div>\n            </div>\n\n            <div class=\"panel-body\" >\n                <table class=\"table table-bordered table-condensed\">\n                    <tr>\n                        <th>Id</th>\n                        <th>Banco</th>\n                        <th>Sucursal</th>\n                        <th>Cuenta</th>\n                        <th>Referencia</th>\n                        <th>Grupo</th>\n                    </tr>\n\n                    <tr ng-repeat=\"account in accountlist.accounts\">\n                        <td><a ng-href=\"account/{{ account.id }}\">{{account.id}}</a></td>\n                        <td>{{account.bank}}</td>\n                        <td>{{account.branch}}</td>\n                        <td>{{account.account}}</td>\n                        <td>{{account.reference}}</td>\n                        <td>{{account.ownerGroup}}</td>\n                    </tr>\n                </table>\n            </div>\n            <div class=\"panel-footer\" ng-hide=\"accountlist.error===\'\'\">\n              <div class=\"alert alert-danger\" role=\"alert\">\n                <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n                <span class=\"sr-only\">Error:</span>\n                {{accountlist.error}}\n              </div>\n            </div>\n        </div>\n    </div>\n</div>\n");}]);
/*global QUnit*/

sap.ui.define([
	"project1/controller/Prueba.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Prueba Controller");

	QUnit.test("I should test the Prueba controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
